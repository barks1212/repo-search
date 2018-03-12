import React from 'react';
import PT from 'prop-types';
import Moment from 'moment';
import RepoOverlay from './Repo-overlay';

const RepoMobile = (props) => (
  <section className="repoMobile">
    <section className="card has-text-centered notification is-danger" onClick={() => props.overlayHandler()}>
      <section className="container" id="cardHeader">
        <h2 className="title">{`${props.repo.name.slice(0, 1).toUpperCase()}${props.repo.name.substring(1)}`}</h2>
      </section>
      <figure className="image is-128x128" id="cardPic">
        <img src={props.repo.owner.avatar_url} alt="" />
      </figure>
      <section className="container" id="cardFooter">
        <span className="nameAndDate"> <h3 className="subtitle">{props.repo.owner.login}</h3> <p className="has-text-weight-light">{Moment(props.repo.created_at).fromNow()}</p> </span>
      </section>
    </section>
    {props.overlayOn ? <RepoOverlay overlayOn={props.overlayOn} repo={props.repo} overlayHandler={props.overlayHandler} />
      : null}
  </section>
);

RepoMobile.propTypes = {
  repo: PT.object.isRequired,
  overlayHandler: PT.func.isRequired,
  overlayOn: PT.bool
};

export default RepoMobile;