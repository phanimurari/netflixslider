const MovieItemSlider = () => (
  <div className="react-slick-item" key={movie.id}>
    <img className="poster" src={movieImage} width="100%" height="100%" />
  </div>
);

export default MovieItemSlider;
