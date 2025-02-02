import React from 'react'
//import './Search.css'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function Search() {
  const {searchQuery} = useParams()
  const vids =useSelector(state=>state.videoReducer)
  ?.data?.filter((q)=>q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase()))
  .reverse();

  return (
    <div className='container_Pages_App'>
        <LeftSidebar/>
        <div className="container2_Pages_App">
         <h2 style={{color : "white"}} searchQuery={searchQuery}>Search Results for {searchQuery}..</h2>
            <ShowVideoGrid vids={vids}/>

        </div>
     
    </div>
  )
}

export default Search
