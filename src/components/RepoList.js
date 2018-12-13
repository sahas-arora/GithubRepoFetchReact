

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


  let individualRepo = props.repositories.map((repo) => {

    if(!repo){
      return <div>
      </div>
    } else
    return(
      <div key={repo.id}>
      <Repos individualRepo={repo} gitURL={repo.html_url} names={repo.name} />
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
