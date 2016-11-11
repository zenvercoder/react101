const ReactDOM = require("react-dom")
const React = require("react")
const App = require("./App.jsx")
const data = require("./data.js")

ReactDOM.render(
  <App data={data} />,
  document.getElementById('app')
);
