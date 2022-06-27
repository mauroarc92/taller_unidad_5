import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {

return (

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
  <div class="container-fluid">
    <a class="navbar-brand" >App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <NavLink to="/" className="nav-link" >Api Imagenes</NavLink>
       
        </li>
        <li class="nav-item">
        <NavLink to="/restaurante" className="nav-link">Restaurante</NavLink>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>

)

}

export default Header;