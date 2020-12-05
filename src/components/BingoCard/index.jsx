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
    <div className={BingoCardStyles.container}>
      <div className={BingoCardStyles.title}>I'm a bingo card title</div>
      <div className={BingoCardStyles.wrapper}>
      {
        selectedContentList.map((bingoItemProps) => (
          <BingoItem
            content={bingoItemProps.content}
          />
        ))
      }
      </div>
    </div>
  )
};