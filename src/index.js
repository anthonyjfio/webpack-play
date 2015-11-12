require('./main.css')

var component = require('./component')
var image = require('./img/149_1.jpg')
var app = document.createElement('div')

document.body.appendChild(app);

app.appendChild(component());
app.appendChild('<img src="' + image + '"/>'());
