import { Graph, graph } from "./graph";

const depthFirstIterative = (graph: Graph, start) => {
	const stack = [start];
	const result: string[] = [];

	const visited = {};

	let currentNode: string;
	visited[start] = true;

	while (stack.length) {
		currentNode = stack.pop();
		result.push(currentNode);

		graph.adjacencyList[currentNode].forEach(neighbor => {
			if (!visited[neighbor]) {
				visited[neighbor] = true;
				stack.push(neighbor);
			}
		});
	}

	return result;
}

console.log(depthFirstIterative(graph, "A"));
