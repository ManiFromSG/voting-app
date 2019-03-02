import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { changeQuestion, addNewOption, deleteOption, resetQuestionnaire } from '../../actions';
import styles from './styles.css';

class Questionnaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: props.question,
            canEdit: !props.question,
            newOption: '',
            resetCount: 0
        };

       this.onQuestionChange = this.onQuestionChange.bind(this);
       this.handleEditQuestionClick = this.handleEditQuestionClick.bind(this);
       this.handleSaveQuestionClick = this.handleSaveQuestionClick.bind(this);

       this.addOptionRow = this.addOptionRow.bind(this);
       this.onNewOptionChange = this.onNewOptionChange.bind(this);
       this.handleNewOptionAdd = this.handleNewOptionAdd.bind(this);
       this.handleOptionDelete = this.handleOptionDelete.bind(this);

       this.handleReset = this.handleReset.bind(this);
       
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.question !== this.props.question) {
            this.setState({ question: nextProps.question });
          }
    }
    onQuestionChange(event) {
        const question = event.target.value;
        if(question.length < 80) {    
            this.setState({question: question});
        }
    }

    handleEditQuestionClick() {
        this.setState({canEdit: true});
    }

    handleSaveQuestionClick() {
        let { changeQuestion } = this.props;
        changeQuestion(this.state.question);
        this.setState({canEdit:false});
    }

    onNewOptionChange(event) {
        const newOption = event.target.value;
        if(newOption.length < 80) { 
            this.setState({newOption: newOption});
        }
    }

    handleNewOptionAdd() {
        let { addNewOption } = this.props;
        addNewOption(this.state.newOption);
        this.setState({newOption: ''});
    }

    handleOptionDelete(optionIndex) {
        let { deleteOption } = this.props;
        deleteOption(optionIndex);
    }

    handleReset() {
        this.setState({resetCount: this.state.resetCount + 1});
        this.props.resetQuestionnaire();
    }

    addOptionRow(option, index) {
        let {options} = this.props;
        return (
            <div className='optionRow' key={index}>
                <div className='optionLabel'>{option.value}</div>
                <button disabled={options.length<3} onClick={() => this.handleOptionDelete(index)}>X</button>
            </div>
        )
    }

    get renderNewOption() {
        return(
            <div className='newOptionWrap'>
                <input
                    type="text"
                    onChange={this.onNewOptionChange}
                    placeholder='Type an answer'
                    value={this.state.newOption} 
                  />
                <button disabled={!this.state.newOption} onClick={this.handleNewOptionAdd}>Add</button>
            </div>
        );
    }
    render() {
        let canEdit = this.state.canEdit;
        let { options } = this.props;
        return (
            <div className='questionnaireComponent'>
                <div className='questionnaireBody'>
                    <div className='questionWrap'>
                        <input
                        type="text"
                        onChange={this.onQuestionChange} 
                        value={this.state.question} 
                        disabled={!canEdit} />

                        <button onClick={this.handleEditQuestionClick} className={canEdit ? 'hide':''}>EDIT</button>
                        <button onClick={this.handleSaveQuestionClick} className={!canEdit ? 'hide':''}>SAVE</button>
                    </div>
                    <div className='optionsWrap'>
                        {options.map(this.addOptionRow)}
                    </div>
                   {options.length < 10 && this.renderNewOption}
                </div>
                <div className='resetWrap'>
                    <div><label>{options.length}/10 possible answers</label></div>
                    <button onClick={this.handleReset}>Reset</button>
                </div>
            </div>
        );
    }
}

Questionnaire.propTypes = {
    question: PropTypes.string,
    changeQuestion: PropTypes.func,
    addNewOption: PropTypes.func,
    deleteOption: PropTypes.func,
    resetQuestionnaire: PropTypes.func
}
const mapStateToProps = ({voting}, ownProps) => {
    return {
        question: voting.question,
        options: voting.listOfOptions
    }
}

const mapDispatchToProps = {
    changeQuestion,
    addNewOption,
    deleteOption,
    resetQuestionnaire
};

export default connect(mapStateToProps, mapDispatchToProps) (Questionnaire);
