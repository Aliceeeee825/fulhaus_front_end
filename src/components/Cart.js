import React, {useState} from 'react';

function Cart(props){
    const contents = props.contents
    const total = props.total
    const setTotal = props.setTotal
    const cartOpen = props.cartOpen
    const setCart = props.setCart

    const handleDelete = (i, price) => {
        console.log(i)
        let currContents = contents
        const result = currContents.slice(0, i).concat(currContents.slice(i+1))
        setCart(result)
        setTotal(total-price)
    }

    let cartItems;
    if (contents.length != 0){
        cartItems = contents.map((item, i) => {
            return <div className="cartCard" key={i}>
                <div className="imgWrapper">
                    <img src={item.imageURLs[0]} alt={item.fulhausDescription} />
                </div>

                <div className="text">
                    <div className="name">
                        <h4>{item.fulhausProductName}</h4>
                        <p>{item.vendor.name}</p>
                    </div>
                    <div className="price">
                        <span>${item.retailPrice}</span>
                    </div>
                </div>

                <div className="delete">
                    <button onClick={() => {handleDelete(i, item.retailPrice)}}>
                        <span>x</span>
                    </button>
                </div>
            </div>
        })
    }else{
        cartItems = <p className='emptyCart'>There is nothing in your cart now! Come and take a look at our AWESOME products!</p>
    }

    return(
        <div className={cartOpen ? "cart" : "cart invisible"}>
            <div className="items">
                {cartItems}
            </div>

            <div className="total">
                <div>
                    <span>Total:</span>
                    <span>${total}</span>
                </div>

                <button>Checkout</button>
            </div>
        </div>
    )
}

export default Cart