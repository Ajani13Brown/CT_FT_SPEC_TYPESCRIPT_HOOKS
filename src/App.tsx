import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Components/Counter';
import ShoppingCart from './ShoppingCart/ShoppingCart';

const App = () => {
  return (
    <div>
      <Counter/>
      <ShoppingCart />
    </div>
  )
}

export default App