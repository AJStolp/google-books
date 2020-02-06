import React from 'react';
import './App.css';
import Header from './Header'
import SearchFilterApp from './searchFilterApp/searchFilterApp'

const url = '';
const apiKey = 'AIzaSyDNXADSE0aeI48JpVKJej3uK3xyxmhHMAg';

class App extends React.Component() {
  constructor() {
    super()
    this.state = {
      books: [],
      printType: all,
      bookType: all,
      search: ''
    }
}

componentDidMount() {
  fetch()
}

  render() {
      return (
        <div className="App">
          <Header />
          <SearchFilterApp />
        </div>
    );
  }
}

export default App;