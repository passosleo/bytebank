import React from "react";
import "./styles.css";

export default ({
  label,
  type = "text",
  value,
  onChange
}) => {
  return (
    <>
      <label className="label" htmlFor={label}>{label}</label>
      <input className="input" id={label} type={type} value={value} onChange={onChange}></input>
    </>
  );
};