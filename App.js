import React, {useRef, useState, useMemo, useCallback } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function countActiveUsers(users) {
  console.log('활성 사용자수를 세는중...');   //useMemo를 사용하기전에는 실제로 user에 등록하지않고 input창에만 값을 타이핑하고있는 그순간마다 랜더링하며 연산을 하게된다.
  return users.filter(user => user.active).length;
}
function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email} = inputs

  const onChange = useCallback( e => {
    const { name, value } = e.target; 
    setInputs({
      ...inputs,
      [name]:value
    });
  }, [inputs]);

  const [users, setUsers] = useState([
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
    {
      id: 4,
      username: '복제된 캬루',
      email: 'imTraitor@cygames.com',
      active: false,
  }, 
]); {/* 이때 이 배열에 대해서 splice, sort, push같은함수는 사용하면안된다! 꼭 사용하고싶다면 배열을 복사해서 사용해야함 -> 배열의 불변성을 위함 */}

  const nextId = useRef(5);

  const onCreate = useCallback(() => {
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
  }, [username, email, users]);

  const onRemove = useCallback( id => {
    setUsers(users.filter(user => user.id !== id)); //기존 user리스트를 받아와서 그내부의 id값이입력한 id값과 다르면놔두고, id와 같은거면 지워서 그 프로퍼티들을 배열로 만들어 반환한다.
  }, [users]);

  const onToggle = useCallback( id => {
    setUsers(users.map(
      user => user.id === id 
        ? {...user, active: !user.active} //기존값을 먼저 가져오고, 그중에 바꿔줄값을 함수에따라 덮어씌우는 방식으로 사용한다.
        : user
    ));
  }, [users]);

  const count = useMemo(() => countActiveUsers(users), [users]);  //useMemo를 통해서 input에 데이터를 입력할때마다 해당 값을 매번계산하지않고 그냥 값을 불러와서 사용함.

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성 사용자 수: {count}</div>
    </>
  )
}

export default App;
