import React from 'react';
import Header from './header';
import SearchFilterApp from './searchFilterApp/searchFilterApp';

// const url = '';
// const apiKey = 'AIzaSyDNXADSE0aeI48JpVKJej3uK3xyxmhHMAg';

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        books: [],
        // printType: all,
        // bookType: all,
        searchField: '',
      }
}

handleSearch = (e) => {
  console.log(e.target.value);
  this.setState({searchField: e.target.value})
}

// componentDidMount() {
//   fetch()
// }

  render() {
      return (
        <div className="App">
          <Header />
          <SearchFilterApp handleSearch={this.handleSearch}/>
        </div>
    );
  }
}

export default App;