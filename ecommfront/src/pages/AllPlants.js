import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPlants, getTotalPlantCount } from "../store/plantsSlice"
import { PlantPreviewCard } from "../components/PlantPreviewCard";
import usePaginate from "../hooks/usePaginate";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Spinner from "react-bootstrap/Spinner"
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

export const AllPlants = () => {
  // setting useDispatch hook to var 
  const dispatch = useDispatch();

  const {
    currentPage,
    setCurrentPage,
    limit,
    setLimit,
    nextPage,
    previousPage,
    formatQueryString,
    calcPages
  } = usePaginate()

  // useEffect hook takes the place of component did mount 
  useEffect(() => {
    // geyt total plant count will dispatch on initila load of the page. 
    dispatch(getTotalPlantCount())
  }, [dispatch]);


  // plants on state in redux 
  const plants = useSelector((state) => {
    return state.plants
  })

  // total number of plants in DB retrieved on frist load of page
  const totalPlants = useSelector((state) => {
    return state.plants.valueCount
  })

  // on click for item limit change
  const handleClickLimit = (event) => {
    const newLimit = event.target.value
    setLimit(newLimit)
    const qStr = formatQueryString(newLimit, 1)
    dispatch(getPlants(qStr))
  }

  // loading state
  if (plants.status === "loading") {
    return (
      <div>
        <h1> PLANTS LOADING</h1>
        <Spinner className="loading" animation="grow" size="xl" />
      </div>)
  }

  // main page elements 
  return (
    <div>
      <div>
        <h4>Items Per Page:</h4>
        <ButtonGroup variant="secondary">
          <Button variant="secondary" value="10" onClick={(e) => handleClickLimit(e)}>10</Button>
          <Button variant="secondary" value="20" onClick={(e) => handleClickLimit(e)}>20</Button>
          <Button variant="secondary" value="30" onClick={(e) => handleClickLimit(e)}>30</Button>
          <Button variant="secondary" value="" onClick={(e) => handleClickLimit(e)}>All</Button>
        </ButtonGroup>
      </div>

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



