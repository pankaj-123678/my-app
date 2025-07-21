import React from "react";
// ✔️ Required at top of file where Link is used
import { Link } from "react-router-dom";

export default function Alert(props) {
  return (
   props.alert && <div>
      <div
        className="alert alert-warning alert-dismissible fade show py-3"
        role="alert"
      >
        <strong>{props.alert.type}</strong> :{props.alert.msg}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}
