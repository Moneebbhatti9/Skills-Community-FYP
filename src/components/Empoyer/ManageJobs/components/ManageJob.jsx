import React from "react";
import { Link } from "react-router-dom";
import { CgBriefcase } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
import moment from "moment";

const ManageJob = ({ job }) => {
   const createdAt = moment(job.createdAt).format("MMMM D, YYYY");
   const expierdAt = moment(job.applicationDeadLine).format("MMMM D, YYYY");

   return (
      <>
         {" "}
         <tr style={{ height: "1rem", marginTop: "20px" }}>
            <td>
               <div className="d-flex justify-content-start">
                  <div>
                     <img src={job.imageUrl} width="60px" alt="" />
                  </div>
                  <div
                     style={{
                        marginLeft: "1rem",
                     }}
                  >
                     <h4>
                        <Link
                           style={{
                              textDecoration: "none",
                              fontSize: "18px",
                           }}
                        >
                           {job.jobTitle}
                        </Link>
                     </h4>
                     <div className="d-flex justify-content-start">
                        <div>
                           <CgBriefcase /> Segment
                        </div>
                        <div
                           style={{
                              marginLeft: "1rem",
                           }}
                        >
                           <GoLocation /> {job.city} , {job.country}
                        </div>
                     </div>
                  </div>
               </div>
            </td>
            <td> <Link to={`/job/applicants/${job._id}`}> 3+ Applied </Link></td>
            <td>
               <span>{createdAt}</span>
               <br />
               <span>{expierdAt}</span>
            </td>
            <td className="text-success">Active</td>
            <td>
               <div className="d-flex justify-content-around">
                  <div className="btn btn-primary">view</div>
                  <div className="btn btn-danger">delete</div>
               </div>
            </td>
         </tr>
      </>
   );
};

export default ManageJob;
