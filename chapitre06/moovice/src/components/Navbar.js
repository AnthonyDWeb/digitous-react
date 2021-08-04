import React from 'react'
import {Link} from 'react-router-dom'

import '../../node_modules/bootstrap/dist/css/bootstrap.css'


class Navbar extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Homepage</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/favorite">Favorite</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/weekly">Weekly</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/weekly-battle">Weekly Battke</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/popular">Popular</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/popular-battle">Popular Battke</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        )
    }
}

export default Navbar;