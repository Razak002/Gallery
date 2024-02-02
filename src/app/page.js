"use client"
import { useState, useEffect } from "react";
import { queryHomePage } from "./services";
import Navbar from "./componenets/Navbar";
import Hero from './componenets/Hero'
import Cta from './componenets/Cta'
import Questions from './componenets/Questions'
import Footer from './componenets/Footer'
import Services from "./componenets/Services";
import BlogCard from "./componenets/BlogCard";


export default function Home() {
  const [data, setData] = useState()

  useEffect(() => {
    getHeroData();
  }, []);

  const getHeroData = async () => {
    const res = await queryHomePage();
    setData(res);
    return;
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero data={data?.heroes[0]} />
      <Services data={data?.offers} />
      <BlogCard data={data?.blogs} />
      <Cta data={data?.ctas }/>
      <Questions />
      <Footer />
    </main>
  );
};


