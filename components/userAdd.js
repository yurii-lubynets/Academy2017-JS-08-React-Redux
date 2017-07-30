import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateField, createUser} from './actions/userActions';

class userAdd extends Component {
    handleSubmit(event) {
        event.preventDefault();
        this.props.createUser();
    };
    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input type="text" placeholder="Input UserName"
                           onChange={(event) => this.props.updateField({value: event.target.value, field: 'name'})} value = {this.props.name} />
                    <input type="number" placeholder=""
                           onChange={(event) => this.props.updateField({value: event.target.value, field: 'id'})} value = {this.props.id}/>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        name:state.users.name,
        id:state.users.id
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        updateField: bindActionCreators(updateField, dispatch),
        createUser: bindActionCreators(createUser, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(userAdd);