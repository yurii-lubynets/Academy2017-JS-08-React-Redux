import React, {Component}  from 'react';
import userAdd from './userAdd';
import userList from './userList';
import FilterComponent from './FilterComponent';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <h1>List of Users</h1>
                <div>
                    <div>
                        <h4>Add new user</h4>
                        <userAdd/>
                    </div>
                    <div>
                        <h4>Search user</h4>
                        <FilterComponent/>                        
                    </div>
                    <div>
                        <h4>UserList</h4>
                        <userList/>
                    </div>
                </div>
            </div>
        )
    }
}


