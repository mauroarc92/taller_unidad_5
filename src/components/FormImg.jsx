import React from 'react';
import { PropTypes } from "prop-types";
 
const FormImg = ({handleSubmit}) => {
    return (
        <>
        
        <form  onSubmit={handleSubmit}  class="d-flex m-4" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
        

        </>

    );
};
 
FormImg.propTypes = {
    handleSubmit: PropTypes.func
}

export default FormImg;