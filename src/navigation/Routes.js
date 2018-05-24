import React, { Component } from 'react'

import { Route } from 'react-router-dom'

import Home from '../components/Home'
import Democrats from '../components/Democrats'
import Republicans from '../components/Republicans'
import Independents from '../components/Independents'
import Males from '../components/Males'
import Females from '../components/Females'

class Routes extends Component {

  render() {

    return (
      <div>

        <Route exact path='/' component={Home} />
        <Route path='/democrats' component={Democrats} />
        <Route path='/republicans' component={Republicans} />
        <Route path='/independents' component={Independents} />
        <Route path='/males' component={Males} />
        <Route path='/females' component={Females} />

      </div>
    );
  }
}

export default Routes;