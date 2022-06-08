import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getAllPlants} from "../store/plantsSlice"

export const AllPlants = () => {
    // setting useDispatch hook to var 
    const dispatch = useDispatch(); 

    // useEffect hook takes the place of component did mount 
    useEffect(()=> {
       dispatch(getAllPlants())
    }, [dispatch]); 
    
    // using use selector to 
    const plants = useSelector((state) => {
        return state.plants
    })

    console.log('plants in allplants page', plants)


    
    

    return (
         <div> 
         </div>
    ) 
}



