import React from "react";
import WinStyles from "./WinCard.module.css";
import Button from "../Button";

export default function WinCard() {

  return (
    <div className={WinStyles.container}>
      <div className={WinStyles.wrapper}>
        <div className={WinStyles.title}>You Won!</div>
        <div className={WinStyles.subtitle}>Congratulations</div>
        < Button />
      </div>
    </div>
  )
};