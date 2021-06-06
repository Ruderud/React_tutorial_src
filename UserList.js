import React from 'react';

function User({ user, onRemove }) {
    const {username, email, id} = user;
    return (
        <div>
                <b>{user.username}</b><span>({user.email})</span>
                <button onClick={() => onRemove(id)}>삭제</button>  
                {/* 절대 <button onClick={onRemove(id)}>삭제</button> 이런식으로 함수를 호출하지말고, 함수를 만들어서 써야한다! 
                (호출하는방식이면 삭제를 누르면 랜더링되면서 리스트 전부가 지워져버림)*/}
        </div>
    );
}

function UserList({ users, onRemove }) {
    return(
        <div>
        {
            users.map(
                user => (<User user={user} key={user.id} onRemove={onRemove}/>)
            ) 
        }       {/* 각 객체의 키값을 특정할수있는 key(여기서는 id)가 따로 정해져있지 않다면, index값을 가져와서 사용한다. -> 다만 효율적인 상승은 기대할 수 없음
                 (user, index) => (<User user={user} key={index}/>) */}
        </div>
    );

}
export default UserList;