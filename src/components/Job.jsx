import React from 'react';
import { connect } from 'react-redux';
import { saveJob } from './../actions';
import PropTypes from'prop-types';


function Job(props){
  const title=props.title.replace('<strong>', '').replace('</strong>', '');
  const description=props.description.replace(/<strong>/g, '').replace(/<\/strong>/g, '');
  const job = {company: props.company,
    title: title,
    description: description,
    location: props.location,
    website: props.website,
    id: props.id  };
  return(
    <div>
      <h2>{title}</h2>
      <h3>{props.company}</h3>
      <h3>{description}</h3>
      <h3>{props.location}</h3>
      <a href={props.website}>click here to check out posting</a>
      <button onClick={ e => {
                  e.preventDefault();
                  props.dispatch(saveJob(job))} 
                  }>Save this Job</button>
    </div>
  );
}

Job.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(Job);