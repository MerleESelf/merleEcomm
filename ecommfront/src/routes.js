import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { AllPlants } from "./pages/AllPlants"


class AppRoutes extends Component {
  render() {
    return (
      <div id='main'>
        <Routes>
          <Route path='/plant' element={<AllPlants />} />
        </Routes>
      </div>
    );
  }
}


export default AppRoutes;