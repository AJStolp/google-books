import React from 'react';
import Header from './header';
import SearchFilterApp from './searchFilterApp/searchFilterApp';
import BookListings from './bookListings/bookListings';


const googleUrl = 'https://www.googleapis.com/books/v1/volumes';
// const googleUrl = 'https://www.googleapis.com/auth/books';
const apiKey = 'AIzaSyDNXADSE0aeI48JpVKJej3uK3xyxmhHMAg';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      printType: '',
      // bookType: '',
      searchField: '',
      filter: '',
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  formatParams(params) {
    const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        return queryItems.join('&');
}

handleSubmit = (event) => {
  console.log(this.searchField)
  event.preventDefault();

  const paramsGoogle = {
    key: apiKey,
    q: this.state.searchField,
    printType: this.state.printType,
    filter: this.state.filter,
  }


  const options = {
    method: 'GET',
    header: {
      'Access-Control-Allow-Origin': 'no-cors',
      "Content-Type": "text/plain",

    }
  }

  let queryStringGoogle = this.formatParams(paramsGoogle);
  let newGoogleUrl = googleUrl + '?' + queryStringGoogle;


  fetch(newGoogleUrl, options)
    .then(response => {
      console.log(this.state)
      if(!response.ok) {
        throw new Error()
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

handleSearch = (e) => {
  console.log(e.target.value);
  this.setState({searchField: e.target.value})
}

handlePrintType = (selectedPrint) => {
  this.setState({
    printType: selectedPrint
  })
}

handleFilterType = (selectedBookType) => {
  console.log(selectedBookType);
  this.setState({
    filter: selectedBookType
  })
}


  render() {
    
    return (
        <div className="App">
          <Header />
          <SearchFilterApp
          handleSubmit={this.handleSubmit} 
          handleSearch={this.handleSearch}
          handlePrintType={selectedPrint => this.handlePrintType(selectedPrint)}
          handleTypeOfBook={selectedBookType => this.handleFilterType(selectedBookType)}
          />
          <BookListings books={this.state.books}/>
        </div>
    );
  }
}

export default App;