import React, {useRef} from 'react';
import UserList from './UserList';

function App() {
  const users = [
    {
        id: 1,
        username: '페코린느',
        email: 'pecopeco@cygames.com',
    },
    {
        id: 2,
        username: '콧코로',
        email: 'kokkoro@cygames.com',
    },
    {
        id: 3,
        username: '캬루',
        email: 'imTraitor@cygames.com',
    }, 
    {
      id: 4,
      username: '복제된 캬루',
      email: 'imTraitor@cygames.com',
  }, 
];

  const nextId = useRef(4);

  const onCreate = () => {

    console.log(nextId.current); //4가 나타나게될것.
    nextId.current += 1;  //넥스트아이디값을 마지막에 사용한다음 +1을 시킴 -> 자동으로 다음에 사용할 넥스트아이디값을 갱신시키는 용도
  }

  return (
    <UserList users={users}/>
  )
}

export default App;
