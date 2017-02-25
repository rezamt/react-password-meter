import React, {Component} from 'react';
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

export default class PasswordField extends Component {
    constructor(props) {
        super(props);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.getValidationState = this.getValidationState.bind(this);
    }

    handlePasswordChange(ev) {
        let {onPasswordChange} = this.props;
        onPasswordChange(ev.target.value);
    }

    satisfiedPercent() {
        let {principles, password} = this.props;
        let satisfiedCount = principles.map(p => p.predicate(password)).reduce((count, satisfied) =>
            count + (satisfied ? 1 : 0)
            , 0);
        let principlesCount = principles.length;
        return (satisfiedCount / principlesCount) * 100.0;
    }

    getValidationState() {
        let percentage = this.satisfiedPercent();

        if (percentage < 33.4) return 'error';
        else if (percentage >= 66.7) return 'success';
        else if (percentage >= 33.4 && percentage < 66.7) return 'warning';
    }

    render() {
        let {password} = this.props;

        return (
            <FormGroup validationState={this.getValidationState()}>
                <ControlLabel>Password</ControlLabel>
                <FormControl
                    type='password'
                    label='Password'
                    placeholder="Enter Password"
                    value={password}
                    onChange={this.handlePasswordChange}
                />
                <FormControl.Feedback />
            </FormGroup>
        )
            ;
    }
}

