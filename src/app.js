// JSX - Javascript XML
var app = {
  title: 'Indecision App',
  subtitle: 'Learning Reactjs again'
}
var template = (
  <div>
    <h1>{app.title}</h1>  
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
)
var user = {
  name: 'André Santos',
  age: 36,
  location: 'Aracaju/SE'
}
var templateTwo = (
    <div>
      <h1>{user.name}</h1>
      <p>Age:{user.age}</p>
      <p>Location: {user.location}</p>
    </div>
  )

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);