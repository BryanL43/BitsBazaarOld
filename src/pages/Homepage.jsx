import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
      Homepage
      <Link to="/signin">Signin</Link>
    </div>
  )
}

export default Homepage