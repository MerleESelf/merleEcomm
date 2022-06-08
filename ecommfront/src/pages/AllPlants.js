import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPlants } from "../store/plantsSlice"
import { PlantPreviewCard } from "../components/PlantPreviewCard";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Spinner from "react-bootstrap/Spinner"

export const AllPlants = () => {
  // setting useDispatch hook to var 
  const dispatch = useDispatch();

  // useEffect hook takes the place of component did mount 
  useEffect(() => {
    dispatch(getAllPlants())
  }, [dispatch]);

  // using use selector to 
  const plants = useSelector((state) => {
    return state.plants
  })

  // loading state
  if (plants.status === "loading") {
    return (<Spinner animation="grow" size="xl" />)
  }

  return (
    <Row className="PlantRow" xs={2}>
      {plants.value.map((plant) => (
        <Col>
          <PlantPreviewCard className="PlantPrevCard" key={plant.id} plant={plant} />
        </Col>
      ))}
    </Row>
  )
}



