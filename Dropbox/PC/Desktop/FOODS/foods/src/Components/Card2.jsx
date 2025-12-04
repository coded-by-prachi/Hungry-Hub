import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { RemoveItem, Increment, Decrement} from "../redux/cartSlice.js"; // <-- Import remove action



function Card2({ id, name, image, price, type, qnt }) {
   const dispatch=useDispatch();
    return (
        <div className='w-full h-[150px] shadow-lg rounded-2xl flex justify-between p-4'>

            {/* left---------------------------------------------------------------------------- */}
            <div className='w-[65%] h-full flex gap-8'>
                <div className='w-[60%] h-full overflow-hidden rounded-xl '>
                    <img src={image} alt="" className="w-full h-full object-cover" />
                </div>

                <div className='w-[50%] h-full flex flex-col gap-5 justify-between '>
                    <div className='text-lg font-semibold'>{name} </div>

                    {/* BUTTONS----------------------------------------------------------------------------------------------- */}
                    <div className='w-[100px] h-full bg-gray-200 flex overflow-hidden shadow-md rounded-2xl'>
                        <button className='w-1/3 h-full bg-white text-xl font-bold text-black hover:bg-gray-300 transition  cursor-pointer flex justify-center items-center'onClick={()=>{qnt>1?dispatch(Decrement(id)):1}}>-</button>
                        <span className='w-1/3 h-full bg-red-600 flex justify-center items-center text-white  font-semibold  '>{qnt}</span>
                        <button className='w-1/3 h-full bg-white flex justify-center items-center text-xl font-bold text-black  cursor-pointer hover:bg-gray-300 transition' onClick={()=>{dispatch(Increment(id))}}>+</button>
                    </div>
                </div>
            </div>
            {/* Bin and price-------------------------------------------------------------------------------------------------------------------- */}
            <div className="flex flex-col   items-end justify-start gap-10">
                <span  className="text-lg font-semibold text-gray-700">Rs {price*qnt}</span>
                <RiDeleteBin6Line  className="text-red-600 text-xl cursor-pointer hover:text-red-700 transition" onClick={()=>dispatch(RemoveItem(id))} />
            </div>
        </div>

    )
}

export default Card2
