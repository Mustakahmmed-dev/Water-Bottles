import { use } from "react";
import Bottle from "../bottle/Bottle";
import './Bottles.css';

export default function Bottles({bottlePromise}){
    const bottles = use(bottlePromise);
    // console.log(bottles);

    return (
       <div>
        <div>
            <h3>Added:</h3> 
        </div>
         <div className="bottle-cards-container">
            {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
            }
        </div>
       </div>
    )
}