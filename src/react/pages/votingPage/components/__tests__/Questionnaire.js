import Questionnaire, { mapStateToProps } from '../questionnaire';
import renderer from 'react-test-renderer';

describe(`The Questionnaire Component`, () => {
    
    describe(`The Container Element`, ()=>{
        describe(`mapStateToProps`, ()=> {
            it(`should map the state to props correctly`, () => {
                const sampleVotingData = {
                    question: "What is favorite JS library?",
                    listOfOptions: [
                        {value:'React', votes: 8},
                        {value: 'Angular', votes: 5}
                    ]
                };
    
                const expectedComponentState = {
                    question: "What is favorite JS library?",
                    options: [
                        {value:'React', votes: 8},
                        {value: 'Angular', votes: 5}
                    ]
                };
    
                const appState = {
                    voting: sampleVotingData
                };
                const ownProps = {};
                const componentState = mapStateToProps(appState, ownProps);
                expect(componentState).toEqual(expectedComponentState);
                
    
            });
        });
    });
});