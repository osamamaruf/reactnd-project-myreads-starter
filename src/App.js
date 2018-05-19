import React from 'react'
import BookShelf from './components/BookShelf'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './components/Search'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    books: []
  }


  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books
      }));
    })
  }

  changeShelf(e, book) {
    let shelf = e.target.value;
    let modifiedShelf = this.state.books.some((fBook) => (fBook.id === book.id)) ?
      this.state.books.map((b) => {
        if (b.id === book.id) {
          b.shelf = shelf;
          BooksAPI.update(b, shelf);
        }
        return b;
      }) : (() => {
        book.shelf = shelf;
        BooksAPI.update(book, shelf);
        return this.state.books.concat([book]);
      })();
    this.setState((currentState) => ({
      books: modifiedShelf
    }));
  }

  addBook(state, book, shelf) {
    book.shelf = shelf;
    BooksAPI.update(book, shelf);
    return state.books.concat([book]);
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookShelf books={this.state.books} onShelfChange={this.changeShelf.bind(this)}></BookShelf>
        )}>
        </Route>

        <Route path='/search' render={() => (
          <Search onShelfChange={this.changeShelf.bind(this)}></Search>
        )}>
        </Route>

      </div>
    )
  }
}

export default BooksApp
