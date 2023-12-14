import { argv } from "process";
import DataReader from "./reader.js";
import Todo from "./todo.js";
import Todos from "./todos.js";
import { cutter } from "../functions.js";

export default class Menu {
  private todos: Todos;
  private reader: DataReader;
  constructor() {
    this.reader = new DataReader("./data.json");
    this.todos = new Todos(
      this.reader
        .readData()
        .map(
          (todo: any) =>
            new Todo(todo.task, Number(todo.priority), todo.isReady, todo.published)
        )
    );
    this.process();
  }
  help() {
    return `
      -l --list                              - Todo List
      -h --help                              - Help station
      -a --add         [todo task]           - Add Todo
      -m --modify [id] [todo task]           - Modify Todo
      -s --set    [id]                       - Set Task Done-unDone
      -p --set-priority [id] [priority 1-3] - Set Priority
      -r --remove [id]                       - Remove Todo`;
  }
  process() {
    const todo = argv.slice(2);
    switch (cutter(todo[0])) {
      case "l":
      case "list":
        this.todos.getAllTodos();
        break;
      case "a":
      case "add":
        this.todos.addTodo(new Todo(todo[1], Number(todo[2])));
        this.reader.writeFile(this.todos);
        break;
      case "m":
      case "modify":
        this.todos.editTodo(Number(todo[1]), todo[2]);
        this.reader.writeFile(this.todos);
        break;
      case "r":
      case "remove":
        this.todos.removeTodo(Number(todo[1]));
        this.reader.writeFile(this.todos);
        break;
      case "s":
      case "set":
        this.todos.editTodoState(Number(todo[1]));
        this.reader.writeFile(this.todos);
        break;
      case "p":
      case "set-priority":
        this.todos.modifyPriority(Number(todo[1]), Number(todo[2]));
        this.reader.writeFile(this.todos)
        break;
      default:
      case "h":
      case "help":
        console.log(this.help());
        break;
    }
  }
}
