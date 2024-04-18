import React,{useEffect, useState} from "react";
import Nav from "../components/Nav";
import SiderBar from "../components/SiderBar";
import ViewReview from "./screens_customer/ViewReview";
import axios from "axios";

export default function Comments(){
  const[reviews,setReviews] = useState();
  useEffect(()=>{
    axios.get('http://localhost:5000/review/reviewGet').then((response)=>{
      setReviews(response.data)
    })
  },[])
   return(

   <div className=" flex-col">
      <Nav/>
      <div class="flex h-screen border-spacing-3 border border-white   shadow-xl">
        <SiderBar/>
          <div class="flex-grow p-10 grid grid-cols-2 overflow-auto">
            {reviews && reviews.map((item,index)=>(
                <ViewReview key={index} data={item}/>
            ))}
               
               {/* <ViewReview/>
               <ViewReview/> */}
          </div>
      </div>
      
  </div>

)


}