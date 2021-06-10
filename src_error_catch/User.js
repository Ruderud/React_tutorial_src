import React from 'react';

function User({ user }) {
    // if (!user) return null;  -> 이렇게 처리해두면 에러는 발생하지않지만, 아무런화면이 안뜸

  return (
        <div>
            <div>
                <b>ID</b>: {user.id}
            </div>
            <div>
                <b>Username</b>: {user.username}
            </div>
        </div>
    );
}

export default User;