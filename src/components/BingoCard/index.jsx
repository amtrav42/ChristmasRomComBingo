import React from "react";
import BingoCardStyles from "./BingoCard.module.css";
import BingoItemList from "../../data/BingoItemList";
import BingoItem from "../BingoItem";

export default function BingoCard() {
  // Shuffle array
  const shuffled = BingoItemList.sort(() => 0.5 - Math.random());
  // Get sub-array of first n elements after shuffled
  const selectedContentList = shuffled.slice(0, 9);

  return (
    <>
      <div className={BingoCardStyles.background}>I'm a bingo card title</div>
      {
        selectedContentList.map((bingoItemProps) => (
          <BingoItem
            content={bingoItemProps.content}
          />
        ))
      }
    </>
  )
};