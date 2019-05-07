import React from 'react';

function Job(props){
  return(
    <div>
      <h2>{props.title}</h2>
      <h3>{props.company}</h3>
      <h3>{props.description}</h3>
      <h3>{props.location}</h3>
      <a href={props.website}>click here to check out posting</a>
    </div>
  )
}

export default Job;