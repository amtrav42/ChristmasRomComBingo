import React from "react";
import BingoCardStyles from "./BingoCard.module.css";
import BingoItemList from "../../data/BingoItemList";
import BingoTitleList from "../../data/bingoCardTitleList";
import BingoItem from "../BingoItem";

export default function BingoCard() {
  // Shuffle array
  const shuffled = BingoItemList.sort(() => 0.5 - Math.random());
  // Get sub-array of first n elements after shuffled
  const selectedContentList = shuffled.slice(0, 9);
  const title = BingoTitleList[Math.floor(Math.random()*BingoTitleList.length)];

  return (
    <div className={BingoCardStyles.container}>
      <div className={BingoCardStyles.title}>{title}</div>
      <div className={BingoCardStyles.wrapper}>
      {
        selectedContentList.map((bingoItemProps) => (
          <BingoItem
            content={bingoItemProps.content} 
            // isChecked
          />
        ))
      }
      </div>
    </div>
  )
};