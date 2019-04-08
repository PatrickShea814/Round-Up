let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Model to store Successful Stripe ACH Deposits
let StripeDeposSchema = new Schema({

    //deposit id auto generated by mongo
    // name of the original transaction that was rounded up.
    transactionName: {
        type: String,
        required: true
    },
    // amount deposited into Stripe from User Account from ACH.
    amountDeposited: {
        type: Number,
        trim: true
    },
    depositDate: {
        type: Date,
        trim: true
    },
    // The transaction_id associated to the completed posted ACH in Transaction History
    newTransactionId: {
        type: Number,
        trim: true,
        unique: true,
        required: true
    },
    // The original transaction_id associated to the transaction that was rounded up.
    originalTransId: {
        type: Number,
        trim: true,
        unique: true,
        required: true
    },
    // Date that Stripe receives the rounded up amount.
    dateCompleted: {
        type: Date,
        required: true
    },
    userID: {
        type: String,
        required: true,
        trim: true
    }
});

let StripeDepos = mongoose.model("StripeDepos", StripeDeposSchema)

module.exports = StripeDepos;