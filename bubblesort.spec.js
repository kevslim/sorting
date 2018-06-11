describe('Bubble Sort', function(){
	beforeEach(function () {
	  spyOn(window, 'swap').and.callThrough();
	});

	it('handles an empty array', function(){
	expect(bubbleSort([])).toEqual( [] );
	});

	it('handles a single element in an array', function() {
		expect(bubbleSort([1])).toEqual([1]);
	});

	it('handles two elements in an array', function() {
		expect(bubbleSort([2, 1])).toEqual([1, 2]);
	});

	it('handles a large array', function() {
		expect(bubbleSort([52, 34, 3, 72, 16, 9, 14, 2, 1])).toEqual([1, 2, 3, 9, 14, 16, 34, 52, 72]);
	});

	it('swapping', function () {
		window.bubbleSort([2, 1]);
	  	expect(window.swap.calls.count()).toEqual(1);
	});

	it('swapping more', function () {
		window.bubbleSort([3, 2, 1]);
	  	expect(window.swap.calls.count()).toEqual(3);
	});

});