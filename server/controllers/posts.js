var Post = require('../models/post');
var Topic = require('../models/topic');
var Comment = require('../models/comment');
var User = require('../models/user');

module.exports = {
  index: function(req, res){
    Post.find({})
    .populate('_user _topic _comment')
    .exec( function(err, posts){
      if(err){
        res.json(err);
      }
      else {
        res.json(posts);
      }
    });
  },
  create: function(req, res){
    console.log('getting post!');
    Post.create(req.body, function(err, post){
      if (err){
        res.json(err);
      }
      else {
        res.json(post);
        console.log(post);
      }
    })
  }
}
