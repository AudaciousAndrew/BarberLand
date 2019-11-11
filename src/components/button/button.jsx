import React from 'react';

function Button(props){
    return <>
        <a href="#" className="btn btn--white btn--animated">{props.text}</a>
    </>
}

export default Button;