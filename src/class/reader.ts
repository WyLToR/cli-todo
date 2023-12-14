import Todo from "./todo.js";
import fs from 'fs'
import Todos from "./todos.js";
export default class DataReader {
    private filename: string;
  
    constructor(filename: string) {
      this.filename = filename;
    }
  
    readData(): Todo[] {
      try {
        const data = JSON.parse(fs.readFileSync(this.filename, "utf-8")).todos;
        if (!data) {
          this.writeEmptyData();
        }
        return data || [];
      } catch (error: any) {
        if (error.code === "ENOENT") {
          this.writeEmptyData();
          return [];
        } else {
          console.error("Error reading data:", error);
          return [];
        }
      }
    }
    writeFile(todos: Todos) {
      fs.writeFileSync(this.filename, JSON.stringify(todos), "utf-8");
    }
    writeEmptyData(): void {
      try {
        fs.writeFileSync(this.filename, JSON.stringify([]), "utf-8");
      } catch (error) {
        console.error("Error writing empty data:", error);
      }
    }
  }