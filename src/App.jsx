import AwesomeCard from "./components/AwesomexCard/AwesomeCard"
import Dark from "./components/Dark/Dark"
import Hero from "./components/HeroSection/Hero"
import NavBar from "./components/NavBar/NavBar"
import AOS from 'aos';
import 'aos/dist/aos.css'; //import the css file
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init(); // initialize the library
  }, []);
  return (
    <div className="App">
      <NavBar/>
      <Hero />
      <AwesomeCard />
      <Dark />
    </div>
  )
}

export default App
