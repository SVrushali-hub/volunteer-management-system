import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import "../App.css";

function Admin() {
  const [volunteers, setVolunteers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    fetchVolunteers();
  }, []);

  const fetchVolunteers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/volunteers");

      const data = await response.json();

      console.log("VOLUNTEER RESPONSE:", data);

      setVolunteers(data.volunteers || []);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteVolunteer = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this volunteer?",
    );

    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:5000/api/volunteers/${id}`, {
        method: "DELETE",
      });

      fetchVolunteers();
    } catch (error) {
      console.log(error);
    }
  };

  const approveVolunteer = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/volunteers/${id}/approve`, {
        method: "PUT",
      });

      fetchVolunteers();
    } catch (error) {
      console.log(error);
    }
  };

  const rejectVolunteer = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/volunteers/${id}/reject`, {
        method: "PUT",
      });

      fetchVolunteers();
    } catch (error) {
      console.log(error);
    }
  };
  const isAdmin = localStorage.getItem("isAdmin");

  if (!isAdmin) {
    return <Navigate to="/login" />;
  }
 return (
  <div className="admin-container">
    <h1 className="title">Admin Dashboard</h1>

    <h2>Total Volunteers: {volunteers.length}</h2>

    <input
      className="input"
      type="text"
      placeholder="Search Volunteer By Name"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <table className="volunteer-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {volunteers
          .filter((volunteer) =>
            volunteer.fullName
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .map((volunteer) => (
            <tr key={volunteer._id}>
              <td>{volunteer.fullName}</td>

              <td>{volunteer.email}</td>

              <td>{volunteer.city}</td>

              <td>
                <span
                  className={
                    volunteer.status === "Approved"
                      ? "approved"
                      : volunteer.status === "Rejected"
                      ? "rejected"
                      : "pending"
                  }
                >
                  {volunteer.status}
                </span>
              </td>

              <td>
                <button
                  className="view-btn"
                  onClick={() => {
                    setSelectedVolunteer(volunteer);
                    setShowModal(true);
                  }}
                >
                  View
                </button>

                <button
                  className="delete-button"
                  onClick={() =>
                    deleteVolunteer(volunteer._id)
                  }
                >
                  Delete
                </button>

                {volunteer.status === "Pending" && (
                  <>
                    <button
                      className="approve-button"
                      onClick={() =>
                        approveVolunteer(
                          volunteer._id
                        )
                      }
                    >
                      Approve
                    </button>

                    <button
                      className="reject-button"
                      onClick={() =>
                        rejectVolunteer(
                          volunteer._id
                        )
                      }
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </table>

    {showModal && selectedVolunteer && (
      <div className="modal-overlay">
        <div className="modal-content">
          <button
            className="close-btn"
            onClick={() =>
              setShowModal(false)
            }
          >
            ✖
          </button>

          <h2>Volunteer Details</h2>

          <p>
            <strong>Name:</strong>{" "}
            {selectedVolunteer.fullName}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {selectedVolunteer.email}
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            {selectedVolunteer.phone}
          </p>

          <p>
            <strong>Date Of Birth:</strong>{" "}
            {selectedVolunteer.dateOfBirth}
          </p>

          <p>
            <strong>Gender:</strong>{" "}
            {selectedVolunteer.gender}
          </p>

          <p>
            <strong>City:</strong>{" "}
            {selectedVolunteer.city}
          </p>

          <p>
            <strong>State:</strong>{" "}
            {selectedVolunteer.state}
          </p>

          <p>
            <strong>College:</strong>{" "}
            {selectedVolunteer.college}
          </p>

          <p>
            <strong>Course:</strong>{" "}
            {selectedVolunteer.course}
          </p>

          <p>
            <strong>Area Of Interest:</strong>{" "}
            {selectedVolunteer.areaOfInterest}
          </p>

          <p>
            <strong>Skills:</strong>{" "}
            {selectedVolunteer.skills?.join(
              ", "
            )}
          </p>

          <p>
            <strong>Availability:</strong>{" "}
            {selectedVolunteer.availability}
          </p>

          <p>
            <strong>Hours Per Week:</strong>{" "}
            {selectedVolunteer.hoursPerWeek}
          </p>

          <p>
            <strong>Motivation:</strong>{" "}
            {selectedVolunteer.motivation}
          </p>

          <p>
            <strong>
              Previous Experience:
            </strong>{" "}
            {selectedVolunteer.previousVolunteerExperience
              ? "Yes"
              : "No"}
          </p>

          {selectedVolunteer.previousVolunteerExperience && (
            <p>
              <strong>
                Experience Details:
              </strong>{" "}
              {
                selectedVolunteer.experienceDetails
              }
            </p>
          )}

          <p>
            <strong>
              Emergency Contact:
            </strong>{" "}
            {
              selectedVolunteer.emergencyContactName
            }
          </p>

          <p>
            <strong>
              Emergency Number:
            </strong>{" "}
            {
              selectedVolunteer.emergencyContactPhone
            }
          </p>
        </div>
      </div>
    )}
  </div>
);
}

export default Admin;
