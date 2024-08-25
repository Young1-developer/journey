import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import lessons from '../../Data';

const DaysDetails = () => {
    const params = useParams();
    const [subject, setSubject] = useState(lessons);
    const singLesubject = subject[params.id -1]

   
 useEffect(()=>{
   setSubject((lessons))
 },[params.id])

  return (
    <div className='container pt-5'>
        <Link  relative='path' to=".." className='btn btn-outline-secondary btn-sm mb-3'>back</Link>
    <div className="card text-start">
        <img className="card-img-top" src={singLesubject.image} alt="object-image" />
        <div className="card-body">
            <h3 className='text-muted'>Day {singLesubject.id}</h3>
            <h4 className="card-title">{singLesubject.title}</h4>
            <h5 className="card-subtitle">{singLesubject.subtitle}</h5>
            <p className="card-text">{singLesubject.description}</p>
        </div>
    </div>
    
    </div>
  )
}

export default DaysDetails
