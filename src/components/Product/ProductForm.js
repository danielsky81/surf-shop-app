import React, { useRef, useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

const ProductForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 99) {
      setAmountIsValid(false)
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  }

  return (
    <form onSubmit={submitHandler}>
      <Input 
        ref={amountInputRef}
        label='Quantity'
        input={{
        id: 'quantity_' + props.id,
        type: 'number',
        min: '1',
        max: '99',
        step: '1',
        defaultValue: '1'
      }}/>
      <Button name='Add'/>
      {!amountIsValid && <p>Entry not valid</p>}
    </form>
  )
}

export default ProductForm;