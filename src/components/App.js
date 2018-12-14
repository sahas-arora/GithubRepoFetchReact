

import React, { Component } from 'react';
import github from '../api/github';
import SearchBar from './SearchBar';
import FilterSearchBar from './FilterSearchBar';
import RepoList from './RepoList';


class App extends Component {

  constructor(props){
    super(props);
    this.state = { repos: [], updatedRepos: []};
    this.onSubmit = this.onSubmit.bind(this);
    this.onListChange = this.onListChange.bind(this);
    this.onClearButtonPush = this.onClearButtonPush.bind(this);

  }

  onListChange(newList) {

    let filterVariable = [];

    this.state.repos.forEach((repo) => {
      console.log(repo);

      if(repo.name){
      if(repo.name.toLowerCase().includes(newList.toLowerCase())) {
         filterVariable.push(repo);
      }
    }
    });

    this.setState({updatedRepos: filterVariable});
    console.log("The filter variable is:", filterVariable);



  }

  onClearButtonPush(){

    this.setState({repos: [], updatedRepos: []});
  }

  async onSubmit(inputValue) {

    let response = await github.get(`/users/${inputValue}/repos`, {
      params: {
        username: inputValue
      }
    });

    this.setState({
      repos: response.data,
      updatedRepos: response.data
    });
    console.log("The state is: ", this.state);

  }


  render(){
    return(
      <div>
        <SearchBar whenUserClicksOnMe={this.onSubmit} onClear={this.onClearButtonPush}/>
        <FilterSearchBar filtering={this.onListChange}/>
        <RepoList repositories={this.state.repos} updatedRepositories={this.state.updatedRepos} names={this.state.names}/>
      </div>
    );
  }
}

export default App;
