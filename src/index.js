const ReactDOM = require("react-dom")
const React = require("react")
const TodoList = require("./TodoList.js")
const data = require("./data.js")

// class Welcome extends React.Component {
//   render(){
//     return <h1>Hello, {this.props.name}!</h1>;
//   }
// }

ReactDOM.render(
  <TodoList todos={data.todos}/>,
  document.getElementById('app')
);
