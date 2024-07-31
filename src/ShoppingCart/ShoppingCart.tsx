import React, { useReducer, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import cartReducer, { getInitialState, removeItem, shoppingCartTotal } from './CartSlice'
import { addItem } from './CartSlice'
import { Item } from './CartSlice'



const ShoppingCart = () => {
    const [itemName, setItemName] = useState<string>("");
    const [itemId, setItemId] = useState<number>(0);
    const [itemPrice, setItemPrice] = useState<number>(0);
    const [state, dispatch] = useReducer(cartReducer, getInitialState())
    
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>): void =>{
        event.preventDefault();
        const newItem: Item ={
            id:itemId,
            name:itemName,
            price:itemPrice

        }
        dispatch(addItem(newItem))
        dispatch(shoppingCartTotal())
    }

    const handleRemove =(id:number) => {
        dispatch(removeItem(id))
        dispatch(shoppingCartTotal())
    }

  return (
    <>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formItemName">
      <Form.Label>Item Name:</Form.Label>
      <Form.Control type="text" placeholder="Enter Item Name" onChange={(event) =>setItemName(event.target.value )} value={itemName}/>
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formItemId">
      <Form.Label>Item ID:</Form.Label>
      <Form.Control type="number" placeholder="Enter ID" onChange={(event) =>setItemId(parseFloat(event.target.value))} value={itemId}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formItemPrice">
      <Form.Label>Item Price:</Form.Label>
      <Form.Control type="number" placeholder="Enter Price"  onChange={(event) =>setItemPrice(parseFloat(event.target.value))} value={itemPrice} />
    </Form.Group>
    <Button variant="primary" type="submit">
      Add Item
    </Button>
  </Form>
  
  <ul>
                {state.cart.map(item => (
                    <li key={item.id}>
                        {item.name}: ${item.price}
                        <button onClick={() => handleRemove(item.id)}>Remove Item</button>
                    </li>
                ))}
            </ul>
            <h2>Total: ${state.total}</h2>

  </>
  )
}

export default ShoppingCart