import {combineReducers} from 'redux'

const counter = (state=0, action) => {
    if (action.type === 'INCREMENT') {
        return state+action.inc; //This will increase the value of counter by the value passed to the increment method
    }
    return state; //Returns the current value of the counter
}

const myReducers = combineReducers({counter});

export default myReducers;