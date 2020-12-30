import React, { useState } from 'react';
import BingoCardStyles from "./BingoCard.module.css";
import BingoItemList from "../../data/bingoItemList";
import BingoTitleList from "../../data/bingoCardTitleList";
import BingoItem from "../BingoItem";
import Score from "../Score";
import WinCard from "../WinCard";

export default function BingoCard() {
  const [title, setTitle] = useState();
  const [checkedList, setCheckedList] = useState([]);

  const [selectedContentList, setSelectedContentList] = useState([]);
  if ( selectedContentList.length === 0) {
    // Shuffle array
    const shuffled = BingoItemList.sort(() => 0.5 - Math.random());
    // Get sub-array of first 9 elements after shuffled
    setSelectedContentList(shuffled.slice(0, 9));
  }

  return (
    <div className={BingoCardStyles.container}>
      <div className={BingoCardStyles.wrapper}>
      {
        selectedContentList.map((bingoItemProps) => (
          <BingoItem
            key={`bingoItem_${bingoItemProps.id}`}
            content={bingoItemProps.content} 
            isChecked={checkedList.includes(bingoItemProps.id)}
            onClick={() => {
              setCheckedList(
                checkedList.includes(bingoItemProps.id)
                ?
                // removing item from array if it gets clicked on again through filtering
                checkedList.filter(currentID => bingoItemProps.id !== currentID)
                :
                [...checkedList, bingoItemProps.id]
                );
            }}
          />
        ))
      }
      </div>
      <Score 
        value={checkedList.length}
      />
      {
        checkedList.length===selectedContentList.length && (
          <WinCard />
        )
      }

    </div>
  )
};