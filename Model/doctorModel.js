const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema(
    {
        name: String,
        expertise: String,
        city: String,
        education: String,
        BPT_experience: String,
        specialties: [String],
        ongoing: Boolean,
        timings: String,
        patients_treated: Number,
        image: String,
    },
    {
        versionKey: false,
    }
);

const doctorModel = mongoose.model("doctor", doctorSchema);

module.exports = {
    doctorModel,
};
