import React from "react";

function Input({ label, name, onChange, type, ...rest }) {
  return (
    <div className="mb-3">
      {label ? (
        <label htmlFor={name} className="form-label">
          {label}
        </label>
      ) : null}
      <input
        className="form-control"
        onChange={onChange}
        type={type}
        id={name}
        name={name}
        {...rest}
      />
    </div>
  );
}

export default Input;
