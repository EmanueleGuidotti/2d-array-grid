import React from 'react';
import GridComponent from './grid.comp';
import renderer from 'react-test-renderer';
import {grid3, grid5} from '../shared/data';

test('Expect render 5 row x 5 cells component', () => {
    const cmp = renderer.create(<GridComponent data={grid5} />).toJSON();
	expect(cmp).toMatchSnapshot();
});

test('Expect render 3 row x 3 cells component', () => {
    const cmp = renderer.create(<GridComponent data={grid3} />).toJSON();
	expect(cmp).toMatchSnapshot();
});
