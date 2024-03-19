import React from 'react'
import { useDispatch} from 'react-redux'
import increment from '../action'

const MyButton = ()=> {
    let dispatch = useDispatch();
    return (
        <button onClick={()=>dispatch(increment(1))}>Increase this counter!</button>
    );
}

export default MyButton;

// 'useDispatch' dispatches the event to the store and finds out what action is to be taken 
// and uses the appropriate reducer to do the same.
