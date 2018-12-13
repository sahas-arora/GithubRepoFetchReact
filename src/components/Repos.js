

import React, { Component } from 'react';

class Repos extends Component {

  constructor(props){
    super(props);

    this.state = { names: props.names};

  }

  componentDidUpdate() {
    console.log("The state of the repo is: ", this.state);
  }

  render(){
    return(
      <div>
      <div className="ui relaxed divided list">
        <div className="item">
          <i className="large github aligned icon"></i>
        <div className="content">
          <a className="header" href={this.props.gitURL}>
        <h2> {this.props.individualRepo.name} </h2>
       </a>
       </div>
     </div>
   </div>
 </div>
    );
  }
}

export default Repos;
