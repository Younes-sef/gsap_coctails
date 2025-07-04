import gsap from "gsap"
import {ScrollTrigger, SplitText} from "gsap/all"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import { Coctails } from "./components/Coctails"
import { About } from "./components/About"
import { Art } from "./components/Art"
import { Menu } from "./components/Menu"
import Contact from "./components/Contact"

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {

  return (
  <main>
    <NavBar />
    <Hero />
    <Coctails />
    <About />
    <Art />
    <Menu />
    <Contact />
  </main>
  )
}

export default App
