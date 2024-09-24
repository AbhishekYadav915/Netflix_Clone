import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'



const TitleCards = ({title,category}) => {

  const [apiData,setApiData] = useState([])
  const cardsRef = useRef();

const options = {
  method:'GET',
  headers:{
    accept:'application/json',
    // Authorization:'Bearer eyjhbGciOiJIUzI1NiJ9.eyJhdWQiOiJ1ZTN1NzczZDIwY2M2Y2NhNWQ4YWVjMjQzNTd1NDc1ZCIsInN1YiI6IjY2MjIyMDFhYWUzODQzMDE4NzJhNTJjMiIsInNjb381cyI6WyJhcG1'
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9. eyJhdWQiOiJ1ZTN1NzczZDIWY2M2Y2NhNWQ4YWVjMjQzNTdlNDc1ZCIsInN1YiI6IjY2MjIyMDFhYWUzODQzMDE4NzJhNTJjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ. vPDW2QwNr9hIRdOvJx_x8hbHnDYZGHMtnZwfkqb3J8U'

  }
};
 
  
  

const handleWheel = (event)=>{
  event.preventDefault(); //this will help in not scrolling the cards vertically by mouse scrollbar
  cardsRef.current.scrollLeft += event.deltaY; //this allow us to scroll the cards in horizontal direction by mouse scrollbar.
}
useEffect(()=>{
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(response => response. json())
  .then(response => console. log(response))
  .catch(err => console.error(err));


  cardsRef.current.addEventListener('wheel',handleWheel);
},[])
  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"} </h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card,index)=>{
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards