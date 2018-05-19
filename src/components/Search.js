import React from 'react'
import SearchBar from './SearchBar'
import SearchGrid from './SearchGrid'
import * as BooksAPI from '../BooksAPI'

class Search extends React.Component {
    state = {
        query: '',
        books: []
    }

    updateQuery = (query) => {
        this.setState(
            () => ({
                query: query
            }),
            () => { this.fetchSearchedBooks(this.state.query, this.props.shelvedBooks) }
        );

    }

    fetchSearchedBooks(query, shelvedBooks) {
        query === '' ?
            this.setState(() => ({
                books: []
            })) :
            BooksAPI.search(query)
                .then((books) => (
                    books.error ? [] : books.map((book) => {
                        if (!book.shelf) {
                            book.shelf = 'none';
                        }

                        return book;
                    })
                ))
                .then((books) => {
                    let displayBooks = books.map((b) => {
                        let commonBook = shelvedBooks.filter((sb) => sb.id === b.id);
                        if (commonBook.length > 0) {
                            b.shelf = commonBook[0].shelf;
                        }
                        return b;
                    });
                    this.setState(() => ({
                        books:displayBooks
                    }))

                })
                .catch((error) => {
                    console.log(error);
                    this.setState(() => ({
                        books: []
                    }))
                });
    }

    render() {
        const { query, books } = this.state;
        const { onShelfChange } = this.props;
        return (
            <div className="search-books" >
                <SearchBar query={query} updateQuery={this.updateQuery}></SearchBar>
                <SearchGrid books={books} onShelfChange={onShelfChange}></SearchGrid>
            </div>
        );
    };
}

export default Search