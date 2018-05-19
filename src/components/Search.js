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
            () => { this.fetchSearchedBooks(this.state.query) }
        );

    }

    fetchSearchedBooks(query) {
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
                    this.setState(() => ({
                        books
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
        const { navigateToHome } = this.props;
        return (
            <div className="search-books" >
                <SearchBar navigateToHome={navigateToHome} query={query} updateQuery={this.updateQuery}></SearchBar>
                <SearchGrid books={books}></SearchGrid>
            </div>
        );
    };
}

export default Search