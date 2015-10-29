// require('style!css!cssnext!./main.css')
require('./main.css')
var component = require('./component')
var app = document.createElement('div')

document.body.appendChild(app);

app.appendChild(component());
