"use strict";
exports.__esModule = true;
exports.graph = exports.Graph = void 0;
var Graph = /** @class */ (function () {
    function Graph() {
        this.adjacencyList = {};
    }
    // nodeを追加するメソッド
    Graph.prototype.addNode = function (node) {
        this.adjacencyList[node] = [];
    };
    ;
    // ノード同士を繋ぐメソッド
    // エッジ（辺）を表現する
    Graph.prototype.addEdge = function (node1, node2) {
        this.adjacencyList[node1].push(node2);
        this.adjacencyList[node2].push(node1);
    };
    return Graph;
}());
exports.Graph = Graph;
exports.graph = new Graph();
exports.graph.addNode("A");
exports.graph.addNode("B");
exports.graph.addNode("C");
exports.graph.addNode("D");
exports.graph.addNode("E");
exports.graph.addNode("F");
exports.graph.addEdge("A", "B");
exports.graph.addEdge("A", "C");
exports.graph.addEdge("B", "D");
exports.graph.addEdge("C", "E");
exports.graph.addEdge("D", "E");
exports.graph.addEdge("D", "F");
exports.graph.addEdge("E", "F");
// console.log(graph);
// Graph image
//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
// DFSの走査順: A=>C=>E=>F=>D=>B
// BFSの走査順: A=>B=>C=>D=>E=>F
