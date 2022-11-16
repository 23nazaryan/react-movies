function Movie(props) {
    const {
        Title: title,
        Poster: poster,
        Year: year,
        Type: type
    } = props

    return ((poster === 'N/A') ? '' : <div className="card movie">
        <div className="card-image">
            <img src={poster} alt={title}/>
            <span className="card-title">{title}</span>
        </div>
        <div className="card-content">
            <p>{type} <span className="right">{year}</span></p>
        </div>
    </div>)
}

export default Movie