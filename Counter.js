// import React, {useState} from 'react';

// function Counter() {
//     const [number, setNumber] = useState(0); {/*배열 비구조할당을 통해서 이런형태로 만든것 
//                                                 setNumber이라는 함수는 상태를 바꾸는 함수의 역할, number는 그 변한값을 저장하는 역할*/}

//     const onIncrease = () => {
//         setNumber(preNumber => preNumber +1);
//         {/* setNumber(number+1);와 동일한 효과를 가지는 함수형 컴포넌트이다. 최적화할때 좋음 */}
//     }
//     const onDecrease = () => {
//         setNumber(number-1);
//     }
//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>    {/* 여기서 함수를 호출해넣으면 안된다! 클릭할때 이함수를 호출하고싶은거지, 처음 랜더링할때호출하는 목적이 아니기 때문 */}
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     )
// }   
// export default Counter;
//usestate를 이용한 구현

// import React, { useReducer } from 'react';

// function reducer(state, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             throw new Error('Unhanded action');
//     }
// }

// function Counter() {
//     const [number, dispatch] = useReducer(reducer, 0);

//     const onIncrease = () => {
//         dispatch({
//             type : 'INCREMENT'
//         })
//     };
//     const onDecrease = () => {
//         dispatch({
//             type : 'DECREMENT'
//         })
//     }
//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>    {/* 여기서 함수를 호출해넣으면 안된다! 클릭할때 이함수를 호출하고싶은거지, 처음 랜더링할때호출하는 목적이 아니기 때문 */}
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     )
// }

import React, { Component } from 'react';

class Counter extends Component {
    //커스텀메서드 -> 함수를 만드는것

    constructor(props) {    //1.일반적인 방법
        super(props);
        this.state = {      //객체형태로만 가져와야함
            counter:0,
            fixed: 1
        };
    }

    handleIncrease = () => {
        //console.log(this) //undefined 출력 -> 클릭해서 이 메서드를 시작했을때는 this가 사라지기 때문 -> constructor를 통해서 props를 배정해주자 출력
        
        // this.setState({
        //     counter: this.state.counter + 1
        // });
        this.setState(state => ({
            counter: state.counter +1
        }));
        this.setState(state => ({
            counter: state.counter +1
        }));
        this.setState(state => ({
            counter: state.counter +1
        }));
        this.setState(state => ({
            counter: state.counter +1
        }));                                    //여기서는 4씩 증가
    }
    handleDecrease = () => { //2.이렇게 화살표함수를 사용해서 내부에서 this를 가져오게함
        this.setState({
            counter: this.state.counter - 1
        });
        this.setState({
            counter: this.state.counter - 1
        });
        this.setState({
            counter: this.state.counter - 1
        });
        this.setState({
            counter: this.state.counter - 1
        });                                     //여기서는 -1씩 감소 => 이차이는 this."state".counter에서 state가 단지 현재상태만을 가져다 반영시키는것이 아니라,
                                                //해당 목표의 상태로 바꿔주는 특성을 가지고있기 때문임. 
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값:{this.state.fixed} </p>
            </div>
        )
    }
}




export default Counter;