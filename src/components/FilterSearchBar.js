

import React, { Component } from 'react';
import RepoList from './RepoList';

// let filteredLisrt =

class FilterSearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {inputValue: []};

  }

  // componentDidMount() {
  //     this.setState({names: this.props.names});
  //   }
  // let filteredList = (event) => {
  //   if(event.target.value === RepoList.state.names)
  // }




  render() {
  return(
    <div className="field">
      <br />
      <br />
      <div className="ui big icon input">
        <input
          type="text"
          placeholder="Apply any filters"
          onChange={(event) => {
              this.props.filtering(event.target.value);  
          }
          }
          >
        </input>
        <i className="search icon"></i>
      </div>
    </div>
  );
}
}

export default FilterSearchBar;
