import React, {Component}  from 'react';

export default class UserRow extends Component {
    render() {
        let id = this.props.value.id;
        return (
            <li>
                <span>{this.props.value.id}</span>
                <span>{this.props.value.name}</span>
                <span><button type="button" onClick={() => this.props.deleteUser(id)}>X</button></span>
            </li>
        )
    }
}


