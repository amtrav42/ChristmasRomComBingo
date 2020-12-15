import React from "react";
import ScoreStyles from "./Score.module.css";

export default function Score(props) {
  const {
    value
  } = props;
  return (
    <div>
      <div className={ScoreStyles.heading}>Your Score</div>
      <div className={ScoreStyles.background}>{value}</div>
    </div>

  )
};