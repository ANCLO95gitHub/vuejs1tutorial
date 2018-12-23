const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const corsOptions = {
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'UPDATE'],
  credentials: true
};
const port = process.env.PORT || 8081;

const app = express();

app.use(express.static(__dirname + "/dist"));
app.use(bodyParser());
app.use(cors(corsOptions));


//app.get(/.*/, function( request, response) {
/*  //console.log( 'serveur Heroku Default' );
  response.sendfile(__dirname + "/dist/index.html");
});
*/
app.get('/', (req, res) => res.send('Labo vues1tutorial  en testing'));
app.get('/ceci', function( request, response) {
  console.log( 'serveur Heroku get ceci' );
  //response.sendfile(__dirname + "/dist/index.html");
  response.status(200).send('Welcome to vuejs1tutorial API.  Server Side... (dimanche le 23 DEC 2018.')
  //res.render('salutation.ejs', {username: salut}));
});


app.listen(port, function() {
  console.log('Server vues1tutorial.  port=' + port);
});
