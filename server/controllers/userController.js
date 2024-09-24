const User = require("../model/usermodel");
const bcrypt = require('bcrypt');

const register = async (req, res, next) => {
    try {
        const { username, password, email } = req.body;

        if (!username || !password || !email) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            password: hashedPassword,
            email
        });

        await newUser.save();

        return res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).json({ message: "Server error." });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const findUser = await User.findOne({ username });
        if (!findUser) {
            return res.status(400).json({ message: "User not found." });
        }

        // Compare the hashed password with the provided password
        const isMatch = await bcrypt.compare(password, findUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Wrong password." });
        }

        // Successful login
        return res.status(200).json({ message: "Login successful!" });
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Server error." });
    }
};

// Exporting the functions properly
module.exports = { register, login };
