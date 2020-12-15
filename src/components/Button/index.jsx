import React from "react";
import ButtonStyles from "./Button.module.css";

export default function Button() {
  return (
    <div
      className={ButtonStyles.background}
      // eslint-disable-next-line no-restricted-globals
      onClick={() => {location.reload();}}
    >
      Let's do that again!
    </div>
  )
};