import React from 'react';
import Moment from 'moment';
import RepoOverlay from './Repo-overlay';
import PT from 'prop-types';


const Repo = (props) => (
  <section className="repoMain">
    <section className="tile is-parent has-text-centered" id="mainTile">
      <article className="tile is-child box notification is-danger" onClick={() => props.overlayHandler()}>
        <p className="title is-size-5-tablet" id="tileHeader">
          {`${props.repo.name.slice(0, 1).toUpperCase()}${props.repo.name.substring(1)}`}
        </p>
        <figure className="image is-4by3" id="tilePic">
          <img src={props.repo.owner.avatar_url} alt="" />
        </figure>
        <p className="title is-size-6 is-size-7-tablet">{props.repo.owner.login}</p>
        <p className="subtitle is-size-7 has-text-weight-light">{Moment(props.repo.created_at).fromNow()}</p>
      </article>
      {props.overlayOn ? <RepoOverlay overlayOn={props.overlayOn} repo={props.repo} overlayHandler={props.overlayHandler} />
        : null}
    </section>
  </section>
);

Repo.propTypes = {
  repo: PT.object.isRequired,
  overlayHandler: PT.func.isRequired,
  overlayOn: PT.bool
};

export default Repo;