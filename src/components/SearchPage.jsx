import React from 'react';
import JobSearch from './JobSearch';
import JobDisplay from './JobDisplay';
import v4 from 'uuid';


class SearchPage extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      searchJobList: []
    }
  }

  handleGetJobsFromAPI(searchTerm) {
    return async function(dispatch) {
      const localJobId = v4();
      searchTerm = searchTerm.replace(' ', '_');
      let json;
      try {
        const response = await fetch(`https://api.adzuna.com:443/v1/api/jobs/us/search/1?app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}&what=${searchTerm}`);
        json = await response.json();
        console.log(json);
      }
      catch(e) {
        console.log('An error occurred.', e)
      }
    }
  }

  render() {
    return(
      <div>
        <JobSearch></JobSearch>
        <JobDisplay></JobDisplay>
      </div>
  
    );
  }
}

export default SearchPage;