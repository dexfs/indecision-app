// JSX - Javascript XML
var template = (
  <div>
    <h1>Andre Santos</h1>  
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
)
var templateTwo = (
    <div>
      <h1>Andre Santos</h1>
      <p>Age:36</p>
      <p>Location: Aracaju</p>
    </div>
  )

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);