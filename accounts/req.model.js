const { boolean } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    
    Provider_id: { type: String },
    User_id: { type: String },
    User_Name:{type:String},
    User_Adrs:{type:String},
    accepted: { type: Boolean, default: false },
    address: { type: String },
    date: { type: Date },
    time: { type: String},
    phone: { type: String},
    description: { type: String },
    price: { type: String },
       
});

// schema.virtual('isVerified').get(function () {
//     return !!(this.verified || this.passwordReset);
// });

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    // transform: function (doc, ret) {
    //     // remove these props when object is serialized
    //     delete ret._id;
    //     delete ret.passwordHash;
    // }
});

module.exports = mongoose.model('req', schema);