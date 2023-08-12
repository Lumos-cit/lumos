import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import RouteNames from "./components/RouteNames";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <RouteNames />
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="blogs" element={<Blogs />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
