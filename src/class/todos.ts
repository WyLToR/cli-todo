import Todo from "./todo.js";

export default class Todos {
  private todos: Todo[] = [];

  constructor(todos: Todo[]) {
    this.todos = todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  editTodo(idx: number, task: string) {
    if (idx > this.todos.length) {
      console.log("This must be a valid id!");
    } else {
      idx -= 1;
      if (idx >= 0 && idx < this.todos.length) {
        this.todos[idx].task = task;
      }
    }
  }
  editTodoState(idx: number) {
    if (idx > this.todos.length) {
      console.log("This must be a valid id!");
    } else {
      idx -= 1;
      this.todos[idx].isReady = !this.todos[idx].isReady;
    }
  }
  modifyPriority(idx: number, parameter: number) {
    idx -= 1;
    if (this.todos[idx].priority > 3 && this.todos[idx].priority < 1) {
      console.log("It must be a bigger than 1, and smaller than 3");
    } else {
      this.todos[idx].priority = parameter;
    }
  }
  removeTodo(idx: number) {
    if (idx > this.todos.length) {
      console.log("This must be a valid id!");
    } else {
      idx -= 1;
      this.todos.splice(idx, 1);
    }
  }
  getAllTodos(): void {
    if (!this.todos.length) {
      console.log("You don't have todos");
    } else {
      Object.values(this.todos)
        .sort((a, b) => b.priority - a.priority)
        .forEach((todo, idx) => {
          console.log(
            `${idx + 1}. ${
              Boolean(todo.isReady) ? "✅" : "⛔️"
            } ${"!".repeat(todo.priority)} - ${todo.task} - ${new Date(
              todo.published
            ).getFullYear()}. ${new Date(
              todo.published
            ).getMonth()}. ${new Date(todo.published).getDay()} ${new Date(
              todo.published
            ).getHours()}:${new Date(todo.published).getMinutes()}`
          );
        });
    }
  }
}
