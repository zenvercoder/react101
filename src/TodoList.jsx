const React = require("react")
const TodoItem = require("./TodoItem.jsx")
const Name = require("./Name.jsx")

class TodoList extends React.Component {
	getTodos() {
		return this.props.todos.map(t => <TodoItem todo={t} />)
	}
	render() {
		return <div>
			<h1>Welcome to your TODOS!</h1>
			<Name name="ohai" />
			<ol>{ this.getTodos() }</ol>
		</div>
	}
}

module.exports = TodoList
