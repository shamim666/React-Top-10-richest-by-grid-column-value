import React, { useEffect, useState } from 'react';
import Casino from '../Casino/Casino';
import Richman from '../Richman/Richman';
import './RichContainer.css'

const RichContainer = () => {

const [richman , setRichman]  =  useState([]);

const [casino , setCasino] = useState([]);

useEffect( ()=>{
    fetch('./data.json')
    .then(res => res.json())
    .then(data => setRichman(data))
}, [])




const handleRichman = (man) =>{
if ( !casino.includes(man) ){
const newMan = [...casino , man]
setCasino(newMan) ; 
}
else{
    return ; 
}
}


    return (
        
        <div className="row">
        <div className="col-md-9">
            <div className="row g-4">
              
                {richman.map(rich => <Richman rich={rich} key={rich.id} handleRichman = {handleRichman}></Richman>)}
                
            </div>
        </div>
        <div className="col-md-3" >
            
            <Casino casino = {casino}></Casino>
            
        </div>

    </div>
    
    );
};

export default RichContainer;