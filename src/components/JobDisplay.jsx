import React from 'react';
import PropTypes from 'prop-types';
import Job from './Job';

function JobDisplay(props) {
  return(
    <div>
      {props.jobList.map((job, index) => 
        <Job title={job.title} 
          company={job.company} 
          description={job.description}
          location={job.location}
          website={job.website}
          id={job.id}
          key={index} />
      )}
    </div>
  );
}

JobDisplay.propTypes = {
  jobList: PropTypes.array
};

export default JobDisplay;