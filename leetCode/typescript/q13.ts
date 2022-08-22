// https://leetcode.com/problems/kth-largest-element-in-a-stream/

class KthLargest {
	constructor(k: number, nums: number[]) {
		this.target = k;
		this.elements = nums;
	}

	target: number;
	elements: number[]

	add(val: number): number {
		this.elements.push(val)
			
		for (let i = 0; i < this.elements.length - 1; i++) {
			for (let j = 0; j < this.elements.length - 1; j++) {
				if (this.elements[j] < this.elements[j + 1]) {
						const temp = this.elements[j];
						this.elements[j] = this.elements[j + 1];
						this.elements[j + 1] = temp;
				}
			}   
		}
		return this.elements[this.target - 1]
	}
}

/**
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, nums)
* var param_1 = obj.add(val)
*/


const heapSort = (k: number, arr: number[]) => {
	const maxTreeSize = Math.floor(Math.log2(arr.length));
	// console.log(swap(arr, 0, 1));
};

const sort = (arr: number[]) => {
	const lastArrIndex = arr.length - 1
	for (let index = 0; index < lastArrIndex ; index++){
		const [leftChildIndex, rightChildIndex] = getTreeChildren(index)
		let childIndex = leftChildIndex;

		if (childIndex > lastArrIndex) return
		if (rightChildIndex <= lastArrIndex && arr[rightChildIndex] < arr[leftChildIndex]) {
			childIndex = rightChildIndex;
		}
	}
}

const swap = (arr: number[], parentNodeIndex: number, ChildNodeIndex: number) => {
	return [arr[parentNodeIndex], arr[ChildNodeIndex]] = [arr[ChildNodeIndex], arr[parentNodeIndex]];
};

const getParent = (index: number) => {
	return Math.floor((index - 1) / 2);
};

const getTreeChildren = (index: number) => {
	return [index * 2 + 1, index * 2 + 2];
};

// arrに値を追加していって、親ノードの値より大きければ入れ替える
heapSort(3, [4, 5, 8, 2]);
