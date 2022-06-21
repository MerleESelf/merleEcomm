import { useState, useEffect, useCallback } from "react";

// custom hook to handle page pagination
const usePaginate = (pageNum, itemLimit, totalProducts) => {
  // need state hook to set what page we're on 
  const [currentPage, setCurrentPage] = useState(pageNum);
  // need state hook to set limit for how many plants 
  const [limit, setLimit] = useState(itemLimit);

  // total number of pages needed for x num of products 
  const calcPages = (itemLimit, totalProducts) => {
    return totalProducts / itemLimit
  }
  // function that will take in current page and limit and give us back a query string that's passed to our thunk
  const formatQueryString = useCallback((limit, currentPage) => {
    return `?limit=${limit}&page=${currentPage}`
  }, [])
  // should give us a new formated q string anytime that limit or page are changed
  useEffect(() => {
    formatQueryString(limit, currentPage)
  }, [limit, currentPage, formatQueryString])

  // will return our next page relative to our current page 
  const nextPage = (currentPage) => setCurrentPage(currentPage + 1)
  // will return the previous page relative to our current page. 
  const previousPage = (currentPage) => setCurrentPage(Math.max(0, currentPage - 1))

  return { currentPage, setCurrentPage, limit, setLimit, nextPage, previousPage, formatQueryString, calcPages }
}


export default usePaginate
