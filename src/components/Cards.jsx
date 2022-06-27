import React, { useCallback, useEffect, useState } from "react";
import Card from "./Card";
import Loading from "./Loading";
import FormImg from "./FormImg";
 
const Cards = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
 
  const peticion = useCallback(async () => {
    const key = "client_id=wf9NUY2jhyRCZWD04Ei-_ZK2vkNi4EBikGMwyZ7nAUU";
 
    let route = `https://api.unsplash.com/photos/?${key}`;
 
    if (input !== "") {
      route = `https://api.unsplash.com/search/photos/?query=${encodeURI(input)}&${key}`;
    }

    setLoading(true)
 
    const res = await fetch(route);
 
    const data = await res.json();
 
    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }

    setLoading(false)
  }, [input]);
 
  useEffect(() => {
    peticion();
    
    
  }, [peticion]);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    let text = e.target[0].value;
 
    setInput(text);

    text = e.target[0].value ="";

    
 
    
  };
 
 
  return (
    <>
      
      <FormImg  handleSubmit={handleSubmit}/>
      <hr />

      {loading &&<Loading/>}
 
       <div className="row">
       {images.map((img) => {
        return (
            <div key={img.id} className="col">
              <Card  img={img.urls.regular} />
           </div> 
        )
      })}
       </div>
      
    </>
  );
};
 
export default Cards;