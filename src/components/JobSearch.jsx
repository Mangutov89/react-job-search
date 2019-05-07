import React from 'react';


function JobSearch(props) {
  let input;
  return(
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        props.onGetJobsFromAPI(input.value.trim());
        input.value = '';
      }}>
        <input placeholder="job search" ref={node => {
          input = node;
        }}></input>
        <button>Search</button>
      </form>
    </div>
  );
}

export default JobSearch;