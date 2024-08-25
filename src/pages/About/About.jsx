import React from 'react'
import './About.css'
import myImage from '../../assets/images/usama.jpg'

const About = () => {
  return (
   <section className='about-wrapper container-sm m-5'>
    <div className="card ">
      <div className="card-img-top p-3 ">
        <img src={myImage} alt="" />
        <h4 className='card-title'>Usama .A. sani</h4>
        <h5 className="sub-title">web developer</h5>
      </div>
      <div className="card-body">
       <p className="card-text text-muted">
        writing code is someting that is not only interesting but amazing, whenever I woke up feeling stressful 
        as soon as I start writing code and then, I feels so motivated. from then I figure out this is something that 
        I will definately continue doing in my world life.
       </p>
      </div>
    </div>

   </section>
  )
}

export default About
