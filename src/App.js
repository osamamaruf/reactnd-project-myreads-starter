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

  changeShelf = (e, book) => {
    let shelf = e.target.value;
    this.setState((currentState) => ({
      books: currentState.books.map((b) => {
        if (b.id === book.id) {
          b.shelf = shelf;
          BooksAPI.update(b, shelf);
        }
        return b;
      })
    }));
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookShelf books={this.state.books} onShelfChange={this.changeShelf}></BookShelf>
        )}>
        </Route>

        <Route path='/search' render={() => (
          <Search onShelfChange={this.changeShelf}></Search>
        )}>
        </Route>

      </div>
    )
  }
}

export default BooksApp
