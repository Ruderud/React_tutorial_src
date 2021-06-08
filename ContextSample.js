import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext('defaultValue'); //여기의 defaultValue는 MyContext.Provider에서 값이 입력되어있지 않을때 보여주는 기본값. 

function Child () {
    const text = useContext(MyContext); //useContext는 리액트 내장함수로써, ()에 들어있는 텍스트값을 가져오는 기능이있음
    return <div>하이요 {text}</div> //여기의 text="GOOD"은 GP -> P -> C 순서로 받아오고있음. Context를 이용해서 GP->C로 받아오게해보자.
}

function Parent({ text }) {
    return <Child />
}

function GrandParent({ text }) {
    return <Parent />
}

function ContextSample() {
    const [value, setValue] = useState(true);
    return (
    <MyContext.Provider value={ value ? "GOOD" : "BAD" }>
    <GrandParent />
    <button onClick={() => setValue(!value)}>기분이바뀌는버튼</button>
    </MyContext.Provider>
    )
}

export default ContextSample;