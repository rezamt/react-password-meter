import React, {Component} from 'react';
import {Panel, ProgressBar} from 'react-bootstrap';
import classNames from 'classnames';

export default class PasswordMeter extends Component {

    render() {
        return (
            <Panel>
                <PrinciplesProgress {...this.props} />
                <h5>A good password is:</h5>
                <PrincipleList {...this.props} />
            </Panel>
        );
    }

}

class PrinciplesProgress extends React.Component {
    satisfiedPercent() {
        let {principles, password} = this.props;
        let satisfiedCount = principles.map(p => p.predicate(password)).reduce((count, satisfied) =>
            count + (satisfied ? 1 : 0)
            , 0);
        let principlesCount = principles.length;
        return (satisfiedCount / principlesCount) * 100.0;
    }

    progressColor() {
        let percentage = this.satisfiedPercent();
        return classNames({
            danger: (percentage < 33.4),
            success: (percentage >= 66.7),
            warning: (percentage >= 33.4 && percentage < 66.7)
        });
    }

    render() {
        return (<ProgressBar now={this.satisfiedPercent()}
                             bsStyle={this.progressColor()}/>);
    }
}

class PrincipleList extends Component {

    principleSatisfied(principle) {
        return principle.predicate(this.props.password);
    }

    principleClass(principle) {
        let satisfied = this.principleSatisfied(principle);

        return classNames({
                ["text-success"]: satisfied,
                ["text-danger"]: !satisfied
            }
        );
    }


    render() {
        let {principles} = this.props;

        return ( <ul>
            { principles.map(principle =>
                <li className={this.principleClass(principle)}>
                    <small>
                        {principle.label}
                    </small>
                </li>
            )}
        </ul> );
    }
}
