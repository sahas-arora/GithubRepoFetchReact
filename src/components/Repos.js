

import React, { Component } from 'react';

class Repos extends Component {

  render(){
    console.log("The props of Repos are:", this.props);
    return(
      <div className="container segment">

      <div className="ui relaxed huge divided list">
        <div className="item">
          <i className="large github aligned icon"></i>
        <div className="content">
          <a className="header" href={this.props.individualRepo.html_url}>
              <li> {this.props.individualRepo.name} </li>
          </a>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Repos;
