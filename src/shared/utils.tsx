/**
 * recursiveCheck:
 * Recursive function with private members.
 * The function is a closure wrote in module pattern style, or factory function style.
 * That function return the count of adjacent's positive cells
 * and can reset the private variables thanks to the reset inner function
 * @param x - number coordinate
 * @param y - number coordinate
 * @param grid - 2d array
 */
export const recursiveCheck = (() => {
	let flatten: number[] = [];
	let constant: number = 0;
	let flatten_zero: number[] = [];
	let counter: number = 0;
	const resetCounter = (dArray: number[][]) => {
		flatten = dArray.flat();
        flatten_zero = flatten.map((s: number) => (s = 0));
		constant = dArray[0].length;
        counter = 0;
	};
	const inner = (y: number, x: number):number => {
		let pos = y > 0 ? constant * y + x : x;
		// If the selected element is 0 exit from thread
		if (flatten[pos] == 0) return 0;
		// Tapped position
		flatten_zero[pos] = flatten[pos];
		// Adjacent positions
		let left = flatten[pos - 1] as number;
		let top = flatten[pos - constant] as number;
		let bottom = flatten[pos + constant] as number;
		let right = flatten[pos + 1] as number;

		// If right has positive value and i'm not at extreme right
		if (
			right == 1 &&
			flatten_zero[pos + 1] == 0 &&
			(pos + 1) % constant !== 0
		) {
			flatten_zero[pos + 1] = right;
			inner(y, x + 1);
		}
		// If left has positive value and i'm not at extreme left
		if (left == 1 && flatten_zero[pos - 1] == 0 && pos % constant !== 0) {
			flatten_zero[pos - 1] = left;
			inner(y, x - 1);
		}
		// If top has positive value
		if (top == 1 && flatten_zero[pos - constant] == 0) {
			flatten_zero[pos - constant] = top;
			inner(y - 1, x);
		}
		// If bottom has positive value
		if (bottom == 1 && flatten_zero[pos + constant] == 0) {
			flatten_zero[pos + constant] = bottom;
			inner(y - 1, x);
		}
		counter = flatten_zero.reduce((a:number, b:number) => a + b, 0) as number;
		return counter as number;
	};
	return { init: inner as Function, reset: resetCounter as Function };
})();
