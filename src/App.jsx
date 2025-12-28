import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ScrollBack from './components/ScrollBack'
import WorkExperience from './components/WorkExperience'
import DownloadCv from './components/DownloadCv'
import Education from './components/Education'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Hero id="projects" />
        <WorkExperience id="experience" />
        <div className="my-container">
          <DownloadCv />
        </div>
        <Education id="education" />
        <Skills id="skills" />
        <ScrollBack />
      </main>
      <Footer />
    </>
  )
}

export default App
