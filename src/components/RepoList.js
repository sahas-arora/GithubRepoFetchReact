

import React from 'react';
import Repos from './Repos';

const RepoList = (props) => {

  let individualRepo = props.repositories.map((repo) => {



    return(
      <div>
      <Repos individualRepo={repo} gitURL={repo.html_url} />
    </div>
    );
  });


  console.log("The url is: ",individualRepo.html_url);
  if(!individualRepo){
    return(
      <div>
        There are no public repositories for that user-name. Search for a different user.
      </div>
    );
  }
  return(
    <div className="container">
    <div className="ui relaxed divided list">
        {individualRepo}
    </div>
  </div>
  );
}


export default RepoList;
