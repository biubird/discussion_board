var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema ({
  message: String,
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  _topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
  _post: {type: Schema.Types.ObjectId, ref: 'Post'},
  createdAt: {type: Date, default: Date.now()},
});

module.exports = mongoose.model('Comment', CommentSchema);
