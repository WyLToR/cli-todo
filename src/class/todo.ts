export default class Todo {
  task: string;
  priority: number;
  isReady: boolean;
  published:Date;

  constructor(todo: string, priority: number = 3, isReady = false, published:Date=new Date()) {
    this.task = todo;
    this.priority = priority;
    this.isReady = isReady;
    this.published=published
  }
}
