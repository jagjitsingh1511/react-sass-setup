import React, { Component } from 'react';
import './Home.less';
import Landing from '../landing/landing';

class Home extends Component {
  render() {
    return (
      <div className="head">
        <div className="title">
          <span>IMDB</span> Movies LIST
        </div>
      </div>
    );
  }
}

export default Home;
