var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  userName: {type: String, unique: true },
  createdAt: {type: Date, default: Date.now()},
  _topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
  _comment: {type: Schema.Types.ObjectId, ref: 'Comment'},
  _post: {type: Schema.Types.ObjectId, ref: 'Post'},
});



module.exports = mongoose.model('User', UserSchema);
