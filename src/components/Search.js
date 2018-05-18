import React from 'react'
import SearchBar from './SearchBar'
import SearchGrid from './SearchGrid'

class Search extends React.Component {
    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState(
            () => ({
                query: query.trim()
            })
        )

    }

    clearQuery = () => {
        this.updateQuery('')
    }

    render() {
        return (
            <div className="search-books">
                <SearchBar query={this.state.query} updateQuery={this.updateQuery}></SearchBar>
                <SearchGrid></SearchGrid>
            </div>
        );
    };
}

export default Search