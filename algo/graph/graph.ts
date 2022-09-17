class Graph {
	adjacencyList: {};

	// nodeを追加するメソッド
	addNode(node) {
		this.adjacencyList[node] = [];
	};

	// ノード同士を繋ぐメソッド
	// エッジ（辺）を表現する
	addEdge(node1, node2) {
		this.adjacencyList[node1].push(node2);
		this.adjacencyList[node2].push(node1);
	}
	constructor() {
		this.adjacencyList = {};
	}
}

let graph = new Graph();

graph.addNode("A")
graph.addNode("B")
graph.addNode("C")
graph.addNode("D")
graph.addNode("E")
graph.addNode("F")

console.log(graph);
