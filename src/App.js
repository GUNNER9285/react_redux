import React, {Component} from 'react';
import User from './components/User'
import {connect} from "react-redux";

class App extends Component{
    render() {
        return (
            <div>
                <User username={this.props.employee.name}/>
                <button onClick={() => this.props.setName("GUNNER")}> change name </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
     return {
         salary: state.salary,
         employee: state.employee
     };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: "setName",
                payload: name
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
