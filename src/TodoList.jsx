import React, {Component} from 'react';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class TodoList extends Component {
  createTodo(e) {
    if (e.which == 13) {
      this.props.state.createTodo(e.target.value);
      e.target.value = '';
    }
  }
  toggleComplete(todo) {
    todo.complete = !todo.complete;
  }
  filter(e) {
    this.props.state.filter = e.target.value;
  }
  render() {
    const {todos, filter, filteredTodos, clearComplete} = this.props.state;
    let liList = filteredTodos.map((todo) => (<li key={todo.id}>
      <input type="checkbox" value={todo.complete} checked={todo.complete} onChange={this.toggleComplete.bind(this, todo)} /> {todo.value} </li>))
    return (
      <div>
        <h1>MobX</h1>
        <div>{filter}</div>
        <input className="filter" value={filter} onChange={this.filter.bind(this)} />
        <input className="create" onKeyPress={this.createTodo.bind(this)} />
        <ul>{liList}</ul>
        <a href='#' onClick={clearComplete}>Clear Complete</a>
      </div>
    );
  }
};

export default TodoList;
