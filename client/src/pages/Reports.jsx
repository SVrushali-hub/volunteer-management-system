import { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { Navigate } from "react-router-dom";
function Reports() {
    const isAdmin = localStorage.getItem("isAdmin");

if (!isAdmin) {
  return <Navigate to="/login" />;
}
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetchVolunteers();
  }, []);

const fetchVolunteers = async () => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/volunteers"
    );

    const data = await response.json();

    console.log(data);

    setVolunteers(data.volunteers || []);
  } catch (error) {
    console.log(error);
  }
};
  const approved = volunteers.filter(
    (v) => v.status === "Approved"
  ).length;

  const pending = volunteers.filter(
    (v) => v.status === "Pending"
  ).length;

  const rejected = volunteers.filter(
    (v) => v.status === "Rejected"
  ).length;

  return (
    <div className="container">

      <h1 className="title">
        Reports Dashboard
      </h1>

      <div className="report-card">
        <h2>Total Volunteers</h2>
        <h3>{volunteers.length}</h3>
      </div>

      <div className="report-card">
        <h2>Approved</h2>
        <h3>{approved}</h3>
      </div>

      <div className="report-card">
        <h2>Pending</h2>
        <h3>{pending}</h3>
      </div>

      <div className="report-card">
        <h2>Rejected</h2>
        <h3>{rejected}</h3>
      </div>
    <CSVLink
  data={volunteers}
  filename="volunteers-report.csv"
  className="csv-button"
>
  Download CSV Report
</CSVLink>
    </div>
  );
}

export default Reports;