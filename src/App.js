import React from 'react'
import Search from './components/Search'
import Pagination from './components/Pagination'
import Stories from './components/Stories'
import"./App.css"

export default function App() {
  return (
    <>
      <Search/>
      <Pagination/>
      <Stories/>
    </>
  )
}
