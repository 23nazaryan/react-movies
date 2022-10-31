import React from "react"
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        this.searchMovies('pirates')
    }

    searchMovies = (search = 'pirates', type = 'all') => {
        this.setState({loading: true})
        search = search === '' ? 'pirates' : search

        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${type !== 'all' ? '&type=' + type : ''}`)
            .then(res => res.json())
            .then(data => {
                if (data.Response === 'True') {
                    this.setState({movies: data.Search, loading: false})
                } else {
                    this.setState({movies: [], loading: false})
                }
            })
            .catch(e => {
                console.error(e)
                this.setState({loading: false})
            })
    }

    render() {
        const {movies, loading} = this.state

        return (<main className="container content">
            <Search searchMovies={this.searchMovies}/>
            {
                !loading ? (
                    <Movies movies={movies}/>
                ) : <Preloader/>
            }
        </main>)
    }
}

export default Main