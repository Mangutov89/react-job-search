import React from 'react';


function JobSearch() {
  let input;
  return(
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        console.log('searched title', input.value.trim());
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