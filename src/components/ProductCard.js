import React from'react';

function ProductCard(props){
    const item = props.item

    return (
        <div className="item">
            <div className="itemImg">
                <img src={item.imageURLS[0]} alt={item.fulhausDescription} />
            </div>

            <div className="itemInfo">
                <div className="name">
                    <h5>{item.fulhausProductName}</h5>
                    <p>{item.vendor.name}</p>
                </div>

                <div className="price">
                    <button>Add to Cart</button>
                    <span className="price">${item.retailPrice}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard