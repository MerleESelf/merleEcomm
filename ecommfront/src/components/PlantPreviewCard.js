import React from "react";
import Card from "react-bootstrap/Card"
import Accordion from 'react-bootstrap/Accordion'

export const PlantPreviewCard = (props) => {
  const { plant } = props
  return (
    <Card style={{ width: 250 }}>
      <Card.Img className="PlantPrevImg" variant="top" src={plant.image} style={{ height: 100, width: 100 }} />
      <Card.Body className="PlantPrevBody">
        <Card.Title className="PlantPrevBodyTitle">{plant.plantName} </Card.Title>
        <Accordion className="PlantPrevAccordian">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="PlantPrevAccordianHeader">Description</Accordion.Header>
            <Accordion.Body className="PlantPrevAccordianBody">{plant.description}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Card.Text className="PlantPrevBodyText">{plant.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}