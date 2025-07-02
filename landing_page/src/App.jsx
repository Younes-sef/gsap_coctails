import gsap from "gsap"
import {ScrollTrigger, SplitText} from "gsap/all"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import { Coctails } from "./components/Coctails"
import { About } from "./components/About"
import { Art } from "./components/Art"

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {

  return (
  <main>
    <NavBar />
    <Hero />
    <Coctails />
    <About />
    <Art />
  </main>
  )
}

export default App
