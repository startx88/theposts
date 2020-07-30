import React from "react";

export default (props) => {
  return (
    <footer className="bg-info text-center text-light p-3">
      <div className="container">
        <p className="mb-0">
          &copy; - {new Date().getFullYear()}, All rights reserved. Powered by
          LearnUi.com
        </p>
      </div>
    </footer>
  );
};
