const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Student = require("./models/Student");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => console.log("MongoDB Connected Successfully"))
.catch((err) => console.log(err));

app.post("/add-student", async (req, res) => {
    try {
        const student = await Student.create(req.body);

        res.status(201).json({
            message: "Student added successfully",
            data: student
        });

    } catch (error) {
        res.status(500).json({
            message: "Error adding student",
            error: error.message
        });
    }
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000/");
});