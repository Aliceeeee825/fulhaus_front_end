import React from 'react'

function Header() {
    return (
        <div className="header">
            <div className="heroWrapper">
                <img src="heroImg.png" alt="" />
            </div>

            <div className="text">
                <h1>Patio Furniture</h1>
                <button>SHOP</button>
            </div>
        </div>
    );
}

export default Header;