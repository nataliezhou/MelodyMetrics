import React from 'react'
import PostCompose from './PostCompose.js';

function Button(props) {
    return <button id="postButton" onClick = {PostCompose}>{props.name}</button>
}
 
export default Button;