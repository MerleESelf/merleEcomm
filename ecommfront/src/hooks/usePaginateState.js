import React, { useState } from "react";

// custom hook to handle page pagination
const usePaginateState = () => {
  // need state hook to set what page we're on 
  const [currentPage, setCurrentPage] = useState(1);

  // need state hook to set limit for how many plants 
  const [limit, setLimit] = useState(10);

  // hook to parpare and set current query string or some sort of function
}

export default usePaginateState
