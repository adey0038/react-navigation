import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "./context/themeProvider.jsx";
import Header from "./components/header.jsx";
import Nav from "./components/nav.jsx";
import Home from "./pages/home.jsx";
import List from "./pages/list.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="*" element={<div>NotFound</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
