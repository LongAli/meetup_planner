var mongoose  = require('mongoose');

module.exports.eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  type: {
    type: String,
    required: true
  },

	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},

  host: {
    type: String,
    required: true
  },

	startDate: {
		type: Date,
		required: true
	},

	endDate: {
		type: Date,
		required: true
	},

	location: {
		type: String,
		required: true
	},

	message: {
		type: String
	}
});
