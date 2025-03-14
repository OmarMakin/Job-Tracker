import JobCard from "./JobCard";

const JobList = ({ jobs, openEdit }) => {
  return (
    <div className="job-cards">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} openEdit={openEdit} />
      ))}
    </div>
  );
};

export default JobList;
