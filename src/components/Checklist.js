import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

class CheckList extends React.Component{
    render() {
        return this.props.list.map(item => {
            return <Item key = {item.itemId} item = { item }/>
        });
    }
}

export default CheckList;
