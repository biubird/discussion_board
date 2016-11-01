var User = require('../controllers/users')
var Topic = require('../controllers/topics')
var Post = require('../controllers/posts')

module.exports = function(app){
  app.get('/', function(req, res){
    res.sendFile(__dirname + '../../client/index.html');
  });
  app.get('/users', User.index);
  app.post('/users', User.create);
  app.get('/users/:id', User.show);
  app.post('/topics', Topic.create);
  app.get('/topics', Topic.index);
  app.get('/topics/:id', Topic.show);
  app.post('/posts', Post.create);
  app.get('/posts', Post.index);
}
