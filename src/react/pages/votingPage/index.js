import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Questionnaire from './components/questionnaire';
import Poll from './components/poll';
import Chart from './components/chart';

import { prepareChartData, getTotalVotes } from './helpers';

import styles from './styles.css';

class VotingPage extends Component {
    render() {
        let {question, chartData, totalVotes} = this.props;
        return (
            <div className='container'>
                <div className={classnames('headerWrap')}><h4>Sir Vote-a-Lot</h4></div>
                <div className={classnames('bodyWrap')}>
                    <div className={classnames('questionnarieWrap')}><Questionnaire /></div>
                    <div className={classnames('pollWrap')}><Poll /></div>
                    <div className={classnames('chartWrap')}>
                        <Chart question={question} chartData={chartData} totalVotes={totalVotes} />
                    </div>
                </div>
            </div>
        )
    }
}

VotingPage.propTypes = {
    question: PropTypes.string,
    chartData: PropTypes.array,
    totalVotes: PropTypes.number
}
const mapStateToProps = ({voting}, ownProps) => {
    return {
        question: voting.question,
        chartData: prepareChartData(voting.listOfOptions),
        totalVotes: getTotalVotes(voting.listOfOptions)
    };
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(VotingPage);