import {useState} from "react";

const Search = props => {
    const {
        searchMovies = Function.prototype
    } = props

    const types = [
        {key: 'all', name: 'All'},
        {key: 'movie', name: 'Movie'},
        {key: 'series', name: 'Series'},
        {key: 'episode', name: 'Episode'}
    ]

    const [type, setType] = useState('all')
    const [search, setSearch] = useState('')

    const handleSearch = () => {
        if (search.length < 4) {
            alert('The search term is too short')
            return false
        }

        searchMovies(search, type)
    }

    const handleFilter = event => {
        setType(event.target.value)
        searchMovies(search, event.target.value)
    }

    return (<div className="row">
        <div className="input-field col s12">
            <div className="row">
                <div className="col s2 m1">
                    <button className="btn-floating btn-large waves-effect waves-light red"
                       onClick={handleSearch}
                    ><i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div className="col s10 m11">
                    <input
                        id="email"
                        type="search"
                        className="validate"
                        placeholder="Search"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
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
                            onChange={handleFilter}
                        />
                        <span>{item.name}</span>
                    </label>
                </p>
            </div>))
        }
    </div>)
}

export default Search