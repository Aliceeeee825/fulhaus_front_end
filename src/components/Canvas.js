import React from 'react';

function Canvas(props){
    const products = props.items
    const getSelected = props.getSelected
    const total= props.total
    const setTotal = props.setTotal

    const handleClick = (i, price) => {
        getSelected(i)
        setTotal(() => total + price)
    }

    return (
        <div className="canvas">
            {
                products.map((item, i) => {
                    return <div className='item' key={i}>
                        <div className='imgWrapper'>
                            <img src={item.imageURLs[0]} alt={item.fulhausDescription} />
                        </div>

                        <div className='productInfo'>
                            <div className="name">
                                <h4>{item.fulhausProductName}</h4>
                                <p>{item.vendor.name}</p>
                            </div>

                            <div className='cta'>
                                <button onClick={()=>handleClick(i, item.retailPrice)}>+ Add to Cart</button>
                                <span>${item.retailPrice}</span>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
        
    )
}

export default Canvas