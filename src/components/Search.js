import React from 'react';
import Repo from './Repo';
import NoReposFound from './No-repos-found';
import Sorter from './Sorter';

class Search extends React.Component {
  state = {
    input: '',
    repos: null,
    repoCount: null,
    sort: null
  };

  render() {
    const { repos, repoCount } = this.state;
    return (
      <section className="search">
        <section className="field">
          <p className="control has-icons-left">
            <input className="input is-medium is-rounded is-info" onChange={this.inputHandler}
              type="text" value={this.state.input} placeholder="eg: Hangman" />
            <span className="icon is-small is-left">
              <i className="fas fa-search"></i>
            </span>
          </p>
          <button className="button is-medium is-info is-rounded" onClick={() => this.repoSearch(this.state.input)}>Search</button>
          {repoCount !== null ?
            repoCount > 0 ?
              <section className="reposRendered">
                <Sorter sorter={this.sorter} repos={this.state.repos}/>
                {repos.map((repo, i) => {
                  return (
                    <section className="repoMap" key={i}>
                      <Repo repo={repo}/>
                    </section>
                  );
                })}
              </section>
              :
              <NoReposFound />
            :
            null
          }
        </section>
      </section>
    );
  }

  inputHandler = (event) => {
    this.setState({ input: event.target.value });
  };

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
    this.setState({sort: order});

    if (order === 'newest') {
      let newRepos = repoList.sort((a, b) => {
        return Date.parse(b.created_at) - Date.parse(a.created_at);
      });
      this.setState({repos: newRepos});
    }

    if (order === 'oldest') {
      let oldRepos = repoList.sort((a, b) => {
        return Date.parse(a.created_at) - Date.parse(b.created_at);
      });
      this.setState({repos: oldRepos});
    }

    if (order === 'mostForks') {
      let mostForks = repoList.sort((a, b) => {
        return b.forks_count - a.forks_count;
      });
      this.setState({repos: mostForks});
    }

    if (order === 'leastForks') {
      let leastForks = repoList.sort((a,b) => {
        return a.forks_count - b.forks_count;
      });
      this.setState({repos: leastForks});
    }

  }
}

export default Search;