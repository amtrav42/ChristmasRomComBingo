import React from "react";
import BingoCardStyles from "./BingoCard.module.css";
import BingoItem from "../BingoItem";

export default function BingoCard() {
  return (
    <>
      <div className={BingoCardStyles.background}>I'm a bingo card</div>
      <BingoItem />
    </>
  )
};