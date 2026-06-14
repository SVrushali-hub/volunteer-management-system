import mongoose from 'mongoose';
const volunteerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    phone: {
        type: String,
        required: true,
        trim: true
    },

    city: {
        type: String,
        required: true,
        trim: true
    },

    areaOfInterest: {
        type: String,
        required: true,
    },

    motivation: {
        type: String,
        required: true,
    }
}, { timestamps: true
});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);
export default Volunteer;