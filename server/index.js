const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const CredentialModel = require('./models/LoginCredentials');
const zod = require('zod');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:EkmduKxSIfW9RTeW@cohort.eadvlvf.mongodb.net/");

const validateInput = ({ id, password, role }) => {
    const schema = zod.object({
        id: zod.string().min(6).max(6), // Adjusted for id of length 6
        password: zod.string().min(8),
        role: zod.string() // Assuming role is a string
    });
    return schema.safeParse({ id, password, role });
};

app.post("/login", (req, res) => {
    const { id, password, role } = req.body;
    const validationResult = validateInput({ id, password, role });

    if (!validationResult.success) {
        res.status(400).json({ error: "Invalid input" });
        return;
    }

    CredentialModel.findOne({ id: id })
        .then(user => {
            if (user) {
                if (user.password === password && user.role === role) {
                    res.json("Success");
                } else {
                    res.status(404).json("Incorrect credentials");
                }
            } else {
                res.status(404).json("No record found");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        });
});

app.listen(3001, () => {
    console.log('Server is running');
});
