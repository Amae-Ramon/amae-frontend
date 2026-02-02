import Nav from "./Cx/Layout/Nav";
import Hero from "./Cx/Sections/Hero";
import Curated from "./Cx/Sections/Curated";
import Pillars from "./Cx/Sections/Pillars";
import HowItWorks from "./Cx/Sections/HowItWorks";
import Philosophy from "./Cx/Sections/Philosophy";
import Vendors from "./Cx/Sections/Vendors";
import Personal from "./Cx/Sections/Personal";
import Quote from "./Cx/Sections/Quote";
import Footer from "./Cx/Sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Curated />
      <Pillars />
      <HowItWorks />
      <Philosophy />
      <Vendors />
      <Personal />
      <Quote />
      <Footer />
    </main>
  );
}
