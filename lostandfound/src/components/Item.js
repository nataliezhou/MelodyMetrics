import React from 'react'

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