import { useState } from "react";
import SearchBar from "./SearchBar";
import JobForm from "./JobForm";
import JobFormEdit from "./JobFormEdit";
import JobList from "./JobList";

const JobTracker = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Frontend Engineer", company: "Google", status: "Applied" },
    { id: 2, title: "Software Engineer", company: "Microsoft", status: "Interview" }
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const addJob = (newJob) => {
    setJobs([...jobs, { id: Date.now(), ...newJob }]);
    setIsFormOpen(false);
  };

  const editJob = (updatedJob) => {
    setJobs(jobs.map((job) => (job.id === updatedJob.id ? updatedJob : job)));
    setIsEditOpen(false);
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
    setIsEditOpen(false);
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="job-tracker">
      <header>
        <h1>Job Tracker</h1>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <button className="open-modal-btn" onClick={() => setIsFormOpen(true)}>
          Add Job
        </button>
      </header>
      <JobList jobs={filteredJobs } openEdit={(job) => { setEditingJob(job); setIsEditOpen(true); }} />
      
      {isFormOpen && <JobForm addJob={addJob} closeForm={() => setIsFormOpen(false)} />}
      {isEditOpen && <JobFormEdit job={editingJob} editJob={editJob} deleteJob={deleteJob} closeForm={() => setIsEditOpen(false)} />}
    </div>
  );
};

export default JobTracker;
