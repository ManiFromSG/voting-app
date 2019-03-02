import {
    CHANGE_QUESTION,
    ADD_NEW_OPTION,
    DELETE_OPTION,
    RESET_QUESTIONNAIRE,
    CAST_VOTE
} from './actionTypes';

export function changeQuestion(question){
    return {
        type: CHANGE_QUESTION,
        question
    };
}

export function addNewOption(newOption) {
    return {
        type: ADD_NEW_OPTION,
        newOption
    };
}

export function deleteOption(optionIndex) {
    return {
        type: DELETE_OPTION,
        optionIndex
    };
}

export function resetQuestionnaire() {
    return {
        type: RESET_QUESTIONNAIRE
    };
}

export function castVote(optionIndex) {
    return {
        type: CAST_VOTE,
        optionIndex
    };
}