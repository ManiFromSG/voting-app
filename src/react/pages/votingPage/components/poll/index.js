import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { castVote } from '../../actions';
import styles from './styles.css';

class Poll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
        this.addPollOptionRow = this.addPollOptionRow.bind(this);
        this.handleOptionSelected = this.handleOptionSelected.bind(this);
        this.handleCastVote = this.handleCastVote.bind(this);
    }
    componentWillReceiveProps(){
        this.setState({selected: null});
    }
    handleOptionSelected(event) {
        let selectedOption = parseInt(event.target.value);
        this.setState({selected: selectedOption});
    }

    handleCastVote() {
        this.props.castVote(this.state.selected);
        this.setState({selected: null});
    }
    addPollOptionRow(option, index) {
        let {selected} = this.state;
        return (
            <div className='optionRow' key={index}>
                <input type='radio' id={index} name='pollOption' value={index}
                    checked={selected === index} onChange={this.handleOptionSelected} />
                <label className='optionLabel'>{option.value}</label>
            </div>
        )
    }

    render() {
        let {question, options} = this.props;
        let {selected} = this.state;
        return (
            <div className='pollComponent'>
                <h4>{question}</h4>
                <div className='optionsWrap'>
                    {options.map(this.addPollOptionRow)}
                </div>
                <button disabled={isNaN(selected) || selected === null} className='voteButton' onClick={this.handleCastVote}>Vote</button>
            </div>
        )
    }
}

Poll.propTypes = {
    question: PropTypes.string,
    options: PropTypes.array,
    castVote: PropTypes.func
}
const mapStateToProps = ({voting}, ownProps) => {
    return {
        question: voting.question,
        options: voting.listOfOptions
    }
}

const mapDispatchToProps = {
    castVote
};

export default connect(mapStateToProps, mapDispatchToProps) (Poll);
