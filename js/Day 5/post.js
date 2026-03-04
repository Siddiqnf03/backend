const express = require('express');
const app = express();
app.use = (express.json());
let users= [
    {id: 1 ,name:'alli'},
    {id: 2 ,name:'siddiq'}
];
// app.get('/users', (req, res) => {
//   res.json(users);
// });

app.post('/users', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).send('Name is required');

  const newUser = {
    id: users.length + 1,
    name
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(3000);

