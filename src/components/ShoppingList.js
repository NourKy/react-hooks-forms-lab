import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchValue] = useState(""); // Initialize the search text state
  const [array,setArray]=useState(items);
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(newSearchValue) {
    // Update the search text state when it changes in the Filter component
    setSearchValue(newSearchValue);
  }
  function onItemFormSubmit(element) {
    console.log(element);
    const updatedItems = [...array, element];
   setArray(updatedItems);
  }
  // Filter the items based on selected category and search text
  const filteredItems = array.filter((item) => {
    return (
      (selectedCategory === "All" || item.category === selectedCategory) &&
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={onSearchChange}
        search={search}
      />
      <ul className="Items">
      {filteredItems.map((item) => (
  <Item key={item.id} name={item.name} category={item.category} />
))}

      </ul>
    </div>
  );
}

export default ShoppingList;
