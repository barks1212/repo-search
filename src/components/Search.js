import React from 'react';
import Repo from './Repo';
import NoReposFound from './No-repos-found';
import Sorter from './Sorter';
import RepoMobile from './Repo-mobile';

class Search extends React.Component {
  state = {
    input: '',
    repos: null,
    repoCount: null,
    sort: null,
    overlayOn: false
  };

  render() {
    const { repos, repoCount } = this.state;
    return (
      <section className="search has-text-centered-mobile">
        <section className="field" id="searchControls">
          <p className="control has-icons-left" id="searchBar">
            <input className="input is-rounded is-info" onChange={this.inputHandler} onKeyPress={(event) => {if (event.key === 'Enter') this.repoSearch(this.state.input);}}
              type="text" value={this.state.input} placeholder="eg: Hangman" />
            <span className="icon is-small is-left">
              <i className="fas fa-search"></i>
            </span>
          </p>
          <button className="button is-info is-rounded" id="searchButton" onClick={() => this.repoSearch(this.state.input)}>Search</button>
        </section>
        {repoCount !== null ?
          repoCount > 0 ?
            <section className="reposRendered is-paddingless">
              <Sorter sorter={this.sorter} repos={this.state.repos} />
              <section className="repoMobile is-hidden-tablet">              
                {repos.map((repo, i) => {
                  return (
                    <section key={i}>
                      <RepoMobile repo={repo} overlayHandler={this.overlayHandler} overlayOn={this.state.overlayOn} />
                    </section>
                  );
                })}
              </section>
              <section className="tile is-ancestor is-hidden-mobile" id="repoMap">
                {repos.map((repo, i) => {
                  return (
                    <section key={i}>
                      <Repo repo={repo} overlayHandler={this.overlayHandler} overlayOn={this.state.overlayOn}/>
                    </section>
                  );
                })}
              </section>
            </section>
            :
            <NoReposFound />
          :
          null
        }

      </section>
    );
  }

  inputHandler = (event) => {
    this.setState({ input: event.target.value });
  };

  overlayHandler = () => {
    !this.state.overlayOn ? this.setState({ overlayOn: true })
      :
      this.setState({ overlayOn: false });
  }

  repoSearch = (searchVal) => {
    if (searchVal === '') return;
    fetch(`https://api.github.com/search/repositories?q=${searchVal}`)
      .then(res => {
        return res.json();
      }).then(repos => {
        let top20 = repos.items.slice(0, 20).sort((a, b) => {
          return b.forks_count - a.forks_count;
        });
        this.setState({
          repos: top20,
          input: '',
          repoCount: repos.total_count,
          sort: null
        });
      });
  };

  sorter = (order, repoList) => {
    this.setState({ sort: order });

    if (order === 'newest') {
      let newRepos = repoList.sort((a, b) => {
        return Date.parse(b.created_at) - Date.parse(a.created_at);
      });
      this.setState({ repos: newRepos });
    }

    if (order === 'oldest') {
      let oldRepos = repoList.sort((a, b) => {
        return Date.parse(a.created_at) - Date.parse(b.created_at);
      });
      this.setState({ repos: oldRepos });
    }

    if (order === 'mostForks') {
      let mostForks = repoList.sort((a, b) => {
        return b.forks_count - a.forks_count;
      });
      this.setState({ repos: mostForks });
    }

    if (order === 'leastForks') {
      let leastForks = repoList.sort((a, b) => {
        return a.forks_count - b.forks_count;
      });
      this.setState({ repos: leastForks });
    }

  }
}

export default Search;