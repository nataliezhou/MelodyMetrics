import React from 'react'

class Item extends React.Component {
    render() {
        return (
            <div className="item" key={this.props.data.id}>
                {
                    (Object.keys(this.props.data)).map(key => { 
                        if (key != 'id')
                            return <p>{this.props.data[key]}</p>
                    })
                }
            </div>
        );
    }
    }

export default Item;