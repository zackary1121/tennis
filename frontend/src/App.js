import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Home from "@/pages/Home";
import Forehand from "@/pages/Forehand";

function App() {
  return (
    <div className="App min-h-screen bg-background">
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forehand" element={<Forehand />} />
          </Routes>
          <Toaster position="bottom-right" />
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;
