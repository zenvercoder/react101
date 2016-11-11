console.log("hello")
const ReactDOM = require("react-dom")
const React = require("react")

var name = Math.random()
var todos = [
  {
  text: "get a job",
  id: 1
},
{
  text: "sleep",
  id: 2
}
]

// has a method getTodos and a method render
class TodoList extends React.Component {
  getTodos(){
    return todo.map(t =><li>{t.text}</li>)
  }
  render(){
    return <ol>{this.getTodos()}</ol>
  }
}

class Welcome extends React.Component {
  render(){
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

ReactDOM.render(
  <Welcome name={name}/>,
  <h1>Hello, world!</h1>,
  document.getElementById('app')
);
