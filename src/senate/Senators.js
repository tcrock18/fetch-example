import React, { Component } from 'react';

import Senator from './Senator'

class Senators extends Component {
    state = {
      senate: [],
      url: "https://senators-now-vaoqcyefxg.now.sh/" + this.props.match
    };

  async componentWillMount () {
    const response = await fetch(this.state.url, {method: 'GET'});
    const responseJSON = await response.json();
    const senators = responseJSON.map(senator => <Senator senator={senator}/>);
    this.setState({senate: senators})
  }

  render() {

    return (
      <div>
        {this.state.senate}
      </div>
    );
  }
}

export default Senators;