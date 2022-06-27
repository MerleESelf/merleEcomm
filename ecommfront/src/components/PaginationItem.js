import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/esm/PageItem';
import React from 'react'
import classnames from "classnames";

const PaginationItem = (props) => {
  const { pageNum, handleChange, active } = props

  // const viewAllClassName = classnames({
  //   active: !curPage
  // });

  return (
    <PageItem value={pageNum} onClick={handleChange} key={pageNum} active={active === pageNum ? true : false}  >
      {pageNum}
    </PageItem>
  )
}

export default PaginationItem

// 