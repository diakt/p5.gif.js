export const breakArray = (arr, n) => {
	let result = [];
	for (let i = 0; i < arr.length; i+=n) {
		result.push([]);
		for (let j = 0; j < n; j++) {
			result[result.length - 1].push(arr[i + j]);
		}
	}
	return result;
}
