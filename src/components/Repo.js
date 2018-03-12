import React from 'react';
import Moment from 'moment';
import RepoOverlay from './Repo-overlay';
import PT from 'prop-types';

class Repo extends React.Component {
  state = {
    overlayOn: false,
  }

  render() {
    return (
      <section className="repo">
        <section className="card has-text-centered notification is-danger" onClick={() => this.overlayHandler()}>
          <section className="container" id="cardHeader">
            <h2 className="title">{`${this.props.repo.name.slice(0,1).toUpperCase()}${this.props.repo.name.substring(1)}`}</h2>
          </section>
          <section className="cardPic">
            <img src={this.props.repo.owner.avatar_url} alt="" />
          </section>
          <section className="container" id="cardFooter">
            <span className="nameAndDate"> <h3 className="subtitle">{this.props.repo.owner.login}</h3> <p className="has-text-weight-light">{Moment(this.props.repo.created_at).fromNow()}</p> </span>
          </section>
        </section>
        {this.state.overlayOn ? <RepoOverlay overlayOn={this.state.overlayOn} repo={this.props.repo} overlayHandler={this.overlayHandler} />
          : null}
      </section>
    );
  }

  overlayHandler = () => {
    !this.state.overlayOn ? this.setState({ overlayOn: true })
      :
      this.setState({ overlayOn: false });
  }

}


Repo.propTypes = {
  repo: PT.object.isRequired,
};

export default Repo;