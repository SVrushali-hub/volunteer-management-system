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

export const deleteVolunteer = async (req, res) => {
  try {

    const volunteer = await Volunteer.findByIdAndDelete(
      req.params.id
    );

    if (!volunteer) {
      return res.status(404).json({
        success: false,
        message: "Volunteer not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Volunteer deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const approveVolunteer = async (req, res) => {
  const volunteer = await Volunteer.findById(req.params.id);

  if (volunteer.status !== "Pending") {
    return res.status(400).json({
      success: false,
      message: "Volunteer already processed",
    });
  }

  volunteer.status = "Approved";
  await volunteer.save();

  res.status(200).json({
    success: true,
    volunteer,
  });
};
  export const rejectVolunteer = async (req, res) => {
    try {
      const volunteer = await Volunteer.findByIdAndUpdate(
        req.params.id,
        {
          status: "Rejected",
        },
        {
          new: true,
        }
      );

      res.status(200).json({
        success: true,
        volunteer,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message,
      });

    }
  };