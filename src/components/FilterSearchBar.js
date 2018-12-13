

import React from 'react';



const FilterSearchBar = (props) => {


  // let filteredList = (event) => {
  //   if(event.target.value === RepoList.state.names)
  // }

  return(
    <div className="field">
      <br />
      <br />
      <div className="ui big icon input">
        <input
          type="text"
          placeholder="Apply any filters"
          onChange={(event) => {
            if(event.target.value === props.names) {
              return(
                console.log("The names match")
              );
            }
          }}
          >
        </input>
        <i className="search icon"></i>
      </div>
    </div>
  );

}

export default FilterSearchBar;
