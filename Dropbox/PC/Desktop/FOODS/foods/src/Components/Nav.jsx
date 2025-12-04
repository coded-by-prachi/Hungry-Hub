import React, { useContext, useEffect } from 'react'
import { IoFastFood } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { dataContext } from '../context/Usercontext';
import { food_items } from '../food'; // wherever your data is
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";



function Nav() {
  const { input, setInput, cate, setcate, showCart, setShowCart } = useContext(dataContext);
  useEffect(() => {
    let newlist = food_items.filter((item) => item.food_name.includes(input) || item.food_name.toLowerCase().includes(input))
    setcate(newlist)
  }, [input])

    let items=useSelector(state=>state.cart)

  return (
    // fastfoodicon---------------------------------------------------------------------------------------------------------------------------------------------------------------
      <div className="w-full h-[70px] flex items-center justify-between bg-[#EAEAEA] shadow-md px-6">
      
      {/* Logo / FastFood Icon */}
      <div className="flex items-center justify-center w-14 h-14 rounded-lg shadow-lg">
        <IoFastFood className="text-red-600 text-3xl" />
      </div>

      {/* Search Bar */}
      <div className="flex items-center flex-1 mx-6 bg-gray-100 rounded-lg shadow-sm h-12 px-4">
        <IoSearch className="text-gray-500 text-xl mr-2" />
        <input
          type="text"
          placeholder="Search your favourite food"
          className="w-full outline-none text-gray-700 text-lg bg-transparent"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>


      {/* Cart Icon */}
      <div className="relative cursor-pointer" onClick={()=>setShowCart(!showCart)}>
        <IoCartOutline  className="text-red-600 text-3xl" />
        <span className="absolute -top-2 -right-2 text-red-600 text-xs px-1  py-1 rounded-full ">
          {items?.length || 0}
        </span>
      </div>

    </div>
  )

}

export default Nav;
