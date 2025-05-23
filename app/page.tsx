import About from '../about';
import Admissions from '../admissions';
import Contact from '../contact';
import Footer from '../footer';
import Hero from '../hero';
import Navbar from '../navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Admissions />
      <Contact />
      <Footer />
    </>
  );
}
