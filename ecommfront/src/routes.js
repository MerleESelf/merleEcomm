import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { AllPlants } from "./pages/AllPlants"
import Home from "./pages/Home"


class AppRoutes extends Component {
  render() {
    return (
      <div id='main'>
        <Routes>
          <Route path='/plant' element={<AllPlants />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    );
  }
}


export default AppRoutes;