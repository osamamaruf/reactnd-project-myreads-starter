import React from 'react'
import Book from './Book'

class Shelf extends React.Component {
    render() {
        const title = this.props.title;
        const books = this.props.books;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <li key={book.title}>
                                <Book title={book.title} author={book.author} cover={book.cover}></Book>
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