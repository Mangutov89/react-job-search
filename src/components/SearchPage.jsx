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
  componentDidMount(){
    console.log("state", this.state.searchJobList)
  }

  async handleGetJobsFromAPI(searchTerm) {
    console.log("starter state", this.state.searchJobList);
    searchTerm = searchTerm.replace(' ', '_');
    let json;
    let newState;
    let jobList = [...this.state.searchJobList]
    try {
      const response = await fetch(`https://api.adzuna.com:443/v1/api/jobs/us/search/1?app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}&what=${searchTerm}`);
      json = await response.json();
      console.log(json);
      console.log("jobList", jobList);
      for (var i = 0; i <= 9; i ++) {
        const company = json.results[i].company.display_name;
        const title = json.results[i].title;
        const description = json.results[i].description;
        const location = json.results[i].location.display_name;
        const id = json.results[i].id;
        jobList.push({company, title, location, description, id})
        console.log(newState)
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
        <JobSearch onGetJobsFromAPI={this.handleGetJobsFromAPI}></JobSearch>
        <JobDisplay></JobDisplay>
      </div>
  
    );
  }
}

export default SearchPage;