import React from 'react'
import Book from './Book'

class Shelf extends React.Component {
    render() {
        const { title, shelf, books, onShelfChange } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.filter((book) => (book.shelf === shelf))
                            .map((book) => (
                                <li key={book.title}>
                                    <Book
                                        book={book}
                                        onShelfChange={onShelfChange}>
                                    </Book>
                                </li>
                            ))

                        }
                    </ol>
                </div>
            </div>
        );
    };
}

export default Shelf