import React, { Component } from 'react';

import Senators from '../senate/Senators'

class Males extends Component {

  render() {

    return (
      <div>
        <Senators match="males"/>
      </div>
    );
  }
}

export default Males;