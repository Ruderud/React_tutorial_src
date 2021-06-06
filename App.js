import React, {useRef, useState} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email} = inputs
  const onChange = e => {
    const { name, value } = e.target; 
    setInputs({
      ...inputs,
      [name]:value
    });
  };

  const [users, setUsers] = useState([
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
]); {/* 이때 이 배열에 대해서 splice, sort, push같은함수는 사용하면안된다! 꼭 사용하고싶다면 배열을 복사해서 사용해야함 -> 배열의 불변성을 위함 */}

  const nextId = useRef(5);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    //setUsers([...users, user]); //기존배열은 건드리지않으면서 ...users로 이전배열들을 가져오고 그 뒤에 새로 추가된 user 프로퍼티를 추가함
    setUsers(users.concat(user)); //또는 이방법대신 concat을 사용할수있음.

    setInputs({
      username: '',
      email: ''
    });
    console.log(nextId.current); //4가 나타나게될것.
    nextId.current += 1;  //넥스트아이디값을 마지막에 사용한다음 +1을 시킴 -> 자동으로 다음에 사용할 넥스트아이디값을 갱신시키는 용도
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id)); //기존 user리스트를 받아와서 그내부의 id값이입력한 id값과 다르면놔두고, id와 같은거면 지워서 그 프로퍼티들을 배열로 만들어 반환한다.
  };
  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove}/>
    </>
  )
}

export default App;
