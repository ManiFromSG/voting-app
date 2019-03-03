import Chart from '../chart';
import renderer from 'react-test-renderer';
import React from 'react';

const question = 'Which is your favorite JS library?';
const chartData = [
    ['React', 10],
    ['Angular', 8],
    ['jQuery', 6]
];
const totalVotes = 24;

describe(`The Chart Component`, ()=>{
   it(`Should render successfully`, ()=> {
        const tree = renderer.create(
            <Chart question={question} chartData={chartData} totalVotes={totalVotes} />
        );

        expect(tree.toJSON()).toMatchSnapshot();
   });
});
