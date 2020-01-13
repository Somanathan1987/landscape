/**
 * Filter criteria to select a unique set of elements from an array
 * @hidden
 */
export function unique<T>(value: T, index: number, array: Array<T>): boolean {
	return array.indexOf(value) === index;
}
