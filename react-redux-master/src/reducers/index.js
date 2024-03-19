import {combineReducers} from 'redux'

const counter = (state=0, action) => { // Remember reducer takes two parameters, previous app state and action. Then returns new app state.
    if (action.type === 'INCREMENT') {
        return state+action.inc; //This will increase the value of counter by the value passed to the increment method
    }
    return state; //Returns the current value of the counter
}

const myReducers = combineReducers({counter});

export default myReducers;

// Now you have your action and reducers.
// What is left to be created is the store. Before you create the store you will create the components.
