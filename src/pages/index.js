import React from "react"
import Header from "../components/Header"
import BingoCard from "../components/BingoCard";
import Button from "../components/Button"
import Footer from "../components/Footer";
import '../styles/reset.css';
import '../styles/global.css';

export default function Home() {
  return (
    <>
      <Header />
      <BingoCard />
      <Button />
      <Footer />
    </>
  );
}
