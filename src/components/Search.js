import React from 'react';

class Search extends React.Component {
  state = {
    input: '',
    repos: null,
    repoCount: null
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
          {repoCount === 0 ?
            <NoReposFound />
            :
            <Repos />
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
          repoCount: repos.total_count
        });
      });
  };
}

export default Search;