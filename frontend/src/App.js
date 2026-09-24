import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Home from "@/pages/Home";
import Forehand from "@/pages/Forehand";

function App() {
  return (
    <div className="App min-h-screen bg-background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forehand" element={<Forehand />} />
        </Routes>
        <Toaster position="bottom-right" />
      </BrowserRouter>
    </div>
  );
}

export default App;
