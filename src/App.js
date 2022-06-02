import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';
import Products from './pages/products/Products';
import Home from './pages/Home/Home'
import ReactDOM from "react-dom/client";
import Facilities from './pages/Faclities/Facilities';
import About from './pages/About/About';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Header/Navbar';
import Footer from './components/footer/footer'
function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />}> </Route>
        <Route path="Products" element={<Products />}></Route>
        <Route path="Facilities" element={<Facilities />}></Route>
        <Route path="About" element={<About />}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
