import { use, useState } from "react";
import Bottle from "../bottle/Bottle";
import './Bottles.css';

export default function Bottles({bottlePromise}){
    const bottles = use(bottlePromise);
    
    const [bottle, setBottle] = useState([]);

    const handleAddToCartBtn = (receivedBottle) =>{
        const newBottles = [...bottle, receivedBottle];
        setBottle(newBottles);
      
    }

    return (
       <div>
        <div>
            <h3>Added: {bottle.length} </h3>
            <div>
               <ol>
               {bottle.map(b => <li key={b.id}>{b.name}, Price: ${b.price}</li>)}
               </ol>
            </div>
        </div>
         <div className="bottle-cards-container">
            {
                bottles.map(bottle => <Bottle key={bottle.id} handleAddToCartBtn={handleAddToCartBtn} bottle={bottle}></Bottle>)
            }
        </div>
       </div>
    )
}