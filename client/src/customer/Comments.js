import React from "react";
import Nav from "../components/Nav";
import SiderBar from "../components/SiderBar";
import CardCoustom from "../components/Card_coustom";

export default function Comments(){

   return(

   <div className=" flex-col">
      <Nav/>
      <div class="flex h-screen border-spacing-3 border border-white   shadow-xl">
        <SiderBar/>
          <div class="flex-grow  p-5 grid grid-cols-3 overflow-auto">
             
          </div>
      </div>
      
  </div>

)


}