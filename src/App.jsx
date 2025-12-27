import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero id="projects" />
        <Hero id="experience" />
        <Hero id="education" />
        <Hero id="skills" />
      </main>
      <Footer />
    </>
  )
}

export default App
