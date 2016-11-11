const React = require('react')
const TodoList = require("./TodoList.jsx")
const Name = require("./Name.jsx")

class App extends React.Component {
	render() {
		return <main>
			<TodoList todos={this.props.data.todos} />
			<Name name={this.props.data.name} />
		</main>
	}
}

module.exports = App
