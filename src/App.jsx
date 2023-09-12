import { useState } from "react";
import "./App.css";

function App() {
  const projects = [
    {
      img: "Picture2.png",
      name: "Bookmark landing page",
      tech: "HTML CSS JS ",
      link: "https://github.com/John-Cedrick-Guevara/bookmark-landing-page",
    },
    {
      img: "adviceGenerator.png",
      name: "Advice generator app",
      tech: "HTML CSS JS API",
      link: "https://github.com/John-Cedrick-Guevara/Advice-generator",
    },
    {
      img: "sunnysideLandingPage.png",
      name: "Sunnyside agency landing page",
      tech: "HTML CSS JS ",
      link: "https://github.com/John-Cedrick-Guevara/sunnyside-agency-landing-page-main",
    },
    {
      img: "mastercraftlandingPage.png",
      name: "Crowdfunding product page",
      tech: "HTML CSS JS ",
      link: "https://github.com/John-Cedrick-Guevara/crowdfunding-product-page-main",
    },
    {
      img: "easybankLandingPage.png",
      name: "Easybank landing page",
      tech: "HTML CSS JS ",
      link: "https://github.com/John-Cedrick-Guevara/easybank-landing-page-master",
    },
    {
      img: "meme-generator.png",
      name: "Meme Generator",
      tech: "HTML CSS JS API",
      link: "https://github.com/John-Cedrick-Guevara/meme-generator",
    },
    {
      img: "multi-step-project.png",
      name: "Multi-step form",
      tech: "HTML CSS JS ",
      link: "https://github.com/John-Cedrick-Guevara/multi-step-form-main",
    },
    {
      img: "todo-project.png",
      name: "Todo app",
      tech: "HTML CSS JS",
      link: "https://github.com/John-Cedrick-Guevara/Todo-app",
    },
  ];

  const [showNav, setShowNav] = useState(false);

  return (
    <main>
      <nav>
        <h1 className="logo">Ced</h1>

        <img
          onClick={() => setShowNav((prev) => !prev)}
          className="menu-btn"
          src="../images/menu.png"
          alt=""
        />

        <div className="desktop-nav">
          
          <a href="#tech">Tecnologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        {showNav && (
          <div className="mobile-nav">
            
            <a href="#tech">Tecnologies</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </nav>

      <section id="home" className="main-hero-container">
        <img className="hero-img" src="./images/me.png" alt="" />

        <div className="hero-texts">
          <h1>
            Nice to meet you! I'am <span>John Cedrick</span>
          </h1>
          <p>
            17-year-old Filipino aspiring front-end developer passionate about
            building accessible websites
          </p>
        </div>
      </section>

      <hr id="tech" />

      <section className="experience">
        <div>
          <h1>html</h1>
          <h5>1 year Experience</h5>
        </div>
        <div>
          <h1>css</h1>
          <h5>1 year Experience</h5>
        </div>
        <div>
          <h1>js</h1>
          <h5>1 year Experience</h5>
        </div>
        <div>
          <h1>react.js</h1>
          <h5>5 months Experience</h5>
        </div>
      </section>

      <hr />

      <section id="projects" className="projects">
        <h1 className="heading">projects</h1>

        <div className="projects-container">
          {projects.map((item, index) => (
            <div key={index} className="project">
              <img
                className="project-img"
                src={`../images/${item.img}`}
                alt=""
              />
              <h2 className="project-name">{item.name}</h2>
              <h4 className="project-tech">{item.tech}</h4>

              <a href={item.link}>view code</a>
            </div>
          ))}
        </div>
      </section>

      <hr id="about" />

      <section id="about" className="about">
        <div className="about-image-container">
          <img className="about-image" src="../images/about-pic.png" alt="" />
          <div className="image-bg"></div>
        </div>

        <div className="about-texts">
          <h1>About Me</h1>

          <p>
            I am John Cedrick B. Guevara, an aspiring front-end developer. I am
            17 years old and from the Philippines. Currently undertaking Grade
            12 under TVL-ICT. I've spent the past 2 years learning about
            front-end development, but as of now I have no experience working
            with other developers or working on customer projects; I've only
            finished simple projects. As you can see in the projects part of my
            portfolio, most of the projects are from{" "}
            <a href="https://www.frontendmentor.io/home">FrontEndmentor.io</a>.
            And now I am trying to land a part-time job to gain experience and
            expand my knowledge in front-end development.
          </p>
        </div>
      </section>

      <hr />

      <section id="contact" className="contact">
        <h1>Contacts</h1>
        <p>
          I would love to hear about your project and how I could help. Please
          message me on my socials, and I'ill get back to you as soon as
          possible.
        </p>

        <div className="socials">
          <a href="https://www.facebook.com/johncedrick.guevara.1">
            <img src="../images/icons8-facebook.svg" alt="" />
          </a>
          <a href="https://www.instagram.com/jhncdrckgvr/?fbclid=IwAR3Ba80xGR6BOz9gYIxgGDRGPoVGgiQFo1cH2ZQ93gTa5O6sU0kGeoaP1u4">
            <img src="../images/icons8-instagram.svg" alt="" />
          </a>
          <a href="https://mail.google.com/mail/u/0/#sent?compose=DmwnWrRttNjBrfnTqvtxFWlwPtTtptKfBnCrKxfNKRjqxlSRBgsPGfDWWLwKbQzXFTwftSjldfKG">
            <img src="../images/icons8-email-50.png" alt="" />
          </a>

          <a href="https://www.linkedin.com/in/john-cedrick-guevara-66381027b/">
            <img src="../images/icons8-linkedin.svg" alt="" />
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
