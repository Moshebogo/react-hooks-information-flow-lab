import React, { useState } from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";
import Header from "./Header";
import Filter from "./Filter";
import items from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode(isDarkMode => !isDarkMode);
  }  

  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
      
    return item.category === selectedCategory;
  });

  return (
    <>
    <Header onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode}/>
    {/* <Filter selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} itemsToDisplay={itemsToDisplay}/> */}
    </>
  );
}

export default App;
