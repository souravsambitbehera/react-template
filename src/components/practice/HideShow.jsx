import { sculptureList } from "./Data";
import React, { useState } from "react";

 const HideShow =() => {
    const[data,setData] = useState("sourav")
    const[showMore,setShowMore] = useState(false)
    return(
        <div>
            <button onClick={()=>{setShowMore(!showMore)}}>{showMore ? "hide": "show"} Details</button>
           <h2>{showMore && <p>data</p>}</h2>
        </div>
    )
}
export default HideShow