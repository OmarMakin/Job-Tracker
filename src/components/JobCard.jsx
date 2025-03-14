import React from "react";

const JobCard = ({ job, openEdit }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>Status: {job.status}</p>
      <button className="edit-btn" onClick={() => openEdit(job)}>Edit</button>
    </div>
  );
};

export default JobCard;
