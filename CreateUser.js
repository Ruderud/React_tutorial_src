import React from 'react';

function CreateUser({ username, email, onChange, onCreate}) {
    return (
        <div>
            <input name="username" placeholder="계정명" onChange={onChange} value={username}/>
            <input name="email" placeholder="이메일" onChange={onChange} value={email}/>
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default React.memo(CreateUser);  //이렇게 export처리시, Props가 바뀔때에만 랜더링시작함.