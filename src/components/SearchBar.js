import React from 'react'
import { Link } from 'react-router-dom'
import { DebounceInput } from 'react-debounce-input'

class SearchBar extends React.Component {

    render() {
        const { query, updateQuery } = this.props;

        return (
            <div className="search-books-bar">
                <Link className="close-search" to='/'>Close</Link>
                <div className="search-books-input-wrapper">
                    <DebounceInput
                        minLength={0}
                        debounceTimeout={300}
                        type="text"
                        placeholder="Search by title or author"
                        value={query}
                        onChange={(event) => updateQuery(event.target.value)} />
                </div>
            </div>
        );
    };
}

export default SearchBar