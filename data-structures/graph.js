class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if(!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }

  removeVertex(v) {
    this.adjacencyList[v].forEach(vAdjacent => {
      this.removeEdge(v, vAdjacent);
    });
    delete this.adjacencyList[v];
  }

  // Undirectional
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }
}