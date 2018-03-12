import React from 'react';
import PT from 'prop-types';

const Sorter = (props) => (
  <section className="sort is-paddingless is-mobile">
    <span className="is-paddingless is-size-6-mobile has-text-weight-bold"> Sort by: </span>
    <button className="button is-small is-paddingless is-marginless is-text" id="sortButton" onClick={() => props.sorter('newest', props.repos)}>Newest </button>
    <span className="has-text-weight-light">|</span>
    <button className="button is-small is-paddingless is-marginless is-text" id="sortButton" onClick={() => props.sorter('oldest', props.repos)}>Oldest</button>
    <span className="has-text-weight-light">|</span>
    <button className="button is-small is-paddingless is-marginless is-text" id="sortButton" onClick={() => props.sorter('mostForks', props.repos)} >Most forks</button>
    <span className="has-text-weight-light">|</span>
    <button className="button is-small is-paddingless is-marginless is-text" id="sortButton" onClick={() => props.sorter('leastForks', props.repos)} >Least forks</button>
  </section>
);

Sorter.propTypes = {
  repos: PT.array.isRequired,
  sorter: PT.func.isRequired
};

export default Sorter;