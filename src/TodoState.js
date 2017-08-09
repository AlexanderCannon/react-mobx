import {autorun, observable, computed} from 'mobx';

class Todo {
  @observable value
  @observable id
  @observable complete

  constructor(value) {
    this.value = value;
    this.id = Date.now();
    this.complete = false;
  }
}

class TodoState {
  @observable todos = []
  @observable filter = "";

  @computed get filteredTodos() {
    let matchesFilter = new RegExp(this.filter, "i");
    return this.todos.filter((todo) => !this.filter || matchesFilter.test(todo.value));
  }

  createTodo(value) {
    this.todos.push(new Todo(value));
  }
  clearComplete = () => {
    const unfinished = this.todos.filter((todo) => !todo.complete)
    this.todos.replace(unfinished);
  }
}

export default new TodoState;
