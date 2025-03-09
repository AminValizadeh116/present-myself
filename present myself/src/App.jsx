import { Route, Routes } from "react-router";
import Services from "./pages/services/Services";
import Home from "./pages/home/Home";
import Contents from "./pages/contents/Contents";
import Location from "./pages/blogs/Blogs";
import About from "./pages/aboutUs/About";
import './app.css'

function App() {
  return (
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/contents" element={<Contents/>} />
      <Route  path="/services" element={<Services/>} />
      <Route  path="/location" element={<Location/>} />
      <Route  path="/about" element={<About/>} />
    </Routes>
  );
}

export default App;
