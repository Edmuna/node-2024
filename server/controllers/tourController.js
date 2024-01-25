const Tour = require("../models/tourModel")

exports.getAllTours = async (req, res) => {

    try {
        // BUILD QUERY
        const queryObj = { ...req.query }
        const excludedFields = ["page", "sort", "limit", "fields"]
        excludedFields.forEach(el => delete (queryObj[el]))

        const query = Tour.find(queryObj)
        const tours = await query

        res.status(200).json({
            status: 'success',
            requestedAt: req.requestTime,
            results: tours.length,
            data: {
                tours
            }
        });
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err
        })
    }

};

exports.getTour = async (req, res) => {
    try {
        const { id } = req.params
        const tour = await Tour.findById(id)

        res.status(200).json({
            status: 'success',
            data: {
                tour
            }
        });
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err
        })
    }
};

exports.createTour = async (req, res) => {

    try {
        const newTour = await Tour.create(req.body)
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        });
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err
        })
    }
};

exports.updateTour = async (req, res) => {
    try {
        const { id } = req.params
        const updatedTour = await Tour.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: 'success',
            data: {
                tour: updatedTour
            }
        });
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err
        })
    }
};

exports.deleteTour = async (req, res) => {
    try {
        const { id } = req.params
        const deleteTour = await Tour.findByIdAndDelete(id)
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err
        })
    }
};