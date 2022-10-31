import {useEffect, useState} from "react"
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY

const Main = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        searchMovies('pirates')
    }, [])

    const searchMovies = (search = 'pirates', type = 'all') => {
        setLoading(true)
        search = search === '' ? 'pirates' : search

        console.log(search, type)


        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${type !== 'all' ? '&type=' + type : ''}`)
            .then(res => res.json())
            .then(data => {
                if (data.Response === 'True') {
                    setMovies(data.Search)
                    setLoading(false)
                } else {
                    setMovies([])
                    setLoading(false)
                }
            })
            .catch(e => {
                console.error(e)
                setLoading(false)
            })
    }


    return (<main className="container content">
        <Search searchMovies={searchMovies}/>
        {
            !loading ? (
                <Movies movies={movies}/>
            ) : <Preloader/>
        }
    </main>)
}

export default Main