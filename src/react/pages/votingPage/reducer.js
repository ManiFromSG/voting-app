import {
    CHANGE_QUESTION,
    ADD_NEW_OPTION,
    DELETE_OPTION,
    RESET_QUESTIONNAIRE,
    CAST_VOTE
} from './actionTypes';

const defaultState = {
    question: 'Which is your favourite JavaScript library?',
    listOfOptions: [
        { value: 'React JS', votes: 8 },
        { value: 'Angular', votes: 5 },
        { value: 'jQuery', votes: 2 },
        { value: 'Ember.js', votes: 4 }
    ]
}

export default function questionnaireReducer(state = defaultState, action) {
    switch(action.type){
        case CHANGE_QUESTION:
            return Object.assign({}, state, {question:action.question});

        case ADD_NEW_OPTION:
            let newOption = { value: action.newOption, votes: 0 };
            return Object.assign({}, state, {listOfOptions: [...state.listOfOptions, newOption]});
        case DELETE_OPTION:
            return Object.assign(
                {},
                state,
                {
                    listOfOptions: [
                        ...state.listOfOptions.slice(0, action.optionIndex),
                        ...state.listOfOptions.slice(action.optionIndex +1)
                    ]
                });
        case RESET_QUESTIONNAIRE:
            return Object.assign({}, defaultState);
        case CAST_VOTE:
            let votedOption = state.listOfOptions[action.optionIndex];
            votedOption = Object.assign({}, votedOption, {votes: votedOption.votes + 1});
            return Object.assign(
                {},
                state,
                {
                    listOfOptions: [
                        ...state.listOfOptions.slice(0, action.optionIndex),
                        votedOption,
                        ...state.listOfOptions.slice(action.optionIndex +1)
                    ]
                });
        default:
            return state;

    }
}