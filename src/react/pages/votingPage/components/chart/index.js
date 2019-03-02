import React, { Component } from 'react';
import ColumnChart from "react-google-charts";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { prepareChartData, getTotalVotes } from '../../helpers';
import styles from './styles.css';

class Chart extends Component {
    render(){
        let {question, chartData, totalVotes} = this.props;
        return (
            <div className='chartComponent'>
                <h4>{question}</h4>
                <ColumnChart
                    chartType="ColumnChart"
                    width="100%"
                    height="400px"
                    data={chartData}
                />
                <div>Total votes: {totalVotes}</div>
            </div>
        )
    }
}

Chart.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
