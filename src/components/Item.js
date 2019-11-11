import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Item extends Component {

    render() {
        return (
            <div >
                <p style = {{color: 'white'}}>
                    <input type="checkbox"/> {' '}
                    {this.props.item.name}
                </p>
                <hr/>
            </div>
        )
    }
}

export default Item;
