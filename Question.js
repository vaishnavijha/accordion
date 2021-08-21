import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({value}) => {
    const [showinfo,setshowinfo]=useState(false);
    const {id,title,info}=value
  return (
   <>
   <h3 className="v">{id}</h3>
   <h3 className="v">{title}</h3>
   <button className="btn" onClick={()=>setshowinfo(!showinfo)}>{showinfo?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
   <h5 className="v">{info}</h5>
   </>
  )
};

export default Question;