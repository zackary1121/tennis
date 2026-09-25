"""Backend security-hardening verification tests (SEC-001, SEC-002)."""
import os
import requests
import pytest

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://stroke-studio-2.preview.emergentagent.com').rstrip('/')
# Fallback: read from frontend .env if env var missing
if 'REACT_APP_BACKEND_URL' not in os.environ:
    try:
        with open('/app/frontend/.env') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL'):
                    BASE_URL = line.split('=', 1)[1].strip().strip('"').rstrip('/')
    except Exception:
        pass

API = f"{BASE_URL}/api"


# --- Root endpoint ---
class TestRoot:
    def test_root_hello_world(self):
        r = requests.get(f"{API}/")
        assert r.status_code == 200
        assert r.json() == {"message": "Hello World"}


# --- SEC-001 input validation bounds ---
class TestStatusCreateBounds:
    def test_create_valid_short_name(self):
        r = requests.post(f"{API}/status", json={"client_name": "qa-tester"})
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["client_name"] == "qa-tester"
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "timestamp" in data

        # Verify persistence via GET
        g = requests.get(f"{API}/status")
        assert g.status_code == 200
        assert any(s["id"] == data["id"] for s in g.json())

    def test_create_rejects_overlong_name(self):
        r = requests.post(f"{API}/status", json={"client_name": "x" * 300})
        assert r.status_code == 422, f"expected 422, got {r.status_code}: {r.text}"

    def test_create_rejects_empty_name(self):
        r = requests.post(f"{API}/status", json={"client_name": ""})
        assert r.status_code == 422, f"expected 422, got {r.status_code}: {r.text}"

    def test_create_boundary_100_chars_ok(self):
        r = requests.post(f"{API}/status", json={"client_name": "a" * 100})
        assert r.status_code == 200

    def test_create_boundary_101_chars_rejected(self):
        r = requests.post(f"{API}/status", json={"client_name": "a" * 101})
        assert r.status_code == 422


# --- SEC-001 read bound ---
class TestStatusReadBound:
    def test_get_returns_list(self):
        r = requests.get(f"{API}/status")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        assert len(data) <= 100


# --- SEC-002 CORS: wildcard must NOT allow credentials ---
class TestCORSSecurity:
    def test_cors_no_credentials_with_wildcard(self):
        headers = {"Origin": "https://evil.example.com"}
        r = requests.get(f"{API}/", headers=headers)
        assert r.status_code == 200
        acac = r.headers.get("access-control-allow-credentials", "").lower()
        assert acac != "true", (
            f"CORS misconfig: allow-credentials='{acac}' with wildcard origin. "
            f"Full headers: {dict(r.headers)}"
        )

    def test_cors_preflight_no_credentials(self):
        headers = {
            "Origin": "https://evil.example.com",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "content-type",
        }
        r = requests.options(f"{API}/status", headers=headers)
        acac = r.headers.get("access-control-allow-credentials", "").lower()
        assert acac != "true", f"Preflight allow-credentials='{acac}' with wildcard origin"


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
