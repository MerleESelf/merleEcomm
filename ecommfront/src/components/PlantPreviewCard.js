import React from "react";
import Card from "react-bootstrap/Card"

export const PlantPreviewCard = (props) => {
  const { plant } = props
  return (
    <Card style={{ width: 250 }}>
      <Card.Img variant="top" src={plant.image} style={{ height: 100, width: 100 }} />
      <Card.Body>
        <Card.Title>{plant.plantName} </Card.Title>
        <Card.Text>{plant.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}