import { useState } from "react";

const JobForm = ({ addJob, closeForm }) => {
  const [job, setJob] = useState({ title: "", company: "", status: "" });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!job.title || !job.company || !job.status) return;
    addJob(job);
    setJob({ title: "", company: "", status: "" });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Job</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Job Title" onChange={handleChange} required />
          <input type="text" name="company" placeholder="Company" onChange={handleChange} required />
          <select name="status" onChange={handleChange} required>
            <option value="">Select Status</option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Rejected">Rejected</option>
          </select>
          <div class="button-container" >
            <button type="submit">Add</button>
            <button type="button" className="close-btn" onClick={closeForm}>Close</button>

            </div>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
