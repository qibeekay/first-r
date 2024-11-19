import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar";
import Role from "./components/Role/Role";
import About from "./pages/About";
import Home from "./pages/Home";
import Service from "./pages/Service";

function App() {
  console.log("Hello");
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;
