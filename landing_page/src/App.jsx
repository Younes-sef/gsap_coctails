import gsap from "gsap"
import {ScrollTrigger, SplitText} from "gsap/all"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import { Coctails } from "./components/Coctails"

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {

  return (
  <main>
    <NavBar />
    <Hero />
    <Coctails />
  </main>
  )
}

export default App
