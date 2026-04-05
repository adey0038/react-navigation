import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/themeProvider.jsx";
import Nav from "./components/nav.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/list" element={<div>List</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
