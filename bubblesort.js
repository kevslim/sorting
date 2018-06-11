function bubbleSort(array) {
	// let swapped;
	// do {
	// 	swapped = false;
	// 	for(let i = 0; i < array.length - 1; i++) {
	// 		if(array[i] > array[i+1]) {
	// 			swap(array, i, i+1);
	// 			swapped = true;
	// 		}
	// 	}
	// } while(swapped);
	// return array;

	for(let end = array.length - 1; end > 0; end--) {
		for(let j = 0; j < end; j++) {
			if(array[j] > array[j+1]) {
				swap(array, j, j+1);
			}
		}
	}
	return array;
}

function swap(arr, a, b) {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}