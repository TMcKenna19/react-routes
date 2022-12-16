import React from 'react';
import { useParams } from 'react-router-dom';
//import useParams

/* 
const {city} = useParams(); "matches /:city (<-- path variable)" 
<Route path="/cities/:city" element={<Cities />}/> 
                ^   cities components   ^
 */

const Cities = props =>{
    const {city} = useParams();
    return (
        <div>
         <h2>Cities Componnent for {city}</h2>  
        </div>
    );
    
}

export default Cities;
