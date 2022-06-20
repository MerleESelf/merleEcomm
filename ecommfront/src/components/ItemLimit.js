import React from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'


export const ItemLimit = () => {

  // const handleLimitChange = () => {

  // }

  return (
    <div>
      <h4>Items Per Page:</h4>
      <ButtonGroup variant="secondary">
        <Button variant="secondary">10</Button>
        <Button variant="secondary">20</Button>
        <Button variant="secondary">30</Button>
      </ButtonGroup>
    </div>
  )
}