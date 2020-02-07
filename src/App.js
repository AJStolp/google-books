import React from 'react';
import Header from './header';
import SearchFilterApp from './searchFilterApp/searchFilterApp';
// import BookListings from './bookListings/bookListings'


const googleUrl = 'https://www.googleapis.com/books/v1/volumes';
const apiKey = 'AIzaSyDNXADSE0aeI48JpVKJej3uK3xyxmhHMAg';



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

  formatParams(params) {
    const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        return queryItems.join('&');
}

handleSearch = (e) => {
  console.log(e.target.value);
  this.setState({searchField: e.target.value})
}

handlePrintType = (selectedPrint) => {
  this.setState({
    printType: selectedPrint
  })
}

handleTypeOfBook = (selectedType) => {
  this.setState({
    bookType: selectedType
  })
}

componentDidMount() {
  const paramsGoogle = {
    key: apiKey,
    q: this.state.searchField
  }

  let queryStringGoogle = this.formatParams(paramsGoogle);
  let newGoogleUrl = googleUrl + '?' + queryStringGoogle;

 fetch(newGoogleUrl)
    .then(response => {
      if(!response.ok) {
        throw new Error
      } else {
        return response.json()
      }
    })
    .then(data => {
      console.log(data);
      this.setState({
        books: data
      })
    })
    .catch(err => {
      alert(`Sorry, Something went wrong. Please Try again! ${err.message}`)
    })
}

  render() {
      return (
        <div className="App">
          <Header />
          <SearchFilterApp 
          handleSearch={this.handleSearch}
          handlePrintType={this.handlePrintType}
          handleTypeOfBook={this.handleTypeOfBook}
          />
          {/* <BookListings /> */}
        </div>
    );
  }
}

export default App;