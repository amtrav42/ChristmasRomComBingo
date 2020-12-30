import React from "react";
import InstructionsStyles from "./Instructions.module.css";

export default function Instructions() {
  return (
    <>
      <div className={InstructionsStyles.heading}>How to Play</div>
      <div className={InstructionsStyles.body}>
        <ol className={InstructionsStyles.list}>
          <li>Select a seasonal Romcom to watch</li>
          <li>Tap each bingo item as they occur during your movie</li>
          <li>The first person to complete their card wins and lives happily ever after</li>
          <li>Everyone else - try again with the sequel</li>
          <li>If no one completes their card the highest number wins</li>
        </ol>
      </div>
    </>
  )
};