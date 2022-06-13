import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPlants, getTotalPlantCount } from "../store/plantsSlice"
import { PlantPreviewCard } from "../components/PlantPreviewCard";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Spinner from "react-bootstrap/Spinner"

export const AllPlants = () => {
  // setting useDispatch hook to var 
  const dispatch = useDispatch();

  // useEffect hook takes the place of component did mount 
  useEffect(() => {
    // geyt total plant count will dispatch on initila load of the page. 
    dispatch(getTotalPlantCount())
  }, [dispatch]);


  // using use selector to 
  const plants = useSelector((state) => {
    console.log(state.plants)
    return state.plants
  })

  const totalPlants = useSelector((state) => {
    return state.plants.valueCount
  })

  // loading state
  if (plants.status === "loading") {
    return (
      <div>
        <h1> PLANTS LOADING</h1>
        <Spinner className="loading" animation="grow" size="xl" />
      </div>)
  }

  return (
    <div>
      <h3 className="shopPlantsHeader">Shop All Plants</h3>
      <span className="plantsTotal">{totalPlants} plants</span>
      <Row className="PlantRow" xs={2}>
        {plants.value.map((plant) => (
          <Col className="PlantCol">
            <PlantPreviewCard key={plant.id} plant={plant} />
          </Col>
        ))}
      </Row>
    </div>
  )
}



