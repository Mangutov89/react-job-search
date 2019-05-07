import React from 'react';
import { connect } from 'react-redux';
import PropTypes from'prop-types';
import Job from './Job';


function SavedJobs(props) {
  const jobList = props.jobList
  console.log(jobList)
  return(
    <div>
      <p>saved</p>
      {Object.keys(jobList).map((job, index) => 
    
        <Job title={jobList[job].title} 
        company={jobList[job].company} 
        description={jobList[job].description}
        location={jobList[job].location}
        website={jobList[job].website}
        id={jobList[job].id}
        key={index} />
        )}
    </div>
  )
}

SavedJobs.propTypes = {
  songList: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    jobList: state.jobsById
  };
};

export default connect(mapStateToProps)(SavedJobs);