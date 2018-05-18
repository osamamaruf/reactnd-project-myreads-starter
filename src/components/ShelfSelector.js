import React from 'react'

class ShelfSelector extends React.Component {
    render() {
        const shelf = this.props.shelf;
        const onShelfChange = this.props.onShelfChange;
        const id = this.props.id;
        return (
            <div className="book-shelf-changer">
                <select value={shelf} onChange={(e) => onShelfChange(e,id)}>
                    <option value="none" disabled>Move to...</option>
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