import React from "react";
import NavItem from "../Components/NavItem";
import { withRouter } from "react-router-dom";
const Post = ({ data, match, deleted }) => {
  return (
    <div className="col-sm-4">
      <div className="card">
        <div className="card-img">
          <img src={data.image} alt={data.title} className="card-img-top" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p>{data.body}</p>

          <div className="d-flex justify-content-center">
            <NavItem
              href={`${match.path}/edit/${data.id}?editing=true`}
              className="btn btn-sm btn-info"
            >
              Edit
            </NavItem>
            <NavItem
              href={`${match.path}/${data.id}`}
              className="btn btn-sm btn-danger ml-2 mr-2"
            >
              Detail
            </NavItem>
            <button onClick={deleted} className="btn btn-sm btn-primary">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Post);
