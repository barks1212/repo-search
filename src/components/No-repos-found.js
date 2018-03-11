import React from 'react';

const NoReposFound = () => (
  <section className="noRepo">
    <section className="container is-fluid" id="errorMessage">
      <h2 className="title">Sorry!</h2>
      <span className="sadFace is-size-1">
        <i className="far fa-frown"></i>
      </span>
      <h3 className="subtitle is-size-4">No repos found</h3>
    </section>
  </section>
);

export default NoReposFound;