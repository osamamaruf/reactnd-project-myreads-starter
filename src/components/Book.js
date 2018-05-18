import React from 'react'
import ShelfSelector from './ShelfSelector'

class Book extends React.Component {
    render() {
        const title = this.props.title;
        const author = this.props.author;
        const smallThumbnail = this.props.smallThumbnail;
        const shelf = this.props.shelf;
        const onShelfChange = this.props.onShelfChange;
        const id=this.props.id;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${smallThumbnail}` }}></div>
                    <ShelfSelector  id={id} shelf={shelf} onShelfChange={onShelfChange}></ShelfSelector>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{author}</div>
            </div>
        );
    };
}

export default Book