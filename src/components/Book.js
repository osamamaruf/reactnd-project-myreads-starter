import React from 'react'
import ShelfSelector from './ShelfSelector'

class Book extends React.Component {
    render() {
        const onShelfChange = this.props.onShelfChange;

        const book = this.props.book;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail : undefined}` }}></div>
                    <ShelfSelector id={book.id} shelf={book.shelf} onShelfChange={onShelfChange}></ShelfSelector>
                </div>
                <div className="book-title">{book.title}</div>
                {
                    (book.authors) &&
                    (book.authors.length > 0) && (book.authors.map((author) => (
                        <div key={book.id + author} className="book-authors">{author}</div>
                    )))
                }
            </div>
        );
    };
}

export default Book