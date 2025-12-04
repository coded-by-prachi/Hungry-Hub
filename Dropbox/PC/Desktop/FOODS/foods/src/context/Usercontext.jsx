import React, { createContext, useState } from 'react';
import { food_items } from '../food.js';

export const dataContext = createContext();

function Usercontext({ children }) {
  const [cate, setcate] = useState(food_items)
  const [input, setInput] = useState("")
    const [showCart, setShowCart]= useState(false);

  const data = { input, setInput , cate, setcate, showCart, setShowCart};
  return (

    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>

  );
}

export default Usercontext
