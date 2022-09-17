"use strict";
exports.__esModule = true;
var graph_1 = require("./graph");
var depthFirstIterative = function (graph, start) {
    var stack = [start];
    var result = [];
    var visited = {};
    var currentNode;
    visited[start] = true;
    while (stack.length) {
        currentNode = stack.pop();
        result.push(currentNode);
        graph.adjacencyList[currentNode].forEach(function (neighbor) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                stack.push(neighbor);
            }
        });
    }
    return result;
};
console.log(depthFirstIterative(graph_1.graph, "A"));
