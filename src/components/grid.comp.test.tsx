import React from 'react';
import GridComponent from './grid.comp';
import renderer from 'react-test-renderer';
import { grid5, grid3 } from '../shared/data';

test('Expect render 5 row x 5 cells component', () => {
	const data: number[][] = grid5;
	const cmp = renderer
		.create(<GridComponent data={grid5}></GridComponent>)
		.toJSON();
	expect(cmp).toMatchSnapshot();
});

test('Expect render 3 row x 3 cells component', () => {
    const data: number[][] = grid3;
    const cmp = renderer
        .create(<GridComponent data={grid3}></GridComponent>)
        .toJSON();
    expect(cmp).toMatchSnapshot();
});
