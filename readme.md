# cli-todo

## Description

A simple todo application written in TypeScript that manages tasks and stores them in a JSON file.

## Installation

Clone the repository:

```bash
git clone https://github.com/WyLToR/cli-todo.git
```

Navigate to the project directory:

```bash
cd cli-todo
```

Install dependencies:

```bash
npm install
```

## Usage

The application supports the following commands:

- `-l` or `--list`: List all todos.
- `-h` or `--help`: Display help information.
- `-a` or `--add [todo task]`: Add a new todo.
- `-m` or `--modify [id] [todo task]`: Modify a todo.
- `-s` or `--set [id]`: Set a task as done or undone.
- `-sp` or `--set-priority [id] [priority 1-3]`: Set the priority of a todo.
- `-r` or `--remove [id]`: Remove a todo.

### Examples

List all todos:

```bash
npm start -l
```

Add a new todo:

```bash
npm start -a "Complete assignment"
```

Modify a todo:

```bash
npm start -m 1 "Update project documentation"
```

Set a task as done:

```bash
npm start -s 1
```

Set the priority of a todo:

```bash
npm start -sp 1 2
```

Remove a todo:

```bash
npm start -r 1
```

## Development

To build the project, run:

```bash
npm run build
```

To start the application, run:

```bash
npm start
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- WyLToR
- Email: bekesi.patrik@gmail.com