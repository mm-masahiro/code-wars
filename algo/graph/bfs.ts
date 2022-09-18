import { Graph, graph } from "./graph";

const breadFirst = (graph: Graph, start: string): string[] => {
	const queue: string[] = [start];
	const result: string[] = [];
	const visited = {};

	let currentNode: string;
	visited[start] = true;

	while (queue.length) {
		currentNode = queue.shift();
		result.push(currentNode);

		graph.adjacencyList[currentNode].forEach(neighbor => {
			if (!visited[neighbor]) {
				visited[neighbor] = true;
				queue.push(neighbor);
			}
		})
	}

	return result;
};

console.log(breadFirst(graph, "A"));
