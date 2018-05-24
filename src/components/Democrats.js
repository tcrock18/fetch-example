import React, { Component } from 'react';

import Senators from '../senate/Senators'

class Democrats extends Component {

  render() {

    return (
      <div>
        <Senators match="democrats"/>
      </div>
    );
  }
}

export default Democrats;