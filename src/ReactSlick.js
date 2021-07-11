import { Component } from "react";
import Slider from "react-slick";

import "./index.css";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]
};

class ReactSlider extends Component {
  renderSlider = () => {
    const { moviesData } = this.props;

    const moviesDataList = moviesData.results;

    console.log(moviesDataList);

    return (
      <Slider {...settings}>
        {moviesDataList.map((movie) => {
          const movieImage = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
          return (
            <div className="react-slick-item" key={movie.id}>
              <img className="poster" src={movieImage} />
            </div>
          );
        })}
      </Slider>
    );
  };

  render() {
    return <div className="slick-app-container">{this.renderSlider()}</div>;
  }
}

export default ReactSlider;
