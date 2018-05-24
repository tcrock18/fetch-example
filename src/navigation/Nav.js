import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {

  render() {

    return (
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/democrats'>Democrats</Link>
        </li>
        <li>
          <Link to='/republicans'>Republicans</Link>
        </li>
        <li>
          <Link to='/independents'>Independents</Link>
        </li>
        <li>
          <Link to='/males'>Males</Link>
        </li>
        <li>
          <Link to='/females'>Females</Link>
        </li>
      </ul>
    );
  }
}

export default Nav;