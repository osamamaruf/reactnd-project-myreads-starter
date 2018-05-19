import React from 'react'
import ShelfSelector from './ShelfSelector'

class Book extends React.Component {
    render() {
        const { book, onShelfChange } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 192,
                            backgroundImage: `url(${book.imageLinks ?
                                book.imageLinks.smallThumbnail :
                                undefined}`
                        }}>
                    </div>
                    <ShelfSelector book={book} onShelfChange={onShelfChange}></ShelfSelector>
                </div>
                <div className="book-title">{book.title}</div>
                {
                    (book.authors) &&
                    (book.authors.length > 0) &&
                    (book.authors.map((author) => (
                        <div key={author} className="book-authors">{author}
                        </div>
                    )))
                }
            </div>
        );
    };
}

export default Book