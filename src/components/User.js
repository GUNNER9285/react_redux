import React, {Component} from 'react';

class User extends Component {
    render() {
        return (
            <div>
                <h1>Hello Redux</h1>
                <h2>{this.props.username}</h2>
            </div>
        );
    };
}
export default User;