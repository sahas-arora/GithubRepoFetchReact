

import React, { Component } from 'react';



class SearchBar extends Component {


  constructor(props){
    super(props);

    this.state = { inputValue: ''};
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);

  }

  onFormSubmit(event){
    event.preventDefault();

    this.props.whenUserClicksOnMe(this.state.inputValue);
  }

  clearForm(event){
    event.preventDefault();

    this.setState({inputValue: ''});
    console.log("You just cleared the form");
  }




  render(){
    return(
      <div>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
          <label>Github Repo Search</label>
        <input
          type="text"
          onChange={(event) => {
            this.setState({inputValue: event.target.value});
          }}
          value={this.state.inputValue}
          >
          </input>
          <div className="ui card">
        <div className="ui two buttons">
          <div className="ui basic green button" onClick={this.onFormSubmit}>Go</div>
        <div className="ui basic red button" onClick={this.clearForm}>Clear</div>
        </div>
      </div>
    </div>
      </form>
    </div>
    );
  }
}

export default SearchBar;
