import React from 'react'
import { useGlobalContext } from '../context/context'

export default function Search() {
  const { query, searchPost} = useGlobalContext();
  return (
    <>
      <h1>Welcome to Jagtap's Newsletter</h1>
      <div>
        <form onSubmit={e => e.preventDefault()}>
            <input
              type='text'
              placeholder='Search Here'
              value={query}
              onChange={e => searchPost(e.target.value)}
            >
            </input>
        </form>
      </div>
    </>
  )
}