import React from 'react'
import Shelf from './Shelf'

class BookShelf extends React.Component {
    render() {
        const { books, onShelfChange, navigateToSearch } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf
                            title='Currently Reading'
                            shelf='currentlyReading'
                            books={books}
                            onShelfChange={onShelfChange}>
                        </Shelf>
                        <Shelf title='Want to Read' shelf='wantToRead' books={books} onShelfChange={onShelfChange}></Shelf>
                        <Shelf title='Read' shelf='read' books={books} onShelfChange={onShelfChange}></Shelf>
                    </div>
                </div>
                <div className="open-search">
                    <a onClick={() => { navigateToSearch(); }}>Add a book</a>
                </div>
            </div >
        )
    };
}

export default BookShelf