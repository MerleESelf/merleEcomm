import Pagination from 'react-bootstrap/Pagination'
import React from 'react'
import PageItem from 'react-bootstrap/esm/PageItem'

const PaginationItem = (props) => {
  const { pageNum, handleChange, curPage } = props

  let active = curPage

  console.log('cur active page in page item', active)
  return (
    <Pagination.Item value={pageNum} onClick={handleChange} key={pageNum} active={active === pageNum ? true : false}  >
      {pageNum}
    </Pagination.Item>
  )
}

export default PaginationItem