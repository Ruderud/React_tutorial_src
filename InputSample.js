import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name : '',
        nickname: '',
    });

    const nameInput = useRef();

    const {name, nickname} = inputs;        {/*비구조화 할당을 사용 */}

    const onChange = (e) => {
        const {name, value} = e.target;
        
        setInputs({
            ...inputs,
            [name]: value,
        });                                  {/* [name]값에따라 value값을 맞춰서 가져옴 => input value의 불변성을 지켜줌. 
                                                객체상태를 업데이트할떄는 '...'을 사용하는 스프레드문법을 이용해서 값을 복사해서 상태를 업데이트 해줘야한다.*/}
    };
    
    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();
    };                                  {/* 이 nameInput.current가 DOM을 가르킨다 */}

    return (
        <div>
            <input 
                name='name' 
                placeholder="이름" 
                onChange={onChange} 
                value={name}
                ref={nameInput}
            />                          {/* 위의 nameInput.current.focus();를 통해, onReset함수 실행시 이름인풋창을 자동으로 선택하게된다. */}
            <input 
                name='nickname' 
                placeholder="닉네임" 
                onChange={onChange} 
                value={nickname}
            />  
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:</b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;