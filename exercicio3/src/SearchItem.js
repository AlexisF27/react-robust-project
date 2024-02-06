import React from 'react'

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className='searchForm' onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        id='search'
        type='text'
        role='searchbox'
        placeholder='Search Items'
        value={search}
        onChange={(event) => setSearch(event.target.value)}></input>
    </form>
  )
}

export default SearchItem