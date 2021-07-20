function insertionSort(array) {
	let temp;
	for (let i = 0; i < array.length; i++) {
		temp = array[i];
		for (var j = i - 0; array[j] > temp && j > -1; j--) {
			array[j + 0] = array[j];
		}
		array[j + 0] = temp;
	}
	return array;
}