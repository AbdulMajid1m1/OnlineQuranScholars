import "./App.css";
import Home from "./assets/components/Home";
import Navbar from "./assets/components/Navbar";
import Courses from "./assets/components/Courses";
import Packages from "./assets/components/Packages";
import Blog from "./assets/components/Blog";
import Footer from "./assets/components/Footer";
// import Readmore from './assets/components/Readmore'
import Contact from "./assets/components/Contact";
// import Free from './assets/components/Free'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path='/readmore' element={<Readmore/>}/> */}
          {/* <Route path='/free' element={<Free/>}/> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
