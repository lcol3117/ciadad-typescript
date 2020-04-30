function range(start: number, end: number): number[] {
    if(start === end) return [start];
    return [start, ...range(start + 1, end)];
}
function cia3d_dist(a: number[], b: number[]): number {
	let r: number[] = range(0,(a.length - 1))
	let iDists: number[] = r.map((i => Math.abs(a[i] - b[i])))
	let result: number = iDists.reduce((a, b) => Math.max(a,b))
	return result
}
function ciadad(data: Array<Array<number>>): boolean[] {
	let vals: number[] = data.map(x => getD(x, data))
	let thresh: number = median(vals)
	let result: boolean[] = vals.map(x => (x > thresh))
	return result
}
function getD(i: number[], data: Array<Array<number>>): number {
	let options: number[] = data.map(x => distNotSelf(i, x))
	let result: number = options.reduce((a, b) => Math.min(a,b))
	return result
}
function distNotSelf(a: number[], b: number[]): number {
	let raw: number = cia3d_dist(a, b)
	if (raw === 0) {
		return Infinity
	} else {
		return raw
	}
}
function median(values: number[]): number {
	values.sort((a, b) => a - b);
	let lowMiddle: number = Math.floor((values.length - 1) / 2);
	let highMiddle: number = Math.ceil((values.length - 1) / 2);
	let median: number = (values[lowMiddle] + values[highMiddle]) / 2;
	return median
}
let mydata: Array<Array<number>> = [[1,2,3],[2,3,3],[1,2,2],[4,4,4]]
console.log(ciadad(mydata))
