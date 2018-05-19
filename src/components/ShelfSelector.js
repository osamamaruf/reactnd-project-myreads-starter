import React from 'react'

class ShelfSelector extends React.Component {
    render() {
        const { book, onShelfChange } = this.props;

        return (
            <div className="book-shelf-changer">
                <select value={book.shelf} onChange={(e) => onShelfChange(e, book)}>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    };
}

export default ShelfSelector