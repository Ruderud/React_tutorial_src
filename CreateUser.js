import React, { useRef, useContext } from 'react';
import { UserDispatch } from './App';   // (A) useContext로 가져올 UserDispatch값을 App.js로부터 가져왔음
import useInputs from './useInputs';    // (B) useInputs에서 [form, onChange, reset] 형태로 입력된 값을 받아옴

const CreateUser = () => {
    //usercontect이용해서 dispatch 가져오기, App에서 createUserAction도 여기서 dispatch
    //nextId도 여기서 관리
    //input은 useInput을 가져와서 사용하기

    const [{ username, email}, onChange, reset] = useInputs({
        username: '',
        email: '',
        });
    const nextid = useRef(4);
    const dispatch = useContext(UserDispatch);       // (A) useContext를 통해서 App.js의 dispatch값을 받아옴

    const onCreate = () => {
        dispatch({                          // (A) 가져온 dispatch값을 onChange에 할당.
            type: 'CREATE_USER',
            user: {
              id: nextid.current,
              username,
              email
            }
          });
          reset();
          nextid.current += 1;
        };


    return (
        <div>
            <input 
            name="username" 
            placeholder="계정명" 
            onChange={onChange}
            value={username}
            />

            <input 
            name="email" 
            placeholder="이메일" 
            onChange={onChange} 
            value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
};

export default React.memo(CreateUser);