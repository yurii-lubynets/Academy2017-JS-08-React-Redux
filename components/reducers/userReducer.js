const initialState = {
    users: [],
    name: '',
    id: '',
    query:''
};

let id = 0;

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'CREATE_USER': {
            let newState = {};
            let userArray = state.users.slice();
            userArray.push({name: state.name, id: id++});
            return Object.assign({}, state, {users: userArray, name:'', id:''});
        }
        case 'DELETE_USER': {
            let userArray = state.users.slice();
            let userId = null;
            state.users.map((el, index) => {(el.id === action.id) ? userId = index : null;});
            userArray.splice(userId, 1);
            let updatedState = {users: userArray};
            return Object.assign({}, state, updatedState);
        }
        case 'UPDATE_FIELD': {
            let newState = {};
            newState = Object.assign({}, state); 
            newState[action.data.field] = action.data.value;
            return newState;
        }
        case 'FILTER_USERS': {
            let newState = {};
            newState = Object.assign({}, state); 
            newState.query = action.query;
            return newState;
        }
        default:
            return state;
    }
}