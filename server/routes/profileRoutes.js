const express = require("express")
const { getAllProfiles, createProfile, getProfile, updateProfile, deleteProfile } = require("../controllers/profileController")

const router = express.Router()

router
    .route("/")
    .get(getAllProfiles)
    .post(createProfile)

router
    .route("/:id")
    .get(getProfile)
    .patch(updateProfile)
    .delete(deleteProfile)

module.exports = router