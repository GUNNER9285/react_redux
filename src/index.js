// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// //npm install -g redux --save

import {createStore, combineReducers} from "redux";

const initialState = {
    salary: 15000,
    length: []
};

const employeeReducer = (state = {name:"Gun", age:23}, action) => {
    switch (action.type) {
        case "setName":
            state = {
                ...state,
                name: action.payload
            }
            break;
        case "setAge":
            state = {
                ...state,
                age: action.payload
            }
            break;
        default:
    }
    return state;
};

const salaryReducer = (state=initialState, action) => {
    switch (action.type) {
        case "show":
            state = {
                ...state, // space operator
                salary: state.salary += action.payload,
                length: [...state.length, action.payload]
                // salary: state.salary,
                // length: state.length
            };
            break;
        default:
    }
    return state;
};

const store = createStore(combineReducers({salaryReducer, employeeReducer}));

store.subscribe(() => {
    console.log("Update Store :", store.getState());
});

store.dispatch({
    type: "show",
    payload: 12000
});

store.dispatch({
    type: "show",
    payload: 13000
});

store.dispatch({
    type: "setName",
    payload: "Kran"
});

store.dispatch({
    type: "setAge",
    payload: 18
});