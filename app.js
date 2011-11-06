var app = require('express').createServer();

app.get('/', function(req, res){
  res.send('Powered by OpDemand');
});

app.listen(3000);

console.log('Server listening on port %d in %s mode', app.address().port, app.settings.env);
