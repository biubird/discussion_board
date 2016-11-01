var Topic = require('../models/topic');
var User = require('../models/user');

module.exports = {
  index: function(req, res){
    Topic.find({})
    .populate('_user')
    .exec( function(err, topics){
      if(err){
        res.json(err);
      }
      else {
        res.json(topics);
      }
    });
  },
  create: function(req, res){
    Topic.create(req.body, function(err, topic){
      if(err){
        res.json(err);
      }
      else {
        res.json(topic);
        console.log(topic);
      }
    })
  },
  show: function(req, res){
    Topic.findById(req.params.id, function(err, topic){
      console.log('getting topic!');
      if(err){
        res.json(err);
      }
      else {
        res.json(topic);
        console.log(topic);
      }
    })
  }
}
