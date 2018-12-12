

import React, { Component } from 'react';
import github from '../api/github';
import SearchBar from './SearchBar';
import FilterSearchBar from './FilterSearchBar';
import RepoList from './RepoList';


class App extends Component {

  constructor(props){
    super(props);
    this.state = { repos: [] };
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(inputValue) {

    let response = await github.get(`/users/${inputValue}/repos`, {
      params: {
        username: inputValue
      }
    });

    this.setState({repos: response.data});
    console.log("The state is: ", this.state);
  }



  render(){
    return(
      <div>
        <SearchBar whenUserClicksOnMe={this.onSubmit} />
        <FilterSearchBar repos={this.state.repos}/>
        <RepoList repositories={this.state.repos}/>
      </div>
    );
  }
}

export default App;
