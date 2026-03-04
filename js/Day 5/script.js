const express = require('express');
const app = express();

app.use(express.json());
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// app.get('/', (req, res) => {
//   res.send('Welcome to the Users API!');
// });

app.get('/users', (req, res) => {
  res.json(users);
});
// Start server
app.listen(3000);