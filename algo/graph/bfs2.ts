import { Graph, graph } from "./graph";

const bfs = (graph: Graph, start: string): string[] => {
	// BFSはキューの考え方を使う
	// あるノードから、1つ1つ拾って見ていく
	const visited = {};
	const queue = [start];

	while (queue.length) {
		const length = queue.length;
		for (let i = 0; i < length; i++) {
			
		}
	}


	return []
}

console.log(bfs(graph, "A"));


// var minDepth = function(root) {
// 	let depth = 1
// 	let queue = [root]
// 	while (queue.length > 0) {
// 			let len = queue.length
// 			for (let i = 0; i < len; i++) {
// 					let node = queue.shift()
// 					if (node === null) return 0
// 					if (node.left === null && node.right === null) return depth
// 					if (node.left !== null) queue.push(node.left)
// 					if (node.right !== null) queue.push(node.right)
// 			}
// 			depth++
// 	}
// 	return depth
// };
