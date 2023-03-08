const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

var data = require('./data/test.json');
app.get('/', (req, res) => {
  // res.send('Ola Express!');
  var title = 'Home Page';
  res.render('pages/index', {'title': title});
});

app.get('/about', (req, res) => {
  // res.send('Ola Express!');
  var title = 'About Page';
  res.render('pages/about', {'title': title});
});

app.get('/jellyfish', (req, res) => {
  // res.send('Ola Express!');
  var title = 'Jelly Fish Page';
  res.render('pages/jellyfish', {'title': title});
});

app.get('/octopus', (req, res) => {
  // res.send('Ola Express!');
  var title = 'Octopus Page';
  res.render('pages/octopus', {'title': title});
});

app.get('/starfish', (req, res) => {
  // res.send('Ola Express!');
  var title = 'StarFish Page';
  res.render('pages/starfish', {'title': title});
});
//users index is our list page
app.get('/users', function(req, res) {
	var title = 'Users Page';
	res.render('users/index', {
    	title: title,
    	users: data
	});
});


//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(data);

})
 
