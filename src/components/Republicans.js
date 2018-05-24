import React, { Component } from 'react';

import Senators from '../senate/Senators'

class Republicans extends Component {

  render() {

    return (
      <div>
        <Senators match="republicans"/>
      </div>
    );
  }
}

export default Republicans;