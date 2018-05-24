import React, { Component } from 'react';

import Senators from '../senate/Senators'

class Females extends Component {

  render() {

    return (
      <div>
        <Senators match="females"/>
      </div>
    );
  }
}

export default Females;