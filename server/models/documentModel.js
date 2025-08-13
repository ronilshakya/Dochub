const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    userId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type:{
        type: String,
        required: true
    },
    status:{
        type: String,
        default: 'pending'
    },
    fileUrl:{
        type: String,
        required: true
    },
    requestDate:{
        type: Date,
        default: Date.now
    },
    approvalDate:{
        type: Date
    }
});
module.exports = mongoose.model('Document',documentSchema);