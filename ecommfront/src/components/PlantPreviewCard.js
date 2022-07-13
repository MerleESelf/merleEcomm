import React, { useState } from "react";
import Card from "react-bootstrap/Card"
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

export const PlantPreviewCard = (props) => {
  const { plant } = props

  const [isShown, setIsShown] = useState(false)

  // on click for quick shop button 
  const handleClick = () => {
    // on click present modal with all plant information and add to cart button
  }

  return (
    <Card style={{ width: 250 }} className="PlantPrevCard" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
      <Card.Img className="PlantPrevImg" variant="top" src={plant.image} style={{ height: 100, width: 100 }} />
      <Card.Body className="PlantPrevBody">
        <Card.Title className="PlantPrevBodyTitle">{plant.plantName} </Card.Title>
        {isShown && (
          <Button variant="secondary">Quick Shop</Button>
        )}
        <Accordion className="PlantPrevAccordian">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="PlantPrevAccordianHeader">Description</Accordion.Header>
            <Accordion.Body className="PlantPrevAccordianBody">{plant.description}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Card.Text className="PlantPrevBodyText">{plant.price}</Card.Text>
      </Card.Body>
    </Card >
  )
}