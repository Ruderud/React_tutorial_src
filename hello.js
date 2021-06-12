import React, { Component } from 'react';

class Hello extends Component {
    static defaultProps = {
        name: "이름없음",
    }
    render() {
        const { color, isSpecial, name } = this.props;
        return ( 
            <div style={{ color }}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        );
    }
}

// function Hello({ color, name, isSpecial }) {      //컴포넌트 생성
//     return (
//     <div style={{
//         color
//     }}>
//         {isSpecial ? '*스페셜!' : '낫스페셜'}   {/* isSpecial값의 참 거짓에 따라 앞글자에 별을 붙여주는기능 - 사망연산자를 이용
//                                          {isSpecial && <b>*</b> } 을 사용해도 동일(이는 and연산자 사용) */}
//         ㅎㅇ요 {name}
//     </div>
//     );
// }

// Hello.defaultProps = {  //해당요소에 입력되어있지 않은 내용을 default값으로 지정
//     name: '이름없음'
// };

export default Hello;