import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ScrollBack from './components/ScrollBack'
import WorkExperience from './components/WorkExperience'
import DownloadCv from './components/DownloadCv'
import Education from './components/Education'
import Skills from './components/Skills'
import Languages from './components/Languages'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <Projects id="projects" /> */}
        <WorkExperience id="experience" />
        <div className="my-container">
          <DownloadCv />
        </div>
        <Education id="education" />
        <Skills id="skills" />
        <Languages />
        <ScrollBack />
      </main>
      <Footer />
    </>
  )
}

export default App
