import React from 'react';
import { grid5 } from './data';
import { recursiveCheck } from './utils';

describe('Recursive check test', () => {

	describe('Should return correct adjacent elements -- test model grid5', () => {

        beforeEach(() => {
            recursiveCheck.reset(grid5);
        })

        const initialize = jest.spyOn(recursiveCheck, 'init');

		it('Return 4 from coordinates y:1, x:0', () => {
			const result = recursiveCheck.init(1, 0);
			expect(initialize).toBeCalledTimes(1);
			expect(result).toEqual(4);
		});

        it('Return 4 from coordinates y:1, x:1', () => {
            const result = recursiveCheck.init(1, 1);
            expect(initialize).toBeCalledTimes(2);
            expect(result).toEqual(4);
        });

        it('Return 4 from coordinates y:2, x:0', () => {
            const result = recursiveCheck.init(2, 0);
            expect(initialize).toBeCalledTimes(3);
            expect(result).toEqual(4);
        });

        it('Return 4 from coordinates y:2, x:1', () => {
            const result = recursiveCheck.init(2, 1);
            expect(initialize).toBeCalledTimes(4);
            expect(result).toEqual(4);
        });

        it('Return 0 from coordinates y:1, x:2', () => {
            const result = recursiveCheck.init(1, 2);
            expect(initialize).toBeCalledTimes(5);
            expect(result).toEqual(0);
        });

    });

});
