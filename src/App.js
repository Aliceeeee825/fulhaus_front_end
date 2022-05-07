import React, {useEffect, useState} from 'react'
import './App.scss'
import Nav from './components/Nav'
import Header from './components/Header'
import Canvas from './components/Canvas'
import Cart from './components/Cart'
import axios from 'axios'


function App() {

  const [funitures, setFurnitures] = useState([])
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6'
    }).then(response => {
      // console.log(response)
      setFurnitures(response.data.data.products)
    })
  }, [])

  const getSelected = (i) => {
    // let currCart = cart
    // currCart.push(funitures[i])
    // console.log(currCart)
    setCart([...cart, funitures[i]])
  }

  return (
    <div className="app">
      <Nav setCartOpen={setCartOpen} cartOpen={cartOpen}/>
      <Header />
      {
        funitures.length == 0 ? <p>loading</p> : <Canvas items={funitures} getSelected={getSelected} total={total} setTotal={setTotal}/>
      }
      
      <Cart contents={cart} total={total} setTotal={setTotal} cartOpen={cartOpen} setCart={setCart} />
    </div>
  );
}

export default App;
