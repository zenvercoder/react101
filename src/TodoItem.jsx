const React = require("react")
class TodoItem extends React.Component {
	render() {
		return <li>{this.props.todo.text}</li>
	}
}
module.exports = TodoItem
