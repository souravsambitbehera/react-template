import { useState } from "react"

const PracticeComponent = ()=>{
    const arrs = [
        {name:"A",price:200},
        {name:"B",price:300},
        {name:"C",price:400},

    ]
    const[value,setValue] = useState(arrs);
    return(
        <div>
           {
            value.map(item=>{
                return( <>
                <li>{item.name}</li> <button onClick={()=>{alert("hello")}}>button</button>

                <input type="radio" name="name" /> {item.name}
                
                </>
                )
            })
           }
        
        </div>
    )

}
export default PracticeComponent