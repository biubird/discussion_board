var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TopicSchema = new Schema ({
  name: String,
  description: String,
  category: String,
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  createdAt: {type: Date, default: Date.now()},
  posts: Number
});

module.exports = mongoose.model('Topic', TopicSchema);
