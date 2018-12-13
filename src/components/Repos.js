

import React, { Component } from 'react';

class Repos extends Component {

  constructor(props){
    super(props);

    console.log("The props of Repos are:", props.names);

    this.state = { names: props.names};


  }

  render(){
    return(
      <div>
      <div className="ui relaxed divided list">
        <div className="item">
          <i className="large github aligned icon"></i>
        <div className="content">
          <a className="header" href={this.props.gitURL}>
        <h2> {this.props.names} </h2>
       </a>
       </div>
     </div>
   </div>
 </div>
    );
  }
}

export default Repos;
