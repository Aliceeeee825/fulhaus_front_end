import React from 'react';

function Nav(props){
    const setCartOpen = props.setCartOpen
    const cartOpen = props.cartOpen

    return(
        <nav>
            <p>Fülhaus Shop</p>

            <button onClick={() => {
                setCartOpen(!cartOpen)
            }}>cart</button>
        </nav>
    )
}

export default Nav