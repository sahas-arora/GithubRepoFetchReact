

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
        <form className="ui form" onSubmit={this.onFormSubmit}>

          <div className="field">
            <label>GitHub Repo Search</label>
            <div className="ui big icon input">
          <input
          type="text"
          onChange={(event) => {
            this.setState({inputValue: event.target.value});
          }}
          value={this.state.inputValue}
          onSubmit={this.onFormSubmit}
          >
          </input>
          <i className="search icon"></i>
        </div>
          <div className="ui card">
            <div className="ui two buttons">
              <div className="ui basic green button" onClick={this.onFormSubmit}>Go</div>
              <div className="ui basic red button"
                   onClick={()=>{
                        this.props.onClear()
                        this.setState({inputValue: ''})
                        }}> Clear</div>
          </div>
        </div>
      </div>
    </form>
    );
  }
}

export default SearchBar;
