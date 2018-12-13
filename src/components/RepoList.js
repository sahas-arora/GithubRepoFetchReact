

import React from 'react';
import Repos from './Repos';

const RepoList = (props) => {

  let individualRepo = props.repositories.map((repo) => {
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
