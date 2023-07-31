import React from 'react'
import { useGlobalContext } from '../context/context'

export default function Pagination() {
  const {page, nbPages, getPreviousPage, getNextPage} = useGlobalContext();
  return (
    <>
      <div className='pagination-btn'>
        <button onClick={() => getPreviousPage(page)}>PREV</button>
        <p>
          {page + 1} of {nbPages}
        </p>
        <button onClick={() => getNextPage(page)}>NEXT</button>
      </div>
    </>
  )
}