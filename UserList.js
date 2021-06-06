import React from 'react';

function User({ user }) {
    return (
        <div>
                <b>{user.username}</b><span>({user.email})</span>
        </div>
    );
}

function UserList({ users }) {
    return(
        <div>
        {
            users.map(
                user => (<User user={user} key={user.id} />)
            ) 
        }       {/* 각 객체의 키값을 특정할수있는 key(여기서는 id)가 따로 정해져있지 않다면, index값을 가져와서 사용한다. -> 다만 효율적인 상승은 기대할 수 없음
                 (user, index) => (<User user={user} key={index}/>) */}
        </div>
    );

}
export default UserList;