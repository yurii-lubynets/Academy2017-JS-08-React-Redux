import React, {Component} from 'react';
import ElementList from './ElementList';
import {connect} from 'react-redux';
import {deleteUser} from './actions/userActions';
import {bindActionCreators} from 'redux';

class UserList extends Component {
    render() {
        let listItems = this.props.users.filter((el) => {return el.name.includes(this.props.query)});
        return (
            <div>
                <ul>
                    {listItems.map((el, id) => {return <ElementList key={id} value={el} deleteUser={this.props.deleteUser}/>})}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        query: state.users.query
    }
};
const mapDispatchToProps = (dispatch) => {
    return {deleteUser: bindActionCreators(deleteUser, dispatch)}
};
export default connect(mapStateToProps, mapDispatchToProps)(UserList);