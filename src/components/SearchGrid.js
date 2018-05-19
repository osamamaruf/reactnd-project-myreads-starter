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
                                    title={book.title}
                                    authors={book.authors ? book.authors : []}
                                    smallThumbnail={book.imageLinks ? book.imageLinks.smallThumbnail : undefined}
                                    shelf={book.shelf}
                                    id={book.id}
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