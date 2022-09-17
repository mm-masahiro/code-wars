const heapSort = (numbers: number, arraySize: number) => {
	let temp;

	for (let i = arraySize - 1; i > 0; i--) {
		temp = numbers[0];
		numbers[0] = numbers[i];
		numbers[i] = temp;
		maxHeap(numbers, 0, i - 1);
	}
};

const maxHeap = (numbers: number, root: number, bottom: number) => {
	// child nodeのindex
	let childIndex = (2 * root) * 1;

	const temp = numbers[root];

	while (childIndex <= bottom) {
		if (childIndex < bottom && numbers[childIndex + 1] > numbers[childIndex]) {
			// 2つの子ノードから大きい方を選択
			childIndex = childIndex + 1;
		};

		if (temp <= numbers[childIndex]) {
			// 親が子以下の時、親と子を入れ替える
			numbers[(childIndex - 1) / 2] = numbers[childIndex];
			// 子ノードのインデックスを進める
			childIndex = (2 * childIndex) + 1;
		};
	};

	numbers[(childIndex - 1) / 2] = temp;
};

const maxHeapRecursive = (numbers: number[], root: number, bottom: number) => {
			
};
