import Pagination from 'react-bootstrap/Pagination'
import React from 'react'
import PaginationItem from './PaginationItem'

const PaginationBar = (props) => {
  const { totalPages, curPage, nextPage, previousPage, changePage } = props

  let active = curPage

  // should trigger the parent call back change handler 
  const handleChange = (event) => {
    const newPage = event.target.attributes[1].value
    changePage(newPage)
    active = newPage
  }

  const pages = totalPages.map((pageNum) => {
    return (
      <PaginationItem pageNum={pageNum} handleChange={handleChange} active={active} />
    )
  })

  return (
    <div>
      <Pagination size='lg'>{pages}</Pagination>
    </div>
  )
}

export default PaginationBar
