const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
    nameParent: {
        type: String,
        required: true
    },
    nameKid: {
        type: String,
        requried: true
    },
    number: {
        type: Number,
        required: true
    },
    transaction: {
        type: String,
        required: true
    }
})

const Profile = mongoose.model("Profile", profileSchema)

module.exports = Profile