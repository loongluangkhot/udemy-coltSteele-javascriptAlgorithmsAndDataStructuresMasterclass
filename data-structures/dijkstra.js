class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if(!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }

  // Undirectional
  addEdge(v1, v2, wt) {
    this.adjacencyList[v1].push({val: v2, wt});
    this.adjacencyList[v2].push({val: v1, wt});
  }

  dijkstra(start, end) {

    const priorityQueue = new PriorityQueue();
    const distances = {};
    const previous = {};
    for(let v in this.adjacencyList) {
      distances[v] = Infinity;
      previous[v] = null;
    }
    distances[start] = 0;
    priorityQueue.enqueue(start, 0);

    while(priorityQueue.values.length > 0) {
      let current = priorityQueue.dequeue();
      let shortestDistanceToCurrent = distances[current.val];
      if(current.val === end) {
        let tracer = end;
        const path = [tracer];
        while(previous[tracer] !== start) {
          tracer = previous[tracer];
          path.unshift(tracer);
        }
        path.unshift(start);
        return {
          path,
          distance: shortestDistanceToCurrent
        };
      }
      this.adjacencyList[current.val].forEach(v => {
        if(shortestDistanceToCurrent + v.wt < distances[v.val]) {
          distances[v.val] = shortestDistanceToCurrent + v.wt;
          previous[v.val] = current.val;
          priorityQueue.enqueue(v.val, distances[v.val]);
        }
      });
    }
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  
  enqueue(val, priority) {
    this.values.push({val, priority});
    return this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    return this.values.sort((a,b) => a.priority - b.priority);
  }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

let result = graph.dijkstra("A", "E");
console.log(result);