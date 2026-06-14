import Volunteer from  "../models/Volunteer.js";

export const registerVolunteer = async (req, res) => {
   try {
    const volunteer = await Volunteer.create(req.body);
    res.status(201).json({
        success: true,
        volunteer
    });
} catch (error) {
    res.status(400).json({
        success: false,
        message: error.message 
    });
}           
};

export const getVolunteers = async (req, res) => {
    try {

        const volunteers = await Volunteer.find();

        res.status(200).json({
            success: true,
            count: volunteers.length,
            volunteers
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};