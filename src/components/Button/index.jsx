import React from "react";
import "./styles.css";

export default ({ title = "ok", onClick }) => {
  return (
    <button className="button" onClick={onClick}>{title}</button>
  );
};