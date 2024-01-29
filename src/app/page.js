"use client"
import { useState, useEffect } from "react";
import { heroSection } from "./services";
import Navbar from "./componenets/Navbar";
import Hero from './componenets/Hero'
import Blog from './componenets/Blog'
import Cta from './componenets/Cta'
import Questions from './componenets/Questions'
import Footer from './componenets/Footer'
import Services from "./componenets/Services";


export default function Home() {
  const [data, setData] = useState()

  useEffect(() => {
    getHeroData();
  }, []);

  const getHeroData = async () => {
    const res = await heroSection();
    setData(res);
    return;
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero data={data?.heroes[0]} />
      <Services />
      <Blog />
      <Cta />
      <Questions />
      <Footer />
    </main>
  );
};


