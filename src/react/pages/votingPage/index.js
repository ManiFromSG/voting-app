import React, { Component } from 'react';
import classnames from 'classnames';

import Questionnaire from './components/questionnaire';
import Poll from './components/poll';
import Chart from './components/chart';

import styles from './styles.css';

class VotingPage extends Component {
    render() {
        return (
            <div className='container'>
                <div className={classnames('headerWrap')}><h4>Sir Vote-a-Lot</h4></div>
                <div className={classnames('bodyWrap')}>
                    <div className={classnames('questionnarieWrap')}><Questionnaire /></div>
                    <div className={classnames('pollWrap')}><Poll /></div>
                    <div className={classnames('chartWrap')}><Chart /></div>
                </div>
            </div>
        )
    }
}

export default VotingPage;
