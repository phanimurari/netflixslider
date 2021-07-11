import { Component } from "react";

import Loader from "react-loader-spinner";
import ReactSlider from "./ReactSlick";

const LOADER_SPEC = {
  type: "Oval",
  color: "#d81f26",
  height: 100,
  width: 100,
  timeout: 3000
};

const API_KEY = "706c4478ac5cc7eea09c538996d50522";

const TRENDING_MOVIES_DATA_FETCH_URL = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`;

const MOVIE_IMAGE_PATH = `https://image.tmdb.org/t/p/original/`;

class SliderComponent extends Component {
  state = { isLoading: true, moviesData: [] };

  componentDidMount() {
    this.getMoviesInSlider();
  }

  getMoviesInSlider = async () => {
    const response = await fetch(TRENDING_MOVIES_DATA_FETCH_URL);
    const moviesData = await response.json();

    this.setState({ moviesData, isLoading: false });
  };

  renderLoader = () => (
    <Loader
      type={LOADER_SPEC.type}
      color={LOADER_SPEC.color}
      height={LOADER_SPEC.height}
      width={LOADER_SPEC.width}
      timeout={LOADER_SPEC.timeout}
    />
  );

  renderSlider = () => {
    const { moviesData } = this.state;

    return <ReactSlider moviesData={moviesData} />;
  };

  render() {
    const { isLoading } = this.state;

    return isLoading ? this.renderLoader() : this.renderSlider();
  }
}

export default SliderComponent;
