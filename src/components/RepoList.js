

import React from 'react';
import Repos from './Repos';

const RepoList = (props) => {

  if(!props.repositories){
    return(
      <div>
        Loading...
      </div>
    );
  }


  let individualRepo = props.updatedRepositories.map((repo) => {
    return(
      <div key={repo.name}>
      <Repos individualRepo={repo} />
    </div>
    );
  });

  return(
    <div className="container">
    <div className="ui relaxed divided list">
        {individualRepo}
    </div>
  </div>
  );
}


export default RepoList;
