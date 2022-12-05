import React from 'react'

class Item extends React.Component {
    render() {
        return (
            <div className="item" key={this.props.data.id}>
                {
                    (Object.values(this.props.data)).map(val => { 
                        return <p>{val}</p>
                    })
                }
            </div>
        );
    }
    }

export default Item;
