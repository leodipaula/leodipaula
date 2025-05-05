import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedinIn, FaSun, FaMoon, FaSpotify, FaEnvelope, FaExternalLinkAlt, FaCheck } from 'react-icons/fa'
import './App.css'

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
    </button>
  )
}

export default function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText('leofernandes9@email.com');
    setIsFlipped(true);
    setTimeout(() => setIsFlipped(false), 2000);
  };

  return (
    <div className="container">
      <header>
        <h1>Olá, tudo bem?</h1>
        <nav>
          <a href="#blog">blog</a>
          <a href="#carreira">carreira</a>
        </nav>
        <ThemeToggle />
      </header>

      <div className="grid">
        <div className="card profile">
          <div>
            <h2>Sou o Leonardo!</h2>
            <p>e crio aplicações para</p>
            <p>a web com Java e React.</p>
          </div>
          <div className="profile-image">
            <img src="src\assets\Leonardo.jpg" alt="" />
          </div>
        </div>

        <a href="https://github.com/leodipaula" className="card contact" target="_blank" rel="noopener">
          <FaGithub />
          <FaExternalLinkAlt className="external-link" />
        </a>

        <a href="https://www.linkedin.com/in/leonardo-fernandes-pf/" className="card contact" target="_blank" rel="noopener">
          <FaLinkedinIn />
          <FaExternalLinkAlt className="external-link" />
        </a>

        <div className="card blog">
          <p>Escrevendo sobre</p>
          <p>minhas experiências e reflexões</p>
          <p>técnicas ou do mundo da tecnologia</p>
          <p>aqui no blog.</p>
          <img src="src\assets\anya ponteiro (1).png" alt="" className="blog-image" />
        </div>

        <div className="bottom-cards">
          <div className="card study">
            <p>Estudante de</p>
            <p>Ciência e Tecnologia,</p>
            <p>e Ciência da Computação</p>
            <p>na UFABC</p>
            <img src="src\assets\Ufabc_logo.png" alt="" className="study-image" />
          </div>

          <a href="https://open.spotify.com/playlist/4XaLe5Slm4UVW2yWPQlLzC?si=da95d0c4322443dd" className="card spotify" target="_blank" rel="noopener">
            <FaSpotify />
            <FaExternalLinkAlt className="external-link" />
          </a>

          <div className="email-container">
            <button
              className={`card email ${isFlipped ? 'flipped' : ''}`}
              onClick={copyEmail}
            >
              <div className="email-inner">
                <div className="email-front">
                  <FaEnvelope />
                </div>
                <div className="email-back">
                  <div className="email-back-content">
                    <FaCheck className="check-icon" />
                    <span>Email copiado!</span>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}