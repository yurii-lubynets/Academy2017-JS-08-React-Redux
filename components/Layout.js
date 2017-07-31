import React, {Component}  from 'react';
import UserAdd from './UserAdd';
import FilterComponent from './FilterComponent';
import UserList from './UserList';


export default class Layout extends Component {
    render() {
        return (
            <div>
                <h1>List of Users</h1>
                <div>
                    <div>
                        <h4>Add new user</h4>
                        <UserAdd/>
                    </div>
                    <div>
                        <h4>Search user</h4>
                        <FilterComponent/>                        
                    </div>
                    <div>
                        <h4>UserList</h4>
                        <UserList/>
                    </div>
                </div>
            </div>
        )
    }
}


