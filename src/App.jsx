import { useState } from 'react'
import './App.css'
import SearchBar from './components/searchbar.jsx'
import MovieCard from './components/moviecard.jsx'
function App() {
  return (
    <>
    <div className="searchbar">
      <SearchBar />
    </div>

<div className='movie-container'>
    <div className="movie-card">
      <MovieCard title="Inception" poster="../src/assets/inception.jpg"/>
    </div>

    <div className="movie-card">
      <MovieCard title="Interstellar" poster="../src/assets/interstellar.jpg"/>
    </div>
</div>
    </>
  )
}

export default App

