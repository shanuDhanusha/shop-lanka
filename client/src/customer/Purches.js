import React , { useState }from "react";
import Nav from "../components/Nav";
import SiderBar from "../components/SiderBar";
import CardCoustom from "../components/Card_coustom";
import ReviewPops from "./screens_customer/ReviewPops";


export default function Purchers (){
  
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [isPopoverBack, setIsPopoverBack] = useState(true);
    const [arrayData,setarrayData]=useState([
        {discription:'Electric Kettle, Rs.3150',customer:'hesha@gmail.com',productId:'00001'},
        {discription:'Gas Cooker, Rs.6000',customer:'hesha@gmail.com',productId:'00002'}
    ])

    const togglePopover = () => {
      setIsPopoverOpen(!isPopoverOpen);
      setIsPopoverBack(!isPopoverBack);
    };

    const close=()=>{
        setIsPopoverOpen(false)
        setIsPopoverBack(true)
    }


    return(
        <div className=" flex-col">
           <Nav/>
           {isPopoverBack? <div class="flex h-screen border-spacing-3 border border-white   shadow-xl">
                <SiderBar/>
                <div class="flex-grow  p-5 grid grid-cols-3 overflow-auto">

                    {
                        arrayData && arrayData.map((item,index)=>(
                            <CardCoustom buttonName={"Review"}  eventFunction={togglePopover} key={index} data={item}/> 
                        ))
                    }
                  
                </div>
            
            </div>:<div className="bg-black bg-opacity-50">  {isPopoverOpen?<ReviewPops closePop={close} buttonName="Submit"/>:<></>}</div>
            }
            
      
    </div>
    
    );
  
}