import React from "react";
import { useParams } from "react-router-dom";

/**
 
 id, color = useParams(); 

 isNaN() checks if id is Not a Number
 if id is not a number name will show for {id}
 else id number will show {id}

 */

const User = () => {
    const {id, color} = useParams();
    console.log(isNaN(id)); 

    return(
        <div style={{backgroundColor: color}}>
            {
                isNaN(id)? 
                <p>User Name is {id}</p> 
                :
                <p>User ID is {id}</p>
            }   
            <p>Color is {color}</p>                        
                
        </div>
    )
}

export default User;