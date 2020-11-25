let usersArr = [
  {name: 'Ivan', age: 17},
  {name: 'Olga', age: 15},
]

const express = require('express');
const exprsHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'views')));

app.set('view engine', '.hbs');
app.engine('.hbs', exprsHbs({
  defaultLayout: false
}));
app.set('views', path.join(process.cwd(), 'views'));

// one endpoint to rule them all
// POST /users
// DELETE /users/:id
// GET /users/:id
// GET /users
// PUT /users/

// app.get('/', (req, res) => {
//   console.log(req);
//
//   res.send('TEST SERVER');
// })
//
// app.get('/users', (req, res) => {
//   res.write('1');
//   res.write('12');
//   res.write('14');
//   res.write('15');
//   res.end();
// });
//
// app.get('/logs', (req, res) => {
//   res.json({name: 'Dima', age: 22});
// });
//
// app.post('/logs', (req, res) => {
//   console.log(req.body);
//
//   res.json(req.body);
// });


app.get('/user', (req, res) => {
  res.render('users', {users: usersArr})
});

app.get('/', (req, res) => {
  res.render('main', {isOk: false, userName: 'Ivan'});
})

app.post('/login', (req, res) => {
  const {name, age} = req.body;

  usersArr.push({name, age});
  res.redirect('/user')
})

app.listen(5000, () => {
  console.log('App listen 5000');
});