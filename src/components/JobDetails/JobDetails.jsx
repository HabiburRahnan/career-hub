import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const information = job.contact_information;
  console.log(job);
  return (
    <div className="mb-20">
      <h1 className="text-6xl font-extrabold text-center py-44">
        Job Details <br /> {job.job_title}
      </h1>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3 text-lg gap-5">
          <p>
            <span className="text-xl font-bold">Job Description: </span>
            {job.job_description}
          </p>
          <p>
            <span className="text-xl font-bold mt-5">Job Responsibility: </span>
            {job.job_responsibility}
          </p>
          <p>
            <span className="text-xl  font-bold">
              Educational Requirements:{" "}
            </span>
            {job.educational_requirements}
          </p>
          <p>
            <span className="text-xl font-bold">Experiences: </span> <br />
            {job.experiences}
          </p>
        </div>
        <div className="border gap-5">
          <div>
            <h2 className="text-xl font-bold mt-5">Job Details</h2>
            <h3>Salary: {job.salary}</h3>
            <h3>Job Title: {job.job_title}</h3>
          </div>

          <div>
            <h2 className="text-xl  mt-5 font-bold">Contact Information</h2>
            <h3>Phone: {information.phone}</h3>
            <h3>Email: {information.email}</h3>
            <h3>Address: {information.address}</h3>
          </div>
          <button className="btn mt-8 btn-primary w-full">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
