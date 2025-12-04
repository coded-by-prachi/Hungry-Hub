import React from 'react'
import pizza from '../assets/pizza.png';
import { AddItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';



function Cards({image, name, price, type, id}) {
    let dispatch=useDispatch()
    return (
        <div className='w-[280px] h-[380px] bg-white shadow-xl  p-4 mt-10 ml-5 flex flex-col gap-3 rounded-xl hover:border-2 border-red-500 cursor-pointer'>
            <div className='w-[100%] h-[60%] overflow-hidden  rounded-xl'>
                <img src={image} alt=''   className="w-full h-full object-cover" />
            </div>

            <div className='font-bold text-2xl'>{name} </div>
            <div className='w-full flex justify-between items-center'>
               
                    <div  className='text-gray-800 text-md'>Rs {price}/-</div>
            </div>
            <button className='w-full p-4 bg-gray-300  rounded-xl hover:bg-red-700 hover:text-white transition-all' onClick={()=>{dispatch(AddItem({id:id, name:name, price:price, image:image, type:type, qnt:1 }));
             toast.success("Item Added" )
            }}> Add to Cart</button>

        </div>
    );
}

export default Cards;

