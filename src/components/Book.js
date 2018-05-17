import React from 'react'
import ShelfSelector from './ShelfSelector'

class Book extends React.Component {
    render() {
        const title = this.props.title;
        const author = this.props.author;
        const smallThumbnail = this.props.smallThumbnail;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${smallThumbnail}` }}></div>
                    <ShelfSelector></ShelfSelector>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{author}</div>
            </div>
        );
    };
}

export default Book