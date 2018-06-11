describe('split', function() {
  it('handles an empty array', function() {
    expect(split([])).toEqual([[], []]);
  });

  it('is able to split an array into two halves', function() {
    expect(split([2, 4])).toEqual([[2], [4]]);
  });

  it('splits odd arrays "even to the right"', function() {
    expect(split([1, 2, 3])).toEqual([[1], [2, 3]]);
  });
});

describe('merge', function() {
  it('accept 2 sorted arrays and merge into 1 sorted array', function() {
    expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(merge([2, 4, 6], [1, 3, 5])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(merge([3, 4, 5], [1, 2, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it('can merge 2 empty arrays into one', function() {
    expect(merge([], [])).toEqual([]);
  });
  it('can merge asymetrical arrays', function() {
    expect(merge([3, 4, 5], [2, 6])).toEqual([2, 3, 4, 5, 6]);
  });
});

describe('mergeSort', function() {
  beforeEach(function() {
    spyOn(window, 'merge').and.callThrough();
    spyOn(window, 'split').and.callThrough();
  });



  it('sorts an array into 1 sorted array', function() {
    expect(mergeSort([6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(mergeSort([2, 4, 6, 1, 3, 5])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(mergeSort([3, 4, 5, 1, 2, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(mergeSort([3, 5, 4, 2, 6])).toEqual([2, 3, 4, 5, 6]);
    expect(mergeSort([1])).toEqual([1]);
    expect(mergeSort([])).toEqual([]);
  });

  it('uses split and merge functions to sort', function() {
    window.mergeSort([2, 1]);
    expect(window.split.calls.count()).toEqual(1);
    expect(window.merge.calls.count()).toEqual(1);
  });

   it('uses split and merge functions multiple times to sort', function() {
    window.mergeSort([5, 4, 6, 3, 2, 1]);
    expect(window.split.calls.count()).toEqual(5);
    expect(window.merge.calls.count()).toEqual(5);
  });
});