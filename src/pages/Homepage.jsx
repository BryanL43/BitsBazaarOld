import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Link to="/signin">Signin</Link>
    </div>
  )
}

export default Homepage