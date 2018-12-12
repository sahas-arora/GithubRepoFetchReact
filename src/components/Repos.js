

import React, { Component } from 'react';

class Repos extends Component {

  constructor(props){
    super(props);

    if(!props.individualRepo){
      return(
        <div>
          There are no public repositories for that user-name. Search for a different user.
        </div>
      );
    }

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
