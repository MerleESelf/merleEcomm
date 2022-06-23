import Pagination from 'react-bootstrap/Pagination'
import React from 'react'

const PaginationBar = (props) => {
  const { totalPages, curPage, nextPage, previousPage, changePage } = props

  // should trigger the parent call back change handler 
  const handleChange = (event) => {
    const newPage = event.target.attributes[1].value
    changePage(newPage)
  }
  let active = curPage
  const isPageActive = (pageNum) => {
    return active === pageNum ? true : false
  }

  const pages = totalPages.map((pageNum) => {
    return (
      <Pagination.Item value={pageNum} onClick={handleChange} key={pageNum}  >
        {pageNum}
      </Pagination.Item>)
  })

  return (
    <div>
      <Pagination size='lg'>{pages}</Pagination>
    </div>
  )
}

export default PaginationBar