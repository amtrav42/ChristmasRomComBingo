import React from "react";
import BingoItemStyles from "./BingoItem.module.css";

export default function BingoItem(props) {
  const {
    content,
    isChecked,
    onClick
  } = props;
  return (
    <div 
      className={`${BingoItemStyles.card} ${isChecked ? BingoItemStyles.isChecked : ""}`}
      onClick={onClick}
    >
      
      {content}
    </div>
  )
};