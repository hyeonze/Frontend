import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends Component {
  state = {
    isLoading : true,
    movies : []
  };
  getMovies = async() => {
    const {data : {data : {movies}}} = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
    this.setState({movies, isLoading : false});  // 키 : 키값 이름이 동일하면 movies(movies : movies)로 표기 가능

  }

  componentDidMount(){
    // setTimeout(() => {
    //   this.setState( {isLoading : false} )}
    //   , 6000);
    this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state; // 구조 분해 할당
    return (//jsx문법...className, 두개이상묶기
      <section className="container">
        {isLoading ?
          (<div className="loader">
            <span className="loader_text">'Loading...'</span>
          </div>) :
          (<div className="movies">
            {movies.map(movie => (<Movie 
                                    id = {movie.id}
                                    year = {movie.year}
                                    title = {movie.title}
                                    summary = {movie.summary}
                                    poster = {movie.medium_cover_image}
                                    genres = {movie.genres}
                                  />))}
          </div>)
        }
      </section>
    )
  }
}

export default App;
