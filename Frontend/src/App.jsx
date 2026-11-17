import Boost from "./components/Boost/Boost"
import Footer from "./components/footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Statistics from "./components/Statistics/Statistics"
import "./shared/global.css"

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Statistics />
      <Boost />
      <Footer />
    </>
  )
}

export default App