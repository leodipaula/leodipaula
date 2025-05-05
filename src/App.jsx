import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedinIn, FaSun, FaMoon, FaSpotify, FaEnvelope } from 'react-icons/fa'
import './App.css'

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
    </button>
  )
}

export default function App() {
  const copyEmail = () => {
    navigator.clipboard.writeText('leofernandes9@email.com')
  }

  return (
    <div className="container">
      <header>
        <h1>tudo bem?</h1>
        <nav>
          <a href="#blog">blog</a>
          <a href="#carreira">carreira</a>
        </nav>
        <ThemeToggle />
      </header>

      <div className="grid">
        <div className="card profile">
          <div>
            <h2>sou o Leonardo!</h2>
            <p>e crio aplicações para</p>
            <p>a web com Java e React.</p>
          </div>
          {/* Adicione sua foto aqui */}
        </div>

        <a href="https://github.com/leodipaula" className="card contact" target="_blank" rel="noopener">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/leonardo-fernandes-pf/" className="card contact" target="_blank" rel="noopener">
          <FaLinkedinIn />
        </a>

        <div className="card blog">
          <p>Escrevendo sobre</p>
          <p>minhas experiências e reflexões</p>
          <p>aqui no blog.</p>
        </div>

        <div className="bottom-cards">
          <div className="card study">
            <p>Estudante de</p>
            <p>Engenharia de Ciência e Tecnologia,</p>
            <p>e Ciência da Computação</p>
            <p>na UFABC</p>
          </div>

          <a href="https://open.spotify.com/playlist/4XaLe5Slm4UVW2yWPQlLzC?si=da95d0c4322443dd" className="card spotify" target="_blank" rel="noopener">
            <FaSpotify />
          </a>

          <button className="card email" onClick={copyEmail}>
            <FaEnvelope />
          </button>
        </div>
      </div>
    </div>
  )
}