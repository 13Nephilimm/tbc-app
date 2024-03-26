import "./App.css";
import Home from "./pages/home-page/Home";
import Contact from "./pages/contact-page/Contact";
import ProfilePage from "./pages/profile-page/ProfilePage";
import BlogPage from "./pages/blog-page/BlogPage";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
