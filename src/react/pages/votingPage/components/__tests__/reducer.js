import votingReduer from '../../reducer';
import {CAST_VOTE} from '../../actionTypes';

const sampleState = {
    question: 'Who is your favorite actor?',
    listOfOptions: [
        {value: 'Rajinikanth', votes: 15},
        {value: 'Shahrukh Khan', votes: 11},
        {value: 'Salman Khan', votes: 8}
    ]
};

const expectedState = {
    question: 'Who is your favorite actor?',
    listOfOptions: [
        {value: 'Rajinikanth', votes: 16},
        {value: 'Shahrukh Khan', votes: 11},
        {value: 'Salman Khan', votes: 8}
    ]
};

describe(`Voting Reducer`, ()=> {
    it(`should handle CAST_VOTE`, ()=> {
        expect(
            votingReduer(sampleState, {
                type: CAST_VOTE,
                optionIndex: 0
            })
        ).toEqual(expectedState);
    });
});