import React, { useContext } from 'react';
import { UserDispatch } from './App'

const User = React.memo( function User ({ user/*, onRemove, onToggle -> UserDispatch로 이동 */}) {
    const {username, email, id, active} = user;
    const dispatch = useContext(UserDispatch); 

    // useEffect(() => {
    //     console.log('유저값이 설정됨');
    //     console.log(user);
    //     return () => {                      //뒷정리함수
    //         console.log('유저값이 바뀌기전');
    //         console.log(user);
    //     }
    // }, [user]); //useEffect에서 사용하는 데이터값을 여기 끝(depth배열)에 리스트로 넣어줘야만 최신값을 가르키게할 수 있음. 함수도 마찬가지임. 
                //값을 할당하지않으면 user단에서 리랜더링되지않고 부모단인 user list 단에서 렌더링이 적용되기때문에, 리스트 내용 전부가 리랜더링된다. (속도저하의 요인) -> 컴포넌트 리랜더링 최적화

    // useEffect(() => {
    //     console.log('컴포넌트가 화면에 나타남'); // 데이터를 등록하면 해당 문구가 콘솔창에 나타남
    //     // props -> stare, REST API, D3 Video.js, setInterval, setTimeout등의 작업가능
    //     return () => {
    //         console.log('컴포넌트가 화면에서 사라짐'); // 데이터를 삭제하면 해당 문구가 콘솔창에 나타남
    //         // setInterval, setTimeout의 작업을 끝낼때 -> 즉 clearInterval/Timeout을 사용할때, 라이브러리 인스턴스 제거
    //     }
    // }, []);

    return (
        <div>
                <b 
                    style={{
                    color: active ? 'green' : 'black',
                    cursor: 'pointer'
                }}
                    onClick={() => dispatch ({
                       type: 'TOGGLE_USER',
                       id
                    })}
                >
                    {username}
                </b>
                &nbsp;
                <span>({email})</span>
                <button onClick={() => dispatch ({
                    type: 'REMOVE_USER',
                    id
                })}>삭제</button>  
                {/* 절대 <button onClick={onRemove(id)}>삭제</button> 이런식으로 함수를 호출하지말고, 함수를 만들어서 써야한다! 
                (호출하는방식이면 삭제를 누르면 랜더링되면서 리스트 전부가 지워져버림)*/}
        </div>
    );
});

function UserList({ users /*, onRemove, onToggle -> UserDispatch로 이동 */ }) { 
    return(
        <div>
        {users.map(
            (user) => (
                <User 
                    user={user} 
                    key={user.id} 
                    // onRemove={onRemove}  -> UserDispatch로 이동
                    // onToggle={onToggle} 
                />
                )
            )
        }       {/* 각 객체의 키값을 특정할수있는 key(여기서는 id)가 따로 정해져있지 않다면, index값을 가져와서 사용한다. -> 다만 효율적인 상승은 기대할 수 없음
                 (user, index) => (<User user={user} key={index}/>) */}
        </div>
    );

}

export default React.memo(
    UserList, (preProps, nextProps) => nextProps.users === preProps.users); 
    //이런식으로 처리하면 프롭스의 전과 후를 비교하여 같으면 (true) 리랜더링x, 다르면(false) 리랜더링o하게한다.
    //이렇게 쓸거면 적용할 요소내의 값이 바뀌는지 안바뀌는값인지 꼭 확인을 해줘야함.