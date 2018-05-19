import React from 'react'
import Book from './Book'

class SearchGrid extends React.Component {
    render() {
        const { books, onShelfChange } = this.props;
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {books
                        .map((book) => (
                            <li key={book.id}>
                                <Book
                                    book={book}
                                    onShelfChange={onShelfChange}>
                                </Book>
                            </li>
                        ))

                    }
                </ol>
            </div>
        );
    };
}

export default SearchGrid