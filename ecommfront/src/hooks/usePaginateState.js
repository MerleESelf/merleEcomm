import React, { useState, useEffect } from "react";



// custom hook to handle page pagination
const usePaginateState = ({ pageNum, itemLimit }) => {
  // need state hook to set what page we're on 
  const [currentPage, setCurrentPage] = useState(pageNum);
  // need state hook to set limit for how many plants 
  const [limit, setLimit] = useState(itemLimit);

  // function that will take in current page and limit and give us back a query string that's passed to our thunk
  const formatQueryString = (limit, currentPage) => {
    return `?limit=${limit}&page=${currentPage}`
  }
  // should give us a new formated q string anytime that limit or page are changed
  useEffect(() => {
    formatQueryString(limit, currentPage)
  }, [limit, currentPage, formatQueryString])

  // will return our next page relative to our current page 
  const nextPage = () => setCurrentPage(page + 1)

  // will return the previous page relative to our current page. 
  const previousPage = () => setCurrentPage(Math.max(0, page - 1))

  return { currentPage, limit, nextPage, previousPage, formatQueryString }
}

export default usePaginateState
