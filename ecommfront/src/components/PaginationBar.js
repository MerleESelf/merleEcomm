import Pagination from 'react-bootstrap/Pagination'
import React from 'react'



const PaginationBar = (props) => {
  // destructure props 
  const { totalPages, curPage, nextPage, previousPage, changePage } = props

  // var to denote which page is active 
  let active = curPage
  // arr to hold num of pages needed 
  const pages = [];

  // should trigger the parent call back change handler 
  const handleChange = (event, data) => {

    console.log("444444", data)
    console.log(event.target.attributes[1].value, ' event.target in PB')
    const newPage = event.target.attributes[1].value
    changePage(newPage)
    active = Number(newPage)

  }

  // ****** try map tomorrow 
  // push pag. item into arr to be given to parent pagination element 
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <Pagination.Item value={i} onClick={handleChange} key={i} active={i === active}>
        {i}
      </Pagination.Item>,
    )
  }

  return (
    <div>
      <Pagination size='lg'>{pages}</Pagination>
    </div>
  )
}

export default PaginationBar