import React from 'react';
import JobSearch from './JobSearch';
import JobDisplay from './JobDisplay';
import v4 from 'uuid/v4';


class SearchPage extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      searchJobList: []
    }
    this.handleGetJobsFromAPI = this.handleGetJobsFromAPI.bind(this);
  }


  async handleGetJobsFromAPI(searchTerm) {
    searchTerm = searchTerm.replace(' ', '_');
    let json;
    let jobList = [...this.state.searchJobList]
    try {
      const response = await fetch(`https://api.adzuna.com:443/v1/api/jobs/us/search/1?app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}&what=${searchTerm}`);
      json = await response.json();
      for (var i = 0; i <= 9; i ++) {
        const company = json.results[i].company.display_name;
        const title = json.results[i].title;
        const description = json.results[i].description;
        const location = json.results[i].location.display_name;
        const id = json.results[i].id;
        const website = json.results[i].redirect_url
        jobList.push({company, title, location, description, id, website})
      }
    }
    catch(e) {
      console.log('An error occurred.', e)
    }
    this.setState({searchJobList: jobList});
    console.log("at end", this.state.searchJobList);
  }

  render() {
    return(
      <div>
        <JobSearch onGetJobsFromAPI={this.handleGetJobsFromAPI}/>
        <JobDisplay jobList= {this.state.searchJobList}/>
      </div>
  
    );
  }
}

export default SearchPage;