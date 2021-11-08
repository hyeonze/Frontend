/* App_1.js */
import React from "react";
import Macaron from "./Macaron";
import cakes from "./cakes.json";//json파일로 가져오기
import PropTypes from 'prop-types';

// function Food(props) {//자식컴포넌트
//   console.log(props);
//   return (
//     <>
//       <h1>I like {props.propsName}</h1>
//       <p>I like {props.propsName2}</p>
//     </>
//   );
// }

// function Food(props) {
//   const {propsName,propsName2} = props;//구조 분해 할당(props.을 생략하고 사용할 수 있다)
//   console.log(props);
//   return (
//     <>
//       <h1>I like {propsName}</h1>
//       <p>I like {propsName2}</p>
//     </>
//   );
// }
function Food({propsId,propsName,propsImage}) {//구조 분해 할당(2번째 방법, 더욱 간소화)
  return (
    <div>
      <h1>cake No. {propsId}</h1>
      <h2>{propsName}</h2>
      <img src={propsImage} alt={propsName} />
    </div>
  );
}

/*const cakes = [//배열안에 객체3개 저장
  {
    id: 1,
    name: 'Cookie Dough Cake',
    image: 'https://i.pinimg.com/236x/48/6a/9a/486a9aaab8571b0a9e512c23bab36a68.jpg',
  },
  {
    id: 2,
    name: 'Rainbow Cake',
    image: 'https://i.pinimg.com/236x/dc/e3/2e/dce32e513ce557a951cbbe7fe15f10cb.jpg',
  },
  {
    id: 3,
    name: 'Soft & Moist Funfetti Cake',
    image: 'https://i.pinimg.com/236x/69/9f/6c/699f6cb625a4a749c6320d22c075bd6f.jpg',
  }
];*/

function App() {//부모컴포넌트
  return (
    <>
      <div>안녕하세요!!</div>
      <Macaron />
      {/* <Food propsName={"ice cream"} /> */}
      {/* <Food propsName2={"waffle"} /> */}
      {/* <Food propsId={1}
            propsName={'Cookie Dough Cake'}
            propsImage={'https://i.pinimg.com/236x/48/6a/9a/486a9aaab8571b0a9e512c23bab36a68.jpg'}
      /> */}
      {cakes.map(cake => (
                          <Food propsId={cake.id}
                                propsName={cake.name}
                                propsImage={cake.image}
                          />
      ))}
    </>
  );
}

//npm install prop-types : package.json에서 설치확인
Food.propTypes = {//타입이 안맞으면 에러메시지 출력
  propsId : PropTypes.number.isRequired,
  propsName : PropTypes.string.isRequired,
  propsImage : PropTypes.string
}

export default App;
