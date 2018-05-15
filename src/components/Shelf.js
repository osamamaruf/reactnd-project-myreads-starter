import React from 'react'
import Book from './Book'

class Shelf extends React.Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">title</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <Book></Book>
                    </ol>
                </div>
            </div>
        );
    };
}

export default Shelf