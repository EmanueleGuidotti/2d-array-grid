export const grid5 = [
	[0, 0, 0, 0, 1],
	[1, 1, 0, 0, 0],
	[1, 1, 0, 1, 1],
	[0, 0, 0, 0, 0],
	[1, 1, 1, 0, 0]
];

export const grid3 = [
	[0, 0, 0],
	[1, 1, 0],
	[1, 1, 0]
];

const flatten: number[] = grid5.flat();
const constant: number = grid5[0].length;
let flatten_zero: number[] = flatten.map((s: number) => (s = 0));

export const recursiveCheck = function(x: number, y: number): void {
	let pos = x > 0 ? constant * x + y : y;
	if (flatten[pos] == 0) return;
	flatten_zero[pos] = flatten[pos];

	let left = flatten[pos - 1];
	let top = flatten[pos - constant];
	let bottom = flatten[pos + constant];
	let right = flatten[pos + 1];

	if (pos % (constant - 1) == 0) {
		flatten_zero[pos - 1] = left;
		flatten_zero[pos - constant] = top;
		flatten_zero[pos + constant] = bottom;
	} else if (pos % constant == 0) {
		flatten_zero[pos + 1] = right;
		flatten_zero[pos - constant] = top;
		flatten_zero[pos + constant] = bottom;
	} else {
		flatten_zero[pos + 1] = right;
		flatten_zero[pos - 1] = left;
		flatten_zero[pos - constant] = top;
		flatten_zero[pos + constant] = bottom;
	}
	if (right !== undefined || right !== 0) flatten_zero[right] = flatten[right];
	if (left !== undefined || left !== 0) flatten_zero[left] = flatten[left];
	if (top !== undefined || top !== 0) flatten_zero[top] = flatten[top];
	if (bottom !== undefined || bottom !== 0)
		flatten_zero[bottom] = flatten[bottom];
	console.log(flatten_zero);
};
