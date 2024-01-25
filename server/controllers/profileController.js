const Profile = require("../models/profiles")

const getAllProfiles = async (req, res) => {
    try {

        const profiles = await Profile.find()
        res.status(200).json({
            status: "success",
            data: profiles
        })
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err
        })
    }
}

const createProfile = async (req, res) => {
    try {
        const newProfile = await Profile.create(req.body)
        res.status(200).json({
            status: "success",
            data: {
                newProfile
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err
        })
    }
}

const getProfile = async (req, res) => {
    try {
        const { id } = req.params
        const profile = await Profile.findById(id)
        res.status(200).json({
            status: "success",
            data: {
                profile
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err
        })
    }
}

const updateProfile = async (req, res) => {
    try {
        const { id } = req.params
        const updateProfile = await Profile.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: "success",
            data: {
                updateProfile
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err
        })
    }
}

const deleteProfile = async (req, res) => {
    try {
        const { id } = req.params
        const deleteProfile = await Profile.findByIdAndDelete(id)
        res.status(200).json({
            message: "success",
            data: {
                deleteProfile
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err
        })
    }
}
module.exports = { getAllProfiles, createProfile, getProfile, updateProfile, deleteProfile }