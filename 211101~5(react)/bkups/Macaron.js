import React from "react";
//함수형 컴포넌트(파일이름/함수이름 대문자시작)
// function Macaron(){
//     return (
//         <h1>I love macaron</h1>
//     );
// }


class Macaron extends React.Component{
    render(){
        return (
            <h1>I love macaron</h1>
        );
    }
}
//내보내기
export default Macaron;