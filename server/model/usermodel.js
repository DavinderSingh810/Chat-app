const mongoose=require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/.+@.+\..+/, "Please enter a valid email address"]
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

const User =mongoose.model("User",UserSchema)


module.exports=User;
