import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPlants, getTotalPlantCount } from "../store/plantsSlice"
import { PlantPreviewCard } from "../components/PlantPreviewCard";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Spinner from "react-bootstrap/Spinner"

export const AllPlants = () => {
  // setting useDispatch hook to var 
  const dispatch = useDispatch();

  // // custom hook to handle page pagination
  // const usePaginateState = () => {
  //   // need state hook to set what page we're on 
  //   const [currentPage, setCurrentPage] = useState(1);

  //   // need state hook to set limit for how many plants 
  //   const [limit, setLimit] = useState(10); 

  //   const  
  // }

  // // useEffect hook takes the place of component did mount 
  useEffect(() => {
    dispatch(getTotalPlantCount())
    dispatch(getAllPlants())
  }, [dispatch]);


  // using use selector to 
  const plants = useSelector((state) => {
    console.log(state.plants)
    return state.plants
  })

  const totalPlants = useSelector((state) => {
    return state.plants.valueCount.count
  })

  console.log('Total plantsssssss', totalPlants)


  // loading state
  if (plants.status === "loading") {
    return (<Spinner className="loading" animation="grow" size="xl" />)
  }

  return (
    <div>
      <h3 className="shopPlantsHeader">Shop All Plants</h3>
      <span className="plantsTotal">X plants</span>
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



