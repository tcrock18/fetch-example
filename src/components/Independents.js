import React, { Component } from 'react';

import Senators from '../senate/Senators'

class Independents extends Component {

  render() {

    return (
      <div>
        <Senators match="independents"/>
      </div>
    );
  }
}

export default Independents;