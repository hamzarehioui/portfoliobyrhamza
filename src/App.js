import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  const handleClick = () => {
    const modal = document.getElementById('myModal')
    modal.style.display = 'none'
  }

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />

      <div
        id='myModal'
        className='modal'
        onClick={handleClick}
        role='none'
        onKeyDown={handleClick}
      >
        <span
          className='close'
          onClick={handleClick}
          onKeyDown={() => {}}
          role='none'
        >
          x
        </span>
        <img className='modal-content' id='img01' alt='' />
      </div>
    </div>
  )
}

export default App
