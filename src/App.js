import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './components/Shelf'
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

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search navigateToHome={this.navigateToHome}></Search>
        ) : (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Shelf
                    title='Currently Reading'
                    shelf='currentlyReading'
                    books={this.state.books}
                    onShelfChange={this.changeShelf}>
                  </Shelf>
                  <Shelf title='Want to Read' shelf='wantToRead' books={this.state.books} onShelfChange={this.changeShelf}></Shelf>
                  <Shelf title='Read' shelf='read' books={this.state.books} onShelfChange={this.changeShelf}></Shelf>
                </div>
              </div>
              <div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true })} href='#search'>Add a book</a>
              </div>
            </div>
          )}
      </div>
    )
  }
}

export default BooksApp
