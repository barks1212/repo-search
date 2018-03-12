import React from 'react';
import PT from 'prop-types';

const Sorter = (props) => (
  <section className="sort is-paddingless is-marginless">
    <span className="is-paddingless has-text-weight-bold"> Sort by </span>
    <button className="button is-small is-paddingless is-marginless is-text" id="sortButton" onClick={() => props.sorter('newest', props.repos)}>Newest </button>
    |
    <button className="button is-small is-paddingless is-marginless is-text" id="sortButton" onClick={() => props.sorter('oldest', props.repos)}>Oldest</button>
    |
    <button className="button is-small is-paddingless is-marginless is-text" id="sortButton" onClick={() => props.sorter('mostForks', props.repos)} >Most forks</button>
    |
    <button className="button is-small is-paddingless is-marginless is-text" id="sortButton" onClick={() => props.sorter('leastForks', props.repos)} >Least forks</button>
  </section>
);

Sorter.propTypes = {
  repos: PT.array.isRequired,
  sorter: PT.func.isRequired
}

export default Sorter;