// import React from "react";
// import Card from '../Components/Cards.jsx';
import Nav from "../Components/Nav";
import { Category } from "../Categories/Category.jsx";
import Cards from "../Components/Cards.jsx";
import { food_items } from "../food.js";
import React, { useState, useContext } from "react";
import { dataContext } from '../context/Usercontext';
import { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../Components/Card2.jsx";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { duration } from "@mui/material";



function Home() {
  let { cate, setcate, input, showCart, setShowCart } = useContext(dataContext);
const { cartOpen } = useSelector((state) => state.cart);

  function filter(category) {
    if (category === "All") {
      setcate(food_items.filter(item => item.show_in_all !== false));
    } else {
      setcate(food_items.filter(item =>
        Array.isArray(item.food_category)
          ? item.food_category.includes(category)
          : item.food_category === category
      ));
    }
  }

  useEffect(() => {
    filter("All");  // Load only allowed items initially
  }, []);

  let items = useSelector(state => state.cart)
const subtotal=items.reduce((total, item)=>total+item.qnt*item.price, 0)
const deliveryfee=20;
const taxes= subtotal*0.5/100;
const total= Math.floor(subtotal+ deliveryfee+ taxes)

  return (

    <div className="bg-gray-100 min-h-screen">
      {/* //navbar section---------------------------------------- */}
      <div className="bg-red-700 w-full h-[70px]  text-black">
        <Nav />
      </div>
      {input.trim() === "" && (
        <div className="flex flex-wrap justify-center gap-3 py-1 mt-5">
          {Array.isArray(Category) ? (
            Category.map((item) => (
              <div key={item.id} className="flex flex-col items-center w-[100px] h-[70px] bg-[#8482810f] rounded-xl py-1.5 shadow-xl hover:bg-red-700 hover:text-white transition-all duration-100 hover:cursor-pointer" onClick={() => filter(item.name)}>
                <div className="text-3xl mb-1">{item.image}</div>
                <p className="text-lg font-semibold">{item.name}</p>
              </div>
            ))
          ) : (
            <p> Category is not an array</p>
          )}
        </div>
      )}

      <div className="flex flex-wrap justify-center">
        {cate.length>1?(
          cate.map((item) => (
          <Cards
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type} />
        ))):(
        <div className="text-gray-600 text-center text-xl font-semibold pt-15 ">No Result Found</div>
        )}
        
      </div>

      {/* cart--------------------------------------------------------------------------- */}
      <div className={`w-full md:w-[35vw] h-[100%] p-6 fixed top-0 right-0 bg-[#EAEAEA] overflow-auto shadow-xl transition-all duration-500 flex flex-col items-center ${showCart ? "translate-x-0" : "translate-x-full"} `}>
        <header className="w-[100%] flex justify-between items-center">
          <span className=" text-[18px] font-bold">Order Items</span>
          <RxCross2 className="w-[20px] h-[30px] font-bold cursor-pointer hover:grey-500" onClick={() => setShowCart(false)} />
        </header>
        {items.length>0?   <>
        {/* card section--------------------------------------------------------------------------------------------------------------------------- */}
        <div className="w-full mt-8 flex flex-col gap-4">
          {items.map((item) => (
            <Card2
              id={item.id}
              name={item.name}
              price={item.price}
              key={item.id}
              image={item.image}
              type={item.type}
              qnt={item.qnt} 
                />
          ))}
        </div>
        <div className="w-full border-t-2 border-b-2 border-gray-400 mt-5  flex flex-col gap-2 py-3">
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-gray-600 font-bold gap-2">Subtotal</span>
            <span className="font-bold text-gray-600">Rs {subtotal} /-</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-gray-600 font-bold gap-2">Delivery Fee</span>
            <span className="font-bold text-gray-600">Rs {deliveryfee} /-</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-gray-600 font-bold gap-2">Taxes</span>
            <span className="font-bold text-gray-600">Rs {taxes} /-</span>
          </div>
        </div>
         <div className="w-full flex justify-between items-center">
            <span className="text-xl font-bold gap-2 ">Total</span>
            <span className="font-bold text-xl">Rs {total} /-</span>
          </div>
          <button className='w-[80%] p-4 bg-gray-300  rounded-xl hover:bg-red-700  hover:text-white transition-all' onClick={()=>{
            toast.success("Order Placed") 
          }}>Place Order</button>
          </>:
          <div className="text-center text-xl font-semibold  text-gray-600 pt-60">Empty Card</div>}
     
      </div>
    
    </div>
  );
}

export default Home;
