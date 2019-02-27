'use strict';

// JSX - Javascript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Andre Santos'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Andre Santos'
  ),
  React.createElement(
    'p',
    null,
    'Age:36'
  ),
  React.createElement(
    'p',
    null,
    'Location: Aracaju'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
