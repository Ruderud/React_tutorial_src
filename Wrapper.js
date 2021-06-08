import React from 'react';

function Wrapper({children}) {//감싸주는 내용
    const style = {
        border: '2px solid black',
        padding: 60
    };

    return <div style={style}>{children}</div>
}

export default Wrapper;