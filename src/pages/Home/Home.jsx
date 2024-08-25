import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'



const Home = () => {
  return (
    <section className='hero-section text-center '>
    <div className="hero-text container-sm text-light w-75 ">
      When it comes to learning to code in any language, I found that am first stroggle to 
      understand the concept and how it works. So that is my weakness but I want to make it my strength
  <br />

  <Link className='btn btn-primary btn-sm' to='/about'>Explore</Link>
    </div>
    </section>
  )
}

export default Home
