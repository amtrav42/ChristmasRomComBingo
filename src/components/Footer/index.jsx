import React from "react";
import FooterStyles from "./Footer.module.css";
import {
  FaHeart,
  FaCss3Alt,
  FaAws,
} from 'react-icons/fa';
import { GrGatsbyjs } from 'react-icons/gr';

export default function Footer() {
  return (
  <div className={FooterStyles.container}>
    <p className={FooterStyles.acknowledgement}>
      Christmas RomCom Bingo would like to acknowledge the Traditional Custodians of the lands
      on which this website was created, is hosted and is viewed.
      This website was created on the lands of the Boon Wurrung and Woiwurrung (Wurundjeri)
      peoples of the Kulin Nation. We pay respects to their Elders past, present and emerging,
      and acknowledge them as the original inspiring and ongoing contributors to STEM
      and storytelling in Australia.
    </p>
    <p className={FooterStyles.footer}>
      Thank you for visiting this very silly website thrown together for the 2020 Gatsby Silly Site Competition. 
      <br />
      {'Made with '}
      <span className={FooterStyles.icons}>
        <FaHeart />
        {' '}
        <GrGatsbyjs />
        {' '}
        <FaCss3Alt />
        {' '}
        <FaAws />
        {' '}
      </span>
      in Melbourne by
      <a href="https://twitter.com/amaltr42" target="_blank" rel="noreferrer"> Amelia</a>
      <br />
      {`Copyright ${(new Date()).getFullYear()} Amelia.`}
    </p>
  </div>
  )
};