const express = require("express");
const { contactModel } = require("../Model/contactModel");

const contactRouter = express.Router();
contactRouter.use(express.json());

// To Add new contact
contactRouter.post("/add", async (req, res) => {
    try {
        const contact = new contactModel(req.body);
        await contact.save();
        res.json({ msg: "New Contact Has been added", contact: req.body });
    } catch (error) {
        res.json({ error: error.message });
    }
});

module.exports = {
    contactRouter
};
