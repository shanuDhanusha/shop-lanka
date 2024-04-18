import React from "react";
import avatar from '../../assets/avatar.jpg';
export default function ViewReview(props){
    console.log(props)
//box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
 return(
    <div style={{height:'200px',width:'400px',boxShadow: "1px 3px 1px #9E9E9E",borderRadius:'10px',outline:'2px solid black'}}>
    <div style={{height:'50px',display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',padding:'3px'}}>
        <div style={{height:'45px',width:'45px',borderRadius:'45px'}}>
            <img src={avatar}></img>
        </div>
        <div style={{height:'45px',width:'280px',color:'black',display:'flex',alignItems:'center'}}>{props.data.reviewUser}</div>
        <div style={{height:'45px',width:'45px'}}></div>
    </div>
    <div style={{height:'2px',width:'100%',paddingLeft:'5%',paddingRight:'5%'}}>
        <div style={{width:'98%',height:'1px',backgroundColor:'black'}}></div>
        </div>
    <div style={{width:'100%',height:'100px',overflowY:'auto',wordWrap:'break-word',padding:'16px'}}>{props.data.review}</div>
    <div style={{height:'48px',width:'100%',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Edit
        </button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          More
        </button>
    </div>
 </div>
 )
    
}