import React, { useState} from 'react';
import { FaTimes } from 'react-icons/fa'
import "../components/Home.css";
import {datas} from "../Data";

export default function Home() {
  const [people, setPeople] = useState(datas);
  const [clear, setClear] = useState(false);

  const onToggle = () => {
    setClear(!clear);
  }

  const handleClick = (id) => {
    let newPeople = people.filter((person)=> person.id !== id)
    setPeople(newPeople);
  }

  const restoreData = () => {
    if (people === datas) {
      setPeople([]);
    } else {
      setPeople(datas);
    }
  }
  
  return (
    <div className='HomeApp' id='home'>
     {people.map((data) => {
       const {id, title, author} = data;
       return (
         <div key={id} className='HomeBackGround'>
          <article className='Home'>
            <span className='HomeDetail'>
              <h2>{author}</h2>
              <p>{title}</p>
            </span>
            <button className='delete' onClick={() => handleClick(id)}><FaTimes style={{width: '.4rem'}} /></button>
          </article>
         </div> 
       )
     })}
     <div className='HomeResizeImg'>
       <img src="./img/room2.jpg" alt='room' />
       <button className="btn" onClick={() => { restoreData(); onToggle();} }>{clear ? 'Clear' : 'Add'}</button>
      </div>
    </div>
  )
}
