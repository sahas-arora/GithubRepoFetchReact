

import React from 'react';

const FilterSearchBar = (props) => {

  return(
    <div className="field">
      <br />
      <br />
      <div className="ui big icon input">
        <input
          type="text"
          placeholder="Apply any filters"
          onChange={(event) => {
              props.filtering(event.target.value);
          }
          }
          >
        </input>
        <i className="search icon"></i>
      </div>
    </div>
  );
}


export default FilterSearchBar;
