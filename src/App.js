import React from 'react'
import BookShelf from './components/BookShelf'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './components/Search'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }


  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books
      }));
    })
  }

  changeShelf = (e, id) => {
    let shelf = e.target.value;
    this.setState((currentState) => ({
      books: currentState.books.map((b) => {
        if (b.id === id) {
          b.shelf = shelf;
          BooksAPI.update(b, shelf);
        }
        return b;
      })
    }));
  }

  navigateToHome() {
    this.setState({ showSearchPage: false });
  }

  navigateToSearch() {
    this.setState({ showSearchPage: true });
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ?
          (
            <Search navigateToHome={this.navigateToHome.bind(this)}></Search>
          ) :
          (
            <BookShelf navigateToSearch={this.navigateToSearch.bind(this)} books={this.state.books} onShelfChange={this.changeShelf}></BookShelf>
          )}
      </div>
    )
  }
}

export default BooksApp
