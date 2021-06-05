import React, {useState} from 'react';

function Counter() {
    const [number, setNumber] = useState(0); {/*배열 비구조할당을 통해서 이런형태로 만든것 
                                                setNumber이라는 함수는 상태를 바꾸는 함수의 역할, number는 그 변한값을 저장하는 역할*/}

    const onIncrease = () => {
        setNumber(preNumber => preNumber +1);
        {/* setNumber(number+1);와 동일한 효과를 가지는 함수형 컴포넌트이다. 최적화할때 좋음 */}
    }
    const onDecrease = () => {
        setNumber(number-1);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>    {/* 여기서 함수를 호출해넣으면 안된다! 클릭할때 이함수를 호출하고싶은거지, 처음 랜더링할때호출하는 목적이 아니기 때문 */}
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;