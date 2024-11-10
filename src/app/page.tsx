import Hero from "@/components/hero"
import About from "@/components/about"
import Contact from "@/components/contact"
import Fotter from "@/components/fotter"
import Navbar from "@/components/navbar"


function Home(){
  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Contact/>
      <Fotter/>


    </div>
  )
}

export default Home
