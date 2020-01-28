import { IApplication } from './IApplication';
import { IAxis } from './IAxis';
import { IAxes } from './IAxes';
import { flatten } from './flatten';
import { getAdjacency } from './getAdjacency';

/**
 * Returns all pairs of numbers from 0 to n -1
 * @param value 
 * @hidden
 */
function pairs(value: number): Array<Array<number>> {
	const result: Array<Array<number>> = [];

	for (let i = value; --i;) {
		for (let j = i; j--;) {
			result.push([i, j]);
		}
	}

	return result;
}

/**
 * Tom's algorithm as an alternative to getOptimalAxes
 * @param applications 
 * @param x 
 * @param y 
 * @hidden
 */
export function tom(applications: Array<IApplication>, x: IAxis, y: IAxis): Array<IAxes> {
	// determine the long and short axis
	const isXAxisLonger = x.values.length >= y.values.length;
	const longAxis = isXAxisLonger ? x : y;
	const shortAxis = isXAxisLonger ? y : x;

	console.log(`long axis is ${longAxis.name}`);
	console.log(`short axis is ${shortAxis.name}`);

	// flatten the application data
	const denormalised = flatten(applications, x, y);

	// get all pairs of values on the short axis
	for (const pair of pairs(shortAxis.values.length)) {
		// test the adjacency of the pairs of long axis applications
		const adjacency = getAdjacency(denormalised, longAxis.values, [shortAxis.values[pair[0]], shortAxis.values[pair[1]]], false);

		console.log(`${shortAxis.values[pair[0]]} / ${shortAxis.values[pair[1]]} = ${adjacency}`);

	}

	return [{ x, y }];
}