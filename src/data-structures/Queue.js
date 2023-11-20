class Queue {
  constructor() {
    this.queue = []
  }

  // insert item into Queue
  enqueue(key) {
    this.queue.push(key)
  }

  // remove item from the front of queue
  dequeue() {
    return this.queue.shift()
  }

  // return size of Queue
  size() {
    return this.queue.length
  }

  // check whether queue is empty or not
  empty() {
    return this.queue.length === 0
  }
}

export default Queue
