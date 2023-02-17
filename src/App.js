import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Test1 from "./pages/Test1";
import Test2 from "./pages/Test2";
import Test3 from "./pages/Test3";
import Test4 from "./pages/Test4";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Pricing" element={<Pricing />} />
        <Route exact path="/Test1" element={<Test1 />} />
        <Route exact path="/Test2" element={<Test2 />} />
        <Route exact path="/Test3" element={<Test3 />} />
        <Route exact path="/Test4" element={<Test4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
