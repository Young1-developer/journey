import React, { useEffect, useState } from 'react'
import './Days.css'
import lessons from '../../Data'
import {Link} from 'react-router-dom'

const Days = () => {
const [days, setDays] = useState(lessons);

useEffect(()=>{setDays(days)},[days]);

  const DaysElement = days.map((day) => {
    return (
      <section className='days-wrapper col-md-6' key={day.id}>
        <Link to={`${day.id}`}>
        <div className='card'>
        <img src={day.image} alt={day.title} className='card-img'/>
        <h3 className='title'>{day.title}</h3>
        <p className='subtitle'>{day.subtitle}</p>
       </div>
        </Link>
     
      </section>
    )
  })
  return (
    <div className='container pt-5'>
    <div className="row g-2">

     {DaysElement}

    </div>
    </div>
  )
}

export default Days
