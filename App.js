import React, { useReducer, useMemo, createContext } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';
import produce from 'immer'

function countActiveUsers(users) {
  console.log('활성 사용자수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = { 
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
    case 'CREATE_USER' :
      return produce(state, draft => {
        draft.users.push(action.user);
      });
      // return {
      //   users: state.users.concat(action.user)
      // };
    case 'TOGGLE_USER' :
      return produce(state, draft => {                                //immer을 이용하여 기존 코드를 더 간단하게
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
      // return {                                                     // native reducer
      //   ...state,
      //   users: state.users.map(user =>
      //     user.id === action.id 
      //       ? {...user, active: !user.active}
      //       : user
      //   )
      // };
    case 'REMOVE_USER':
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index, 1);
      });
      // return {
      //   ...state,
      //   users: state.users.filter(user => user.id !== action.id)
      // };
    default:
      return state;
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
   
  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users])

  return (
    <UserDispatch.Provider value={dispatch}>

      <CreateUser />
      <UserList 
        users={users}
      />
      <div>활성 사용자 수: {count}</div>

    </UserDispatch.Provider>
  )
}

export default App;
