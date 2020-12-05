import React from "react";
import BingoItemStyles from "./BingoItem.module.css";

export default function BingoItem(props) {
  const {
    content,
  } = props;
  return (
    <div className={BingoItemStyles.card}>{content}</div>
  )
};