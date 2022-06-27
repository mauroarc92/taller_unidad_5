import React, { useState } from "react";
import Menu from "../ComponentsRestaurante/Menu";
import Categories from "../ComponentsRestaurante/Categories";
import items from "../ComponentsRestaurante/data";

import logo from "../logo.JPG";
import Whatsapp from "../ComponentsRestaurante/Whatsapp";
import FormularioContacto from "../ComponentsRestaurante/FormularioContacto";



import '../App.css';



const allCategories = ["todo", ...new Set(items.map((item) => item.category))];

export default function Restaurante() {

  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "todo") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    
    <main>
      <section className="menu section">
        <div className="title">
          <img src={logo} alt="logo" className="logo" data-testid="logo" />
          <h2>menú</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />

        <Menu items={menuItems} />
      
      </section>
      <Whatsapp />
      <FormularioContacto/>
     

    </main>
  )
}