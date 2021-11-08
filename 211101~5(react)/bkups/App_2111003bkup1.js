import React, { Component } from 'react'
import axios from 'axios';
import Movie from './Movie';

class App extends Component {
  state = {
    isLoading :true,
    movies : []
  };
  getMovies = async() => {
    const {data:{data:{movies}}} = await axios.get('https://yts-proxy.now.sh/list_movies.json');//구조분해할당, axios는 비동기식이므로 await
    this.setState({movies, isLoading:false});//키:키값 이름이 동일하면 생략가능(movies:movies)
    //개발자도구 Components창에서 movies 확인가능, react developer tool 익스텐션 필요
  }

  componentDidMount(){
    // setTimeout(() => {//로딩확인
    //     this.setState({isLoading:false})}
    //   ,6000);
    this.getMovies();//영화데이터 불러오기
  }
  render() {
    const {isLoading} = this.state; // 구조분해할당
    return (
      <div>
        {isLoading ? 'Loading...' : <Movie />}
      </div>
    )
  }
}

export default App;

//https://yts.mx/api
//https://yts.mx/api/v2/list_movies.json
//서버에있는 json 사용 : npm install axios