import React from "react";
import ScoreStyles from "./Score.module.css";

export default function Score(props) {
  const {
    value
  } = props;
  return (
    <div className={ScoreStyles.background}>{value}</div>
  )
};