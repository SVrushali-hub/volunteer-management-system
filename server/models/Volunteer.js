import mongoose from "mongoose";
const volunteerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  phone: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  state: {
    type: String,
  },

  gender: {
    type: String,
  },

  college: {
    type: String,
  },

  course: {
    type: String,
  },

  areaOfInterest: {
    type: String,
    required: true,
  },

  skills: [{
    type: String,
  }],

  availability: {
    type: String,
    enum: ["Weekdays", "Weekends", "Both"],
  },

  hoursPerWeek: {
    type: String,
  },

  motivation: {
    type: String,
    required: true,
  },

  previousVolunteerExperience: {
    type: Boolean,
    default: false,
  },

  experienceDetails: {
    type: String,
  },

  emergencyContactName: {
    type: String,
  },

  emergencyContactPhone: {
    type: String,
  },

  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
  },

}, { timestamps: true });

const Volunteer = mongoose.model("Volunteer", volunteerSchema);
export default Volunteer;
