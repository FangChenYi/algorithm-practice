class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.arr = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    if (this.arr.length == 0) {
      this.arr.push(newNode);
      return true;
    }

    this.arr.push(newNode);
    let newIndex = this.arr.length - 1;
    let parentIndex = Math.floor((newIndex - 1) / 2);

    while (
      parentIndex >= 0 &&
      this.arr[newIndex].priority > this.arr[parentIndex].priority
    ) {
      let temp = this.arr[parentIndex];
      this.arr[parentIndex] = this.arr[newIndex];
      this.arr[newIndex] = temp;

      newIndex = parentIndex;
      parentIndex = Math.floor((newIndex - 1) / 2);
    }
  }

  dequeue() {
    if (this.arr.length == 0) {
      return null;
    }
    if (this.arr.length == 1) {
      return this.arr.pop();
    }

    // 我的寫法
    let temp = this.arr[this.arr.length - 1];
    this.arr[this.arr.length - 1] = this.arr[0];
    this.arr[0] = temp;
    let removedNode = this.arr.pop();
    this.maxHeapify(0);

    // 老師的寫法
    // let temp = this.arr.pop();
    // this.arr.push(this.arr[0]);
    // this.arr[0] = temp;
    // let removedNode = this.arr.pop();
    // this.maxHeapify(0);

    return removedNode;
  }

  maxHeapify(i) {
    let largest;
    let l = i * 2 + 1;
    let r = i * 2 + 2;

    if (
      l <= this.arr.length - 1 &&
      this.arr[l].priority > this.arr[i].priority
    ) {
      largest = l;
    } else {
      largest = i;
    }

    if (
      r <= this.arr.length - 1 &&
      this.arr[r].priority > this.arr[largest].priority
    ) {
      largest = r;
    }

    if (largest != i) {
      let temp = this.arr[i];
      this.arr[i] = this.arr[largest];
      this.arr[largest] = temp;

      this.maxHeapify(largest);
    }
  }
}

let pq = new PriorityQueue();
pq.enqueue("Eat", 4);
pq.enqueue("Sleep", 2);
pq.enqueue("Learn", 6);
pq.enqueue("Shopee", 5);
pq.enqueue("Read", 8);
pq.enqueue("Play", 1);

console.log(pq);

while (pq.arr.length >= 1) {
  let task = pq.dequeue();
  console.log(task.value + ", " + task.priority);
}
