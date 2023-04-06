const express = require('express');

const routes = require('./routes')

const app = express();
/* app.use( (request, response) => {
  // Middleware 1
}); */

/* app.use( (request, response) => {
  // Middleware 2
}); */

/* app.use( (request, response) => {
  // Middleware 3
}); */

app.use(express.json());
app.use(routes); // Middleware 4


app.listen(3000, () => console.log('Server started at http://localhost:3000'));
