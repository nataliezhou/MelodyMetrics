import React from 'react'

/* function Item(post) {
    return <div className="item" key={post.id}>
    <p>{post.item}</p>
    console.log(post.item)
    <p>{post.color}</p>
    <p>{post.location}</p>  
    <p>{post.datetime}</p>
  </div>
} */

class Item extends React.Component {
    render() {
        return (
            <div className="item" key={this.props.data.id}>
            <p>{this.props.data.item}</p>
            <p>{this.props.data.color}</p>
            <p>{this.props.data.location}</p>  
            <p>{this.props.data.datetime}</p>
            </div>
        );
    }
    }

export default Item;