/* App_2.js */
// import React, { Component } from 'react'//?
import React from 'react';
import Cake from './Cake';

class App extends React.Component {
  //클래스형 컴포넌트에서 적용되는 생명주기함수
  constructor(props) {
      super(props);
      console.log('constructor함수는 클래스형 컴포넌트가 생성할때 호출됨')
    }
    
    componentDidMount() {
      console.log('componentDidMount함수는 컴포넌트가 처음 화면에 그려지면 실행되는 함수')
    }

    componentDidUpdate() {
      console.log('componentDidUpdate함수는 화면이 새로그려지면 즉 업데이트 되면 실행되는 함수')//버튼누른 후 콘솔확인하면 찍힘
    }

    componentWillUnmount() {
      console.log('componentWillUnmount함수는 컴포넌트가 죽을때 실행되는 함수')//render에 내용 추가하면 DOM이 재생성되면서 호출됨
    }

    state = {
      count: 0, //1 //0 ...?
      sum : 0,
      avg : 0
    };

    add = () => {//익명함수
      // this.state.count = 1;//실행안됨, render함수를 재실행하기 위해 setState함수를 사용해야 함
      // this.setState({count:1});//버튼누른 후 콘솔확인하면 찍힘(componentDidUpdate()실행)
      this.setState(//current는 this.state
        current => ({count : current.count + 1})
        );
    }

    minus = () => {
      // this.state.count = -1;
      // this.setState({count:-1});
      this.setState(
        current => ({count : current.count - 1})
        );
    }
    render(){
      return (
        <>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        <Cake />
        </>
      )
    }
}

export default App;
