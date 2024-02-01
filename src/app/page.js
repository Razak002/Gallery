"use client"
import { useState, useEffect } from "react";
import { Blogs, heroSection, offerList } from "./services";
import Navbar from "./componenets/Navbar";
import Hero from './componenets/Hero'
import Cta from './componenets/Cta'
import Questions from './componenets/Questions'
import Footer from './componenets/Footer'
import Services from "./componenets/Services";
import BlogCard from "./componenets/BlogCard";


export default function Home() {
  const [data, setData] = useState()
  const [offer, setOffer] = useState()
  const [blog , setBlog] = useState()

  console.log(data)


  useEffect(() => {
    getHeroData();
  }, []);

  const getHeroData = async () => {
    const res = await heroSection();
    const offerRes = await offerList();
    const blogres = await Blogs ();

    setBlog(blogres)
    setOffer(offerRes)
    setData(res);
    return;
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero data={data?.heroes[0]} />
      <Services data={offer} />
      <BlogCard data={blog} />
      <Cta />
      <Questions />
      <Footer />
    </main>
  );
};


