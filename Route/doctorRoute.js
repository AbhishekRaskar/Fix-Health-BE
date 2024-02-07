const express = require("express");
const { doctorModel } = require("../Model/doctorModel");

const doctorRouter = express();
doctorRouter.use(express.json());


// To Add new doctor
doctorRouter.post("/add", async (req, res) => {
    try {
        const doctor = new doctorModel(req.body);
        await doctor.save();
        res.json({ msg: "New Doctor Has been added", doctor: req.body });
    } catch (error) {
        res.json({ error: error.message });
    }
});

// To Get List of Doctors
doctorRouter.get("/", async (req, res) => {
    try {
        const { city } = req.query;
        let doctors;
        if (city) {
            doctors = await doctorModel.find({ city });
        }
        else {
            doctors = await doctorModel.find();
        }
        res.json({ msg: "Doctor List", doctors });
    } catch (error) {
        res.json({ error: error.message });
    }
});

// To Update Doctor 
doctorRouter.patch("/update/:doctorID", async (req, res) => {
    const { doctorID } = req.params;
    try {
        const doctor = await doctorModel.findByIdAndUpdate(doctorID, req.body);
        if (doctor) {
            res.json({ msg: `${doctor.name} has been updated`, doctor });
        } else {
            res.status(404).json({ msg: "Doctor not found" });
        }
    } catch (error) {
        console.error("Error updating doctor:", error);
        res.status(500).json({ error: error.message });
    }
});

// To Delete Doctor
doctorRouter.delete("/delete/:doctorID", async (req, res) => {
    const { doctorID } = req.params;
    try {
        const doctor = await doctorModel.findByIdAndDelete(doctorID);
        if (doctor) {
            res.json({ msg: `${doctor.name} has been deleted`, doctor });
        } else {
            res.status(404).json({ msg: "Doctor not found" });
        }
    } catch (error) {
        console.error("Error deleting doctor:", error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = {
    doctorRouter
}