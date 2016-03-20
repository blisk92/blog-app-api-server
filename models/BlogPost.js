var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema ({
	title: String,
	body: String,
	draft: Boolean,
	updated_at: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Blog2', blogSchema);
