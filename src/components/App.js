

import React, { Component } from 'react';
import github from '../api/github';
import SearchBar from './SearchBar';
import FilterSearchBar from './FilterSearchBar';
import RepoList from './RepoList';


class App extends Component {

  constructor(props){
    super(props);
    this.state = { repos: [], names: [] };
    this.onSubmit = this.onSubmit.bind(this);
    this.onListChange = this.onListChange.bind(this);

  }

  onListChange(newList) {


    let filterVariable = this.state.repos.map((repo) => {
      if(repo.name.toLowerCase().includes(newList)) {
        return repo.name;
      } else{
      return (
        <div>
          It's okay
        </div>
      );
    }
    });

    this.setState({repos: filterVariable});
    console.log("The filter variable is:", filterVariable);



    // let someVariable = this.state.repos.map((repository) => {
    //       if(repository.name.includes(newList)) {
    //           return(repository);
    //   }
    // });
    // console.log("someVariable is:", someVariable);
    // this.setState({repos: someVariable});
  }

  async onSubmit(inputValue) {

    let response = await github.get(`/users/${inputValue}/repos`, {
      params: {
        username: inputValue
      }
    });

    this.setState({
      repos: response.data,
      names: response.data.map((repositories)=> {
        return repositories.name
      })
    });
    console.log("The state is: ", this.state);

  }


  render(){
    return(
      <div>
        <SearchBar whenUserClicksOnMe={this.onSubmit}/>
        <FilterSearchBar filtering={this.onListChange} repos={this.state.repos} names={this.state.names}/>
        <RepoList repositories={this.state.repos} names={this.state.names}/>
      </div>
    );
  }
}

export default App;
