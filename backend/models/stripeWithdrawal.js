let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let stripeWithdrawalSchema = new Schema({

    //withdrawal id auto generated by mongo
    withdrawalAmount: {
        type: Number,
        required: true,
        trim: true
    },
    withdrawDate: {
        type: Date,
        required: true,
        trim: true
    },
    reason: {
        type: String,
        required: true,
        trim: true
        // validate: radio button where we can track
    },
    userID: {
        type: String,
        required: true,
        trim: true
    }
});

let stripeWithdrawal = mongoose.model("stripeWithdrawal", stripeWithdrawalSchema)

module.exports = stripeWithdrawal;