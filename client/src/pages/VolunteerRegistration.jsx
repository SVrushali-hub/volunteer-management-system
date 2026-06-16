import { useState } from "react";
import "../App.css";
import { Navigate } from "react-router-dom";
function VolunteerRegistration() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState("");
  const [motivation, setMotivation] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [state, setState] = useState("");
  const [college, setCollege] = useState("");
  const [course, setCourse] = useState("");
  const [skills, setSkills] = useState("");
  const [availability, setAvailability] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState("");

  const [previousVolunteerExperience, setPreviousVolunteerExperience] =
    useState(false);

  const [experienceDetails, setExperienceDetails] = useState("");

  const [emergencyContactName, setEmergencyContactName] = useState("");

  const [emergencyContactPhone, setEmergencyContactPhone] = useState("");
  const isAdmin = localStorage.getItem("isAdmin");

  if (isAdmin) {
    return <Navigate to="/admin" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const volunteerData = {
      fullName,
      email,
      phone,
      city,
      areaOfInterest,
      motivation,

      dateOfBirth,
      gender,
      state,
      college,
      course,

      skills: skills.split(",").map((skill) => skill.trim()),

      availability,
      hoursPerWeek,

      previousVolunteerExperience,
      experienceDetails,

      emergencyContactName,
      emergencyContactPhone,
    };

    try {
      const response = await fetch("http://localhost:5000/api/volunteers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(volunteerData),
      });

      const data = await response.json();

      console.log(data);

      alert("Volunteer Registered Successfully!");

      setFullName("");
      setEmail("");
      setPhone("");
      setCity("");
      setAreaOfInterest("");
      setMotivation("");
    } catch (error) {
      console.log(error);
      alert("Registration Failed");
    }
  };

  return (
    <div className="container">
      <h1 className="title">NayePankh Volunteer Registration</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <input
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="input"
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          className="input"
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />

        <select
          className="input"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>

          <option value="Male">Male</option>

          <option value="Female">Female</option>

          <option value="Other">Other</option>
        </select>

        <input
          className="input"
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <input
          className="input"
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="College"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="Course / Profession"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="Skills (comma separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        <select
          className="input"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
        >
          <option value="">Select Availability</option>

          <option value="Weekdays">Weekdays</option>

          <option value="Weekends">Weekends</option>

          <option value="Both">Both</option>
        </select>
        <input
          className="input"
          type="text"
          placeholder="Hours Per Week"
          value={hoursPerWeek}
          onChange={(e) => setHoursPerWeek(e.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="Area Of Interest"
          value={areaOfInterest}
          onChange={(e) => setAreaOfInterest(e.target.value)}
          required
        />
        <select
  className="input"
  onChange={(e) =>
    setPreviousVolunteerExperience(
      e.target.value === "true"
    )
  }
>
  <option value="">
    Select Previous Experience
  </option>

  <option value="true">
    Yes
  </option>

  <option value="false">
    No
  </option>
</select>
        {previousVolunteerExperience && (
  <textarea
    className="textarea"
    placeholder="Describe Previous Experience"
    value={experienceDetails}
    onChange={(e) =>
      setExperienceDetails(e.target.value)
    }
    required
  />
)}
        <textarea
          className="textarea"
          placeholder="Why do you want to volunteer?"
          value={motivation}
          onChange={(e) => setMotivation(e.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="Emergency Contact Name"
          value={emergencyContactName}
          onChange={(e) => setEmergencyContactName(e.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="Emergency Contact Number"
          value={emergencyContactPhone}
          onChange={(e) => setEmergencyContactPhone(e.target.value)}
        />

        <button className="button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default VolunteerRegistration;
