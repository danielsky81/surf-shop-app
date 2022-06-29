import React from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

const ProductForm = (props) => {
  return (
    <form>
      <Input label='Quantity' input={{
        id: 'quantity_' + props.id,
        type: 'number',
        min: '1',
        max: '99',
        step: '1',
        defaultvalue: '1',
        placeholder: '1'
      }}/>
      <Button name='Add'/>
    </form>
  )
}

export default ProductForm;