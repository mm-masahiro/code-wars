import { Graph, graph } from "./graph";

// グラフアルゴリズムで大事なのは一回訪れたところにはフラグをつける
// DFS: 深さ優先。あるノードから行けるところまで行く。スタックの考え方を使う
const dfs = (graph: Graph, start: string) => {
	const searchRoot: string[] = [];
	const currentNode = start;
	const visited = {};

	// traverseに渡すのはconnectedの一番後ろのもの
	const traverse = (currentNode: string) => {
		visited[currentNode] = true;
		let connectedNode: string[] = graph.adjacencyList[currentNode];
		let current: string;

		// 後ろから取っていく
		while (connectedNode.length) {
			current = connectedNode.pop();
			if (!visited[current]) {
				searchRoot.push(current);
			}
			traverse(current)
		}
	};

	traverse(currentNode);

	return searchRoot;
};

console.log(dfs(graph, "A"));
