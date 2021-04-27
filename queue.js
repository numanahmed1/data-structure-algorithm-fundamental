class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(item) {
    this.queue.push(item);
  }
  dequeue() {
    if (this.queue.length) {
      return this.queue.shift();
    }
  }
}

const guest = new Queue();
guest.enqueue("Someone 1");
guest.enqueue("Someone 2");
guest.enqueue("Someone 3");
console.log(guest.queue);
const speaker = guest.dequeue();
console.log(speaker);
console.log(guest.queue);
