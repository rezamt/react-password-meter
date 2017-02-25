import React, {Component} from 'react';
import logo from './logo.svg';
// import {Button, ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap';
import './App.css';
import PasswordInput from './PasswordInput';
import {Form} from 'react-bootstrap';


class App extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>Welcome to React</h2>
                    </div>
                    <br/>
                </div>
                <div className="dev-box">
                    <Form componentClass="fieldset" horizontal>
                        <PasswordInput />
                    </Form>
                </div>
            </div>
        );
    }

    onClickButton() {
        console.log('On click has been pressed.');
    }
}

export default App;
