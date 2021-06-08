import React, {useRef, useReducer, useMemo, useCallback, createContext } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';
import useInputs from './useInputs'

function countActiveUsers(users) {
  console.log('활성 사용자수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = { 
  // inputs: {  
  //   username: '',
  //   email: '',
  // },   -> useInput컴포넌트의 hook을 사용하므로 놔둘필요가 없음
  users: [
    {
        id: 1,
        username: '페코린느',
        email: 'pecopeco@cygames.com',
        active: true,
    },
    {
        id: 2,
        username: '콧코로',
        email: 'kokkoro@cygames.com',
        active: false,
    },
    {
        id: 3,
        username: '캬루',
        email: 'imTraitor@cygames.com',
        active: false,
    }, 
   
  ]};

function reducer(state, action) {
  switch (action.type) {
    // case 'CHANGE_INPUT':
    //   return {
    //     ...state,
    //     inputs: {
    //       ...state.inputs,
    //       [action.name]: action.value
    //     }
    //   };     -> useInput컴포넌트의 hook을 사용하므로 case를 놔둘필요가 없음
    case 'CREATE_USER' :
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER' :
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id 
            ? {...user, active: !user.active}
            : user
            )
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id) //일치하면 삭제, 불일치시 유지
      };
    default:
      throw new Error('Unhanded action');
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, onChange, reset] = useInputs({
    username: '',
    email: '',
  });
  const { username, email} = form;
  const nextid = useRef(4);
  const { users } = state;
  // const { username, email } = state.inputs;

  // const onChange = useCallback(e => {
  //   const { name, value } = e.target;
  //   dispatch({
  //     type: 'CHANGE_INPUT',
  //     name,
  //     value
  //   })
  // }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextid.current,
        username,
        email,
      }
    })
    nextid.current += 1;
    reset();
  }, [username, email, reset])

  // const onToggle = useCallback(id => {
  //   dispatch({
  //     type: 'TOGGLE_USER',
  //     id
  //   });
  // }, []);

  // const onRemove = useCallback(id => {
  //   dispatch({
  //     type: 'REMOVE_USER',
  //     id
  //   });
  // }, []);          -> onToggle과 onRemove를 userDispatch context를 통해서 UserList에서 직접 사용할 것이므로 주석처리

  const count = useMemo(() => countActiveUsers(users), [users])

  return (
    <UserDispatch.Provider value={dispatch}>

      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList 
        users={users}
        // onToggle={onToggle}
        // onRemove={onRemove} -> onToggle과 onRemove를 userDispatch context를 통해서 UserList에서 직접 사용할 것이므로 주석처리
      />
      <div>활성 사용자 수: {count}</div>

    </UserDispatch.Provider>
  )
}

export default App;
