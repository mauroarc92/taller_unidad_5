
import './App.css';
 import React from 'react';
 import Header from "./components/Header";
 import Footer from "./components/Footer";
 import ImagenApi from "./pages/ImagenApi";
 import Restaurante from "./pages/Restaurante";

 import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
     <Header />
      <Routes>
        <Route path="/" element={<ImagenApi />} />
        <Route path="/restaurante" element={  <Restaurante />}>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
