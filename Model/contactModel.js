const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
    {
        name: String,
        phoneNumber: String,
        age: Number,
        city: String,
        company: String,
    },
    {
        versionKey: false,
    }
);

const contactModel = mongoose.model("contact", contactSchema);

module.exports = {
    contactModel,
};
