var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema ({
  message: String,
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  _topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
  _comment: {type: Schema.Types.ObjectId, ref: 'Comment'},
  createdAt: {type: Date, default: Date.now()},
});

module.exports = mongoose.model('Post', PostSchema);
