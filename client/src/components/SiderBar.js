import React from "react";

import { RiLogoutCircleLine } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";
import { BsBoxArrowUpLeft } from "react-icons/bs";



export default function SiderBar(){



 return(
    <div class="flex h-screen border-spacing-3 border border-white  shadow-xl">
   
    <div class="bg-gray-800 text-white w-64">
      <div class="p-4">
        <div className=" flex">
         
           <i><FaUserGraduate size={30} className=" ml-6"/></i>
           <h1 class="text-xl font-bold mb-4 ml-4">Heshani </h1>
        </div>
     
        <hr></hr>
   
        <ul>
            <li className="mb-2   ml-0 hover:scale-50  duration-500">
              <a href="#" class="block px-4 py-2 rounded hover:bg-gray-700 mt-6 font-extrabold  flex"> <MdOutlineDashboardCustomize size={35} className=" mr-4"/>  Dashboard</a>
            </li>
            <li className="mb-2  ml-0 hover:scale-50  duration-500">
              <a href="#" class="block px-4 py-2 rounded hover:bg-gray-700  mt-6 font-extrabold flex" ><MdOutlineRateReview  size={35} className=" mr-4"/>Review</a>
            </li>
            <li className="mb-2 hover:scale-50  duration-500">
              <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700 mt-6 font-extrabold flex"><RiShoppingCartLine  size={35} className=" mr-4"/>Add to Cart</a>
            </li>

            <li className=" mt-40  ml-0 hover:scale-50  duration-500 ">
              <a href="#" className=" flex font-extrabold block px-4 py-2 rounded  hover:bg-gray-700 "><BsBoxArrowUpLeft size={25} className=" mr-5 ml-4"/>log out</a>
            </li>
           
          
        </ul>
      </div>
    </div>
  
  
    <div class="flex-grow">

    </div>
  </div>
  

 );


}