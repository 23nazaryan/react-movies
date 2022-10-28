import React from "react";

class Search extends React.Component {
    state = {
        types: [
            {key: 'all', name: 'All'},
            {key: 'movie', name: 'Movie'},
            {key: 'series', name: 'Series'},
            {key: 'episode', name: 'Episode'}
        ],
        type: 'all',
        search: ''
    }

    handleSearch = () => {
        let {search, type} = this.state

        if (search.length < 4) {
            alert('The search term is too short')
            return false
        }

        this.props.searchMovies(search, type)
    }

    handleFilter = event => {
        let {search} = this.state
        let type = event.target.value

        this.setState(() => ({type}), () => {
            this.props.searchMovies(search, type)
        })
    }

    render() {
        const {types, search, type} = this.state

        return (<div className="row">
            <div className="input-field col s12">
                <div className="row">
                    <div className="col s1">
                        <a className="btn-floating btn-large waves-effect waves-light red"
                           onClick={this.handleSearch}
                        ><i className="fa-solid fa-magnifying-glass"></i>
                        </a>
                    </div>
                    <div className="col s11">
                        <input
                            id="email"
                            type="search"
                            className="validate"
                            placeholder="Search"
                            value={search}
                            onChange={e => {
                                this.setState({search: e.target.value})
                            }}
                        />
                    </div>
                </div>
            </div>
            {
                types.map(item => (<div className="col s3" key={item.key}>
                    <p>
                        <label htmlFor={'id_' + item.key}>
                            <input
                                id={'id_' + item.key}
                                name="type"
                                type="radio"
                                value={item.key}
                                checked={item.key === type}
                                onChange={this.handleFilter}
                            />
                            <span>{item.name}</span>
                        </label>
                    </p>
                </div>))
            }
        </div>)
    }
}

export default Search