import React, { useState } from 'react';

function InputSample() {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);       {/* 이벤트가 일어났을때, 이벤트안에있는 e.target은 돔에대한 정보를 가지고있음. 따라서 console.log(e.target.value);는 인풋창에 입력한 정보를 가지게되고 이를 콘솔에 출력하게됨*/}
    }
    
    const onReset = () => {
        setText('');
    }
    return (
        <div>
            <input onChange={onChange} value={text} />   
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:</b>
                {text}
            </div>
        </div>
    );
}

export default InputSample;