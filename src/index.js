import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux";

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

const myLogger = (store) => (next) => (action) => {
    console.log("Log Action :", action);
    next(action);
};
const store = createStore(combineReducers({salary:salaryReducer, employee:employeeReducer}), {}, applyMiddleware(myLogger));

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

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);