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


const heapSort = (arr: number[]) => {
	const [leftChildIndex, rightChildIndex] = getTreeChildren(0)
};

const swap = (arr: number[], parentNodeIndex: number, ChildNodeIndex: number) => {
	return [arr[parentNodeIndex], arr[ChildNodeIndex]] = [arr[ChildNodeIndex], arr[parentNodeIndex]];
};

const getTreeChildren = (index: number) => {
	return [index * 2 + 1, index * 2 + 2];
};

// arrに値を追加していって、親ノードの値より大きければ入れ替える
heapSort([4, 5, 8, 2]);
