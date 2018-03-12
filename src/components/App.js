import React from 'react';
import Header from './Header';
import Search from './Search';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <section className="container is-fluid" id="main">
        <Header />
        <Search />
      </section>
    );
  }
}

export default App;
