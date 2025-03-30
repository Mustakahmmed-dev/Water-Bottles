import './Bottle.css';

export default function Bottle({ bottle, handleAddToCartBtn }) {
    // console.log(bottle)



    return (

        <div className="bottle-card">
            <img className='bottle-img' src={bottle.img} alt="Water bottle" />
            <div>
                <p>Name: {bottle.name} </p>
                <p>Price: {bottle.price}$ </p>
                <p>Stock: {bottle.stock} </p>
            </div>
            <button onClick={() => handleAddToCartBtn(bottle)}>Add To Cart</button>
        </div>
    )
}