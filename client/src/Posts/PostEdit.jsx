import React, { useState } from "react";

const PostEdit = (props) => {
  const [values, setValues] = useState({
    title: "",
    image: "",
    body: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="posts">
      <h1>Add Post</h1>
      <hr />
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <form>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
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
                Add Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostEdit;
