import React, { useState } from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'

const Counter = () => {
    const [count,setCount] = useState<number>(0)

    const addCount= () =>{
        setCount(count+1)
    }

    const subtract = () =>{
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const reset = () => {
        setCount(0)
    }

  return (
    <Container>
        <h1>Counter</h1>
        <p>Count:{count}</p>
        <ButtonGroup aria-label="Basic example">
      <Button variant="success" onClick={addCount} >Add Count</Button>
      <Button variant="danger" onClick={subtract}>Subtract Count</Button>
      <Button variant="warning" onClick={reset}>Reset Count</Button>
        </ButtonGroup>
    </Container>
  )
}

export default Counter