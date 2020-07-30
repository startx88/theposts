import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Axios from "axios";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const PostEdit = (props) => {
  const isEdit = useQuery().get("editing");
  const [values, setValues] = useState({
    title: "",
    image: "",
    body: "",
  });
  const [error, setError] = useState(null);
  const [touch, setTouch] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setTouch((prevTouch) => {
      if (value.trim() !== "") {
        return true;
      } else {
        return false;
      }
    });
    setValues({
      ...values,
      [name]: value,
    });
  };

  // submit handler
  const submitHandler = async (e) => {
    e.preventDefault();
    if (values.title.trim() === "" && values.body === "") {
      setError("Title and body field are required!");
      return;
    }

    setError(null);
    const response = await Axios.post("/api/posts", values);
    if (response.status === 201) {
      props.history.push("/posts", { state: response.data });
    }
  };

  return (
    <div className="posts">
      <h1>{isEdit ? "Update" : "Add"} Post</h1>
      <hr />
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className={[
                  "form-control",
                  touch && error && "is-invalid",
                  touch && !error && "is-valid",
                ].join(" ")}
                name="title"
                value={values.title}
                onChange={changeHandler}
              />
            </div>
            <div className="form-group">
              <label>Image</label>
              <input
                type="text"
                className="form-control"
                name="image"
                value={values.image}
                onChange={changeHandler}
              />
            </div>
            <div className="form-group">
              <label>Body</label>
              <textarea
                className="form-control"
                name="body"
                value={values.body}
                onChange={changeHandler}
              ></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-info">
                {isEdit ? "Update" : "Add"} Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostEdit;
