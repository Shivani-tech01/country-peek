import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      {/* Header always visible */}
      <Header />

      <main>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Country Page (placeholder for now) */}
          <Route path="/country/:name" element={<div>Country Page</div>} />

          {/* Favourites Page (placeholder for now) */}
          <Route path="/favourites" element={<div>Favourites Page</div>} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;