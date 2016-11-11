const React = require("react")
const TodoItem = require("./TodoItem.js")

// has a method getTodos and a method render
class TodoList extends React.Component {
  getTodos(){
    return this.props.todos.map(t =><TodoItem todo={t}/>)
  }
  render(){
    <div>
    <h1>Welcome to your TODOS!</h1>
    <ol>{this.getTodos()}</ol>
    </div>
  }
}

module.exports = TodoList
