"use strict";
exports.__esModule = true;
var graph_1 = require("./graph");
var breadFirst = function (graph, start) {
    var queue = [start];
    var result = [];
    var visited = {};
    var currentNode;
    visited[start] = true;
    while (queue.length) {
        currentNode = queue.shift();
        result.push(currentNode);
        graph.adjacencyList[currentNode].forEach(function (neighbor) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        });
    }
    return result;
};
console.log(breadFirst(graph_1.graph, "A"));
