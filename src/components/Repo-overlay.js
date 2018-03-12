import React from 'react';
import Moment from 'moment';
import PT from 'prop-types';

const RepoOverlay = (props) => (
  <section className="repoOverlay is-overlay">
    <section className="container has-text-centered" id="contents">
      <section className="header">
        <span className="backArrow is-pulled-right is-size-4-mobile is-size-3-desktop" onClick={() => props.overlayHandler()}><i className="fas fa-arrow-circle-left"></i>
        </span>
      </section>
      <section className="repoTitle">
        <h2 className="title is-size-5">{`${props.repo.name.slice(0, 1).toUpperCase()}${props.repo.name.substring(1)}`}</h2>
        <figure className="image is-64x64" id="overlayImage">
          <img src={props.repo.owner.avatar_url} alt="" />
        </figure>
        <h3 className="subtitle is-size-6 is-marginless">By {props.repo.owner.login}</h3> <p className="has-text-weight-light">{Moment(props.repo.created_at).fromNow()}</p>
      </section>
      <section className="level" id="otherDetails">
        <section className="level-left has-text-centered">
          <p className="level-item" id="forks"><strong>Forks</strong>: {props.repo.forks_count}</p>
          <p className="level-item" id="score"><strong>Score</strong>: {props.repo.score.toFixed(2)}</p>
          <p className="level-item" id="update"><strong>Last updated</strong>: {Moment(props.repo.updated_at).fromNow()}</p>
          
        </section>
        <section className="level-right has-text-centered">
          <p className="level-item" id="starGazers"><strong>Stargazers</strong>: {props.repo.stargazers_count}</p>
          <p className="level-item" id="issues"><strong>Open Issues</strong>: {props.repo.open_issues_count}</p>
          <p className="level-item" id="watchers"><strong>Watchers</strong>: {props.repo.watchers_count}</p>
          
        </section>
      </section>
      <section className="footer is-paddingless">
        <a href={`${props.repo.html_url}`} className="button notification is-info is-rounded" id="repoButton">
          <span className="icon">
            <i className="fab fa-github"></i>
          </span>
          <span>Go to the repo!</span>
        </a>
      </section>
    </section>
  </section>
);

RepoOverlay.propTypes = {
  repo: PT.object.isRequired,
  overlayHandler: PT.func.isRequired
};

export default RepoOverlay;