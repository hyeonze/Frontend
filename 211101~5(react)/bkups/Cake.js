// Cake 클래스형 컴포넌트
// <h1>cake 가격 : </h1>
// <h2>할인 가격 : </h2>
// 버튼 누르면 할인 가격이 나오도록 30% 할인

import React, { Component } from 'react'

class Cake extends Component {
    state = {
        price : 10000,
        discountPrice : 0
    }

    discount = () => {
        this.setState(
            current => ({//current는 this.state
                discountPrice : current.price * 0.7
            })
        );
    };

    render() {
        // const {price,discountPrice} = this.state; // 구조분해할당 사용시 this.state.price 대신 price로 사용할 수 있음
        return (
            <div>
                <h1>치즈 케이크 가격은 {this.state.price} 입니다.</h1>
                <button onClick={this.discount}>할인</button>
                <h2>30% 할인 가격은 {this.state.discountPrice} 입니다.</h2>
            </div>
        )
    }
}

export default Cake