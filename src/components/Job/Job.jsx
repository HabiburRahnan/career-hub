import { FaMapLocationDot } from "react-icons/fa6";
import { PiCurrencyCircleDollarBold } from "react-icons/pi";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] me-4 text-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] me-4 text-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="mt-4 flex gap-4">
          <h2 className="flex  gap-2 text-2xl">
            <FaMapLocationDot></FaMapLocationDot>
            {location}
          </h2>
          <h2 className="flex  gap-2 text-2xl">
            <PiCurrencyCircleDollarBold></PiCurrencyCircleDollarBold>
            {salary}
          </h2>
        </div>
        <div className="card-actions ">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary  bg-gradient-to-r from-violet-500 to-fuchsia-500">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
