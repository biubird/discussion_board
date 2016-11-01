var User = require('../models/user');
var Comment = require('../models/comment');
var Topic = require('../models/topic');
var Post = require('../models/post');

module.exports = {
  index: function(req, res){
    User.find({})
    .populate('_topic _comment _post')
    .exec( function(err, users){
      if (err){
        res.json(err);
      }
      else {
        res.json(users);
      }
    });
  },
  create: function(req, res){
    console.log(req.body);
    User.findOne(req.body, function(err, user){
      if (!user){
        User.create(req.body, function(err, user){
          if(err){
            res.json(err);
          }
          else {
            res.json(user);
            console.log(user);
          }
        });
      } else {
        res.json(user);
      }
    });
  },

  show: function(req, res){
    User.findById(req.params.id, function(err, user){
      console.log('getting user!')
      console.log(req.params.id);
      if(err){
        res.json(err);
      }
      else {
        res.json(user);
        console.log(user);
      }
    })
  }
}
