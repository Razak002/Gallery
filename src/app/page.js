
import Navbar from "./componenets/Navbar";
import Hero from './componenets/Hero'
import Blog from './componenets/Blog'
import BlogCard from './componenets/BlogCard'
import Cta from './componenets/Cta'
import Questions from './componenets/Questions'
import Footer from './componenets/Footer'
import Services from "./componenets/Services";


export default function Home() {
  return (
    <main className="">
    <Navbar />
      <Hero />
      <Services />
      <Blog />
  
      <Cta />
      <Questions />
      <Footer />
    </main>
  );
}


