import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newItem,setNewItem]=useState("");
  const [categorySelected,setCategorySelected]=useState("Produce");
  function handleAddItem(event)
  
  { 
    event.preventDefault(); 
    console.log(categorySelected, newItem)
   const  newItemObj = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: newItem,
      category: categorySelected,
      
    };
    console.log(newItemObj.id , newItemObj.category)
    console.log(newItemObj);
    onItemFormSubmit(newItemObj);
    setNewItem("");
    setCategorySelected("Produce");
  }
  return (
    <form className="NewItem" onSubmit={handleAddItem}>
      <label>
        Name:
        <input type="text" name="name" onChange={(e)=>setNewItem(e.target.value)} value={newItem}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={(e)=>setCategorySelected(e.target.value)} value={categorySelected} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
