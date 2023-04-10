import { sculptureList } from "./Data";
import React from "react";
import { useState } from "react";

const NestNPrevPage = () =>{
    const[index,setIndex] = useState(0) 
    const[showMore,setShowMore] = useState(false)

    function HandelPrevClick(){
        setIndex(index -1);
    }
    function HandelNextClick(){
        setIndex(index+1);
    }

    const sculpture = sculptureList[index];
    return (
        <div>
            <button onClick={HandelPrevClick}>Prev Page</button>
            <button onClick={HandelNextClick}>Nest Page</button>
            <h2>{index +1} of {sculptureList.length} page</h2>
            <button onClick={()=>{setShowMore(!showMore)}}>{showMore ?"Hide": "Show"} Page</button>
            <h2>{showMore && sculpture.description}</h2>
            <img src={sculpture.url} alt={sculpture.alt} />


        </div>
    )
}
export default  NestNPrevPage