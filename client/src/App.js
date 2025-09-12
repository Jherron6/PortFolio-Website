import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    fetch('/api/message')
    .then(res => res.json())
    .then(data => console.log(data));
  }, []);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="#home">JH</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button id="darkMode" type="button" aria-label="toggle dark mode"></button>
      </header>

      <main>
        <section id="home">
          <h1><a href="/">Jennifer Herron</a></h1>
          <h2>Full Stack Developer</h2>
          <p>Creasing accessible, responsive interfaces for a user-first experience.</p>
        </section>

        <section id="about">
          <h2>About</h2>
          <p>I am a Full Stack Developer focused on efficient and accessibility. I have a Bachelor of Science in Graphic Information Technology with a concentration in Full Stack from Arizona State University.</p>
          <h3>Skills</h3>
          <ul className="skills-list">
              <div>
                <li>HTML/CSS</li>
                <li>Javascript</li>
                <li>Python</li>
                <li>Java</li>
              </div>
              <div>
                <li>React.js</li>
                <li>Visual Studio Code</li>
                <li>JQuery</li>
                <li>Canva</li>
              </div>
              <div>
                <li>Node.js</li>
                <li>SpringBoot</li>
                <li>SQL</li>
                <li>Git</li>
              </div>
            </ul> 
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <a href="letscarveapumpkin.html">
            <div className="image-frame">
              <img src="images/pumpkinOverview.jpg" alt="Let's Carve A Pumpkin" />
            </div>
            <p>Let's Carve A Pumpkin - Entering the $161 billion dollar mobile game industry to tap into a niche audience.</p>
          </a>
          <a href="nimbusnow.html">
            <div className="image-frame">
              <img src="images/desktopNimbus.jpg" alt="NimbusNow interface" />
            </div>
            <p>NimbusNow - Developing accurate and reliable mainstream alternative to common weather apps.</p>
          </a>
          <a href="bobaguru.html">
            <div className="image-frame">
              <img src="images/guruHome.jpg" alt="Boba Guru homepage" />
            </div>
            <p>Boba Guru - Raising awareness and increasing digital foottraffic for small businesses.</p>
          </a>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>herron.jenniferm@gmail.com</p>
          <div id="mediaLinks">
            <a href="https://github/com/Jherron6">
              <div className="image-frame">
                <img src="images/githubIcon.svg" alt="Github icon" />
              </div>
              <p>GitHub</p>
            </a>
            <a href="www.linkedin.com/in/jennifer-herron-29126a1b0">
              <div className="image-frame">
                <img src="images/linkedinIcon.svg" alt="LinkedIn icon" />
              </div>
              <p>LinkedIn</p>
            </a>
            <a href="https://github/com/Jherron6">
              <div className="image-frame">
                <img src="images/resume Icon.svg" alt="Resume icon" />
              </div>
              <p>Resume</p>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <small>Jennifer &copy; <span id="year">2024</span></small>
      </footer>
    </>
  );
}

export default App;
