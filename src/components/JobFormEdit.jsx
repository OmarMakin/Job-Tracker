import { useState } from "react";

const JobFormEdit = ({ job, editJob, deleteJob, closeForm }) => {
  const [updatedJob, setUpdatedJob] = useState({ ...job });

  const handleChange = (e) => {
    setUpdatedJob({ ...updatedJob, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editJob(updatedJob);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit Job</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" value={updatedJob.title} onChange={handleChange} required />
          <input type="text" name="company" value={updatedJob.company} onChange={handleChange} required />
          <select name="status" value={updatedJob.status} onChange={handleChange} required>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Rejected">Rejected</option>
          </select>
          <div class="button-container" >
            <button type="submit">Save</button>
            <button type="button" className="delete-btn" onClick={() => deleteJob(job.id)}>Delete</button>
            <button type="button" className="close-btn" onClick={closeForm}>Close</button>
  
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobFormEdit;
