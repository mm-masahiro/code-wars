"use strict";
exports.__esModule = true;
var graph_1 = require("./graph");
// グラフアルゴリズムで大事なのは一回訪れたところにはフラグをつける
// DFS: 深さ優先。あるノードから行けるところまで行く。スタックの考え方を使う
var dfs = function (graph, start) {
    var searchRoot = [];
    var currentNode = start;
    var visited = {};
    // traverseに渡すのはconnectedの一番後ろのもの
    var traverse = function (currentNode) {
        visited[currentNode] = true;
        var connectedNode = graph.adjacencyList[currentNode];
        var current;
        // 後ろから取っていく
        while (connectedNode.length) {
            current = connectedNode.pop();
            if (!visited[current]) {
                searchRoot.push(current);
            }
            traverse(current);
        }
    };
    traverse(currentNode);
    return searchRoot;
};
console.log(dfs(graph_1.graph, "A"));
