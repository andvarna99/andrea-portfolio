import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col, Navbar, Nav, Button, Modal, Tab, Tabs } from 'react-bootstrap';
import { FaReact, FaDatabase, FaCloud, FaGithub, FaLinkedin, FaEnvelope, FaServer, FaMobile, FaExternalLinkAlt, FaDownload, FaCogs, FaCode, FaRoad, FaHeart } from 'react-icons/fa';

const IconWrapper = ({ Icon, className }: { Icon: any; className?: string }) => (
  <Icon className={className} />
);

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const projects = [
    {
      id: 1,
      title: "Government CMS Redesign",
      shortDesc: "Led the redesign and implementation of an internal CMS for a government agency using Contentful, HAML, SCSS, and Rails which streamlined content workflows.",
      image: "CMS Platform",
      technologies: ["Rails", "Contentful", "HAML", "SCSS"],
      link: "https://elevatesystems.com/",
      linkText: "Website",
      linkIcon: "external",
      challenges: [
        "Redesigning legacy content management workflows for government compliance",
        "Integrating modern headless CMS with existing Rails infrastructure",
        "Ensuring seamless migration without disrupting ongoing operations",
        "Building intuitive interfaces for non-technical government users"
      ],
      solutions: [
        "Implemented Contentful as headless CMS with custom Rails integration layer",
        "Created modular HAML templates with SCSS styling for maintainable code",
        "Built comprehensive migration scripts with rollback capabilities",
        "Designed user-friendly interfaces with guided workflows"
      ],
      techBreakdown: {
        "Frontend": "HAML templating with SCSS for styling, integrated with Contentful CMS for dynamic content management",
        "Backend": "Ruby on Rails with custom Contentful integration and API endpoints",
        "CMS": "Contentful headless CMS with custom content models and workflows",
        "Infrastructure": "Rails deployment with database migrations and content synchronization"
      },
      results: [
        "Streamlined content workflows",
        "Improved maintainability with modular, reusable components",
        "Zero downtime during migration and launch",
        "Positive feedback from stakeholders on usability"
      ]
    },
    {
      id: 2,
      title: "Document Review Platform",
      shortDesc: "Built multiple full-stack features for a classified document review platform, including custom document viewers with OpenSeadragon and Turbo.",
      image: "Document Platform",
      technologies: ["Rails", "OpenSeadragon", "Turbo", "Bootstrap", "JavaScript"],
      link: "https://github.com/andvarna99/",
      linkText: "Private Repo",
      linkIcon: "github",
      challenges: [
        "Building custom document viewers for classified documents",
        "Implementing secure upload validation and content inspection workflows",
        "Creating responsive interfaces that work across different security environments",
      ],
      solutions: [
        "Integrated OpenSeadragon for smooth zooming and panning of large documents",
        "Built Turbo components for seamless user interactions without page reloads",
        "Built user-friendly upload interfaces with file validation feedback",
      ],
      techBreakdown: {
        "Frontend": "Turbo for dynamic content, OpenSeadragon for document viewing",
        "Backend": "Ruby on Rails with secure file handling and validation",
        "UI Framework": "Bootstrap with custom components",
      },
      results: [
        "Enabled visual inspection of uploads streamlining validation workflows",
        "Improved user experience with responsive document viewers",
        "Met all government security and compliance requirements",
        "Delivered clear technical documentation meeting stakeholder needs"
      ]
    },
    {
      id: 3,
      title: "Artzip Photo Service",
      shortDesc: "Contributed to a photo stitching web service built in Rails with custom UI components including rectification magnifier, theme previews, and gallery interfaces.",
      image: "Photo Service",
      technologies: ["Rails", "HAML", "SCSS", "Turbo", "JavaScript"],
      link: "https://artzip.com/",
      linkText: "Website",
      linkIcon: "external",
      challenges: [
        "Building complex photo manipulation interfaces with real-time previews",
        "Creating responsive gallery and checkout experiences",
        "Developing custom photo editing tools like magnification and rectification"
      ],
      solutions: [
        "Built custom rectification magnifier with JavaScript for precise photo editing",
        "Created permission logic preventing premature access to processed images",
        "Designed responsive gallery and checkout UIs with HAML and SCSS"
      ],
      techBreakdown: {
        "Frontend": "HAML templates with SCSS styling, Turbo for dynamic interactions",
        "Backend": "Ruby on Rails with image processing and permission management",
        "UI Components": "Custom photo editing tools, gallery views, and checkout flows",
        "Features": "Theme previews, debug views, pop-out navigation, access control"
      },
      results: [
        "Delivered intuitive photo editing experience with custom tools",
        "Implemented secure permission system protecting premium content",
        "Created responsive design working across all device sizes",
        "Built reusable components for consistent user experience"
      ]
    },
    {
      id: 4,
      title: "Barbenheimer Dress-Up Game",
      shortDesc: "A nostalgic web game built with React and custom CSS where players drag-and-drop outfits onto characters, select themed backgrounds, and save creations.",
      image: "Interactive Game",
      technologies: ["React", "CSS3", "JavaScript"],
      link: "https://github.com/andvarna99/barbenheimer_wardrobe_game",
      linkText: "Code",
      linkIcon: "github",
      challenges: [
        "Creating drag-and-drop interactions for outfit customization",
        "Implementing performance optimizations for mobile devices",
        "Building themed character and background selection systems",
        "Ensuring cross-browser compatibility and accessibility"
      ],
      solutions: [
        "Built custom drag-and-drop system with React state management",
        "Implemented lazy loading for assets to improve initial load performance",
        "Created mobile-first responsive design with touch-friendly interactions",
        "Added save functionality allowing users to preserve their creations"
      ],
      techBreakdown: {
        "Frontend": "React with hooks for state management and component logic",
        "Styling": "Custom CSS3 with animations, responsive breakpoints, and themes",
        "Performance": "Lazy loading, optimized assets, and efficient re-rendering",
        "UX": "Intuitive drag-drop, themed content, and mobile-optimized controls"
      },
      results: [
        "Created engaging, nostalgic gaming experience for users",
        "Built accessible interface with keyboard",
        "Demonstrated creative problem-solving with interactive game mechanics"
      ]
    }
  ];

  const openModal = (projectId: number) => {
    setSelectedProject(projectId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const currentProject = selectedProject ? projects.find(p => p.id === selectedProject) : null;

  const particles = Array.from({ length: 50}, (_, i) => (
      <div
        key={i}
        className="particle"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 20}s`,
          animationTimingFunction: `${15 + Math.random() * 10}s`,
        }}
      />
  ));

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [key, setKey] = React.useState("journey");
  const fullText = "Frontend Software Engineer";

  useEffect(() =>{
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentIndex, fullText]);

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/andvarna99', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/andrea-varnado/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:andrea.h.varnado@gmail.com', label: 'Email' },
  ];

  return (
    <div className="App vw-100">
      <Navbar expand="lg" className={"fixed-top transition-all duration-300 py-2 navbar-glass"}>
        <Container className="container-fluid px-2">
          <Navbar.Brand href="#home" className="navbar-brand">
            { isScrolled ? 'Andrea Varnado' : '' }
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section id="home" className="hero-section">
        <div className="particles">
          {particles}
        </div>
        <Container>
          <Row className="align-items-center min-vh-100 py-4 my-4">
            <Col lg={6} className="hero-content mb-3">
              <div className="fade-in-up">
                <h1 className="hero-title-white my-2">Hi, I'm{' '}
                  <span className="hero-title">Andrea</span>
                </h1>
                <h1 className="hero-subtitle my-2 d-flex align-items-center">
                  <IconWrapper Icon={FaCode} className="code-icon me-2"/>
                  <span className="me-2 ">
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </span>
                </h1>
                <p className="lead my-2">
                  I'm passionate about building software that makes
                  a difference and helps people move faster, understand more, or express themselves
                  more freely.
                </p>
                <div className="d-flex gap-3 flex-wrap my-3">
                  <a href="andrea_varnado_resume.pdf" download target="_blank" >
                    <Button className="btn-custom btn-dark-custom">
                      <IconWrapper Icon={FaDownload} className="me-2" />
                      Download CV
                    </Button>
                  </a>
                </div>
                <div className="d-flex gap-3 flex-wrap">
                  <Button className="contact-btn glass-btn" target="_blank" href="https://github.com/andvarna99">
                    <IconWrapper Icon={FaGithub} />
                  </Button>
                  <Button className="contact-btn glass-btn" target="_blank" href="https://www.linkedin.com/in/andrea-varnado/">
                    <IconWrapper Icon={FaLinkedin} />
                  </Button>
                  <Button className="contact-btn glass-btn" target="_blank" href="mailto:andrea.h.varnado@gmail.com">
                    <IconWrapper Icon={FaEnvelope} />
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <div className="hero-image-container fade-in-up">
                <img
                  src="/Andrea_animated_headshot.png"
                  alt="Andrea Varnado"
                  className="hero-image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="about" className="pt-4 pb-2 about-section">
        <Container>
          <Row>
            <Col lg={12} className="mx-auto text-center">
              <h2 className="section-title my-4">About Me</h2>
              <p className="lead">
                I'm a frontend software engineer with 2+ years of experience building
                responsive web applications in Javascript and Rails. Currently at
                Elevate Systems, I've led CMS redesigns, built document review platforms,
                and delivered features that streamline workflows for government engineers.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="about-tabs" className="py-4 about-tabs-section mx-auto">
        <Row>
          <Col>
            <Tabs
                id="about-me-tabs"
                activeKey={key}
                onSelect={(k) => setKey(k as string)}
                className="about-tabs gradient-text code-block rounded-top-1 p-0"
            >
              <Tab eventKey="journey" title={
                <>
                  <IconWrapper Icon={FaRoad} className="me-2" />
                  Journey
                </>
              } className="journey-tab p-0 rounded-bottom-1">
                <div className="tab-content px-2 code-block">
                  <p>
                    My journey to tech actually began with a background in Classical Vocal Performance
                    at UNT. I believe my foundation in performing gives me a unique set of skills as a
                    developer including my attention to detail, and drive for learning new things.
                    <br></br>
                    <br></br>
                    After college I began a coding bootcamp where I discovered my passion for frontend
                    engineering. I started with learning HTML, CSS, and Javascript, gradually expanding
                    my skills to encompass modern frameworks and best practices.
                    <br></br>
                    <br></br>
                    Today, I focus on building user-centric applications that not only look great
                    but also provide exceptional functionality. I care about staying current with industry
                    trends and perfecting the user experience to truly serve a consumer's needs.
                  </p>
                </div>
              </Tab>
              <Tab eventKey="philosophy" title={
                <>
                  <IconWrapper Icon={FaCogs} className="me-2" />
                  Philosophy
                </>
              } className="philosophy-tab p-3">
                <div className="tab-content code-block p-2 rounded">
                  <pre>
                    <code className="tab-content">
{`const softwareEngineer = {
    name: "Andrea Varnado",
    focus: "Frontend Software Engineering",
    approach: "User-Centric Design",
    values: [
      "Clean Code",
      "User Experience",
      "Accessibility",
      "Responsivity"
    ]
  }`
}
                    </code>
                  </pre>
                </div>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </section>

      <section id="skills" className="skills-section py-4">
        <Container>
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <IconWrapper Icon={FaReact} className="skill-icon" />
              <h4 className="skill-title">Frontend Development</h4>
              <p>Building responsive, accessible interfaces with modern frameworks and styling</p>
              <div className="mt-3">
                <span className="tech-tag">React</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">SCSS</span>
                <span className="tech-tag">Bootstrap</span>
              </div>
            </div>

            <div className="skill-card">
              <IconWrapper Icon={FaServer} className="skill-icon" />
              <h4>Full-Stack Frameworks & Languages</h4>
              <p>Ruby on Rails with modern tooling for efficient, maintainable web applications</p>
              <div className="mt-3">
                <span className="tech-tag">Ruby on Rails</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Turbo</span>
                <span className="tech-tag">OpenSeadragon</span>
                <span className="tech-tag">HAML</span>
              </div>
            </div>

            <div className="skill-card">
              <IconWrapper Icon={FaDatabase} className="skill-icon" />
              <h4>Data & Backend</h4>
              <p>Database management and backend integration for robust applications</p>
              <div className="mt-3">
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">Ruby</span>
              </div>
            </div>

            <div className="skill-card">
              <IconWrapper Icon={FaCloud} className="skill-icon" />
              <h4>Design & CMS Tools</h4>
              <p>Content management and design tools for streamlined workflows</p>
              <div className="mt-3">
                <span className="tech-tag">Contentful</span>
                <span className="tech-tag">Webflow</span>
                <span className="tech-tag">Figma</span>
              </div>
            </div>

            <div className="skill-card">
              <IconWrapper Icon={FaMobile} className="skill-icon" />
              <h4>Development Practices</h4>
              <p>Modern development methodologies and collaborative approaches</p>
              <div className="mt-3">
                <span className="tech-tag">Agile</span>
                <span className="tech-tag">Unit Testing</span>
                <span className="tech-tag">Pair Programming</span>
              </div>
            </div>

            <div className="skill-card">
              <IconWrapper Icon={FaCode} className="skill-icon" />
              <h4>Development Tools</h4>
              <p>Version control, deployment, and development environment tools</p>
              <div className="mt-3">
                <span className="tech-tag">GitHub</span>
                <span className="tech-tag">GitLab</span>
                <span className="tech-tag">Cursor</span>
                <span className="tech-tag">Vercel</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="projects" className="projects-section py-4">
        <Container>
          <h2 className="section-title">Featured Projects</h2>
            <Container className="mw-100 mx-0 my-auto d-flex">
              <Row>
                <Col className="mb-3">
                  <div className="project-card d-flex flex-column">
                    <div className="project-image project-image-1">
                      Elevate LLC Website
                    </div>
                    <div className="project-content h-100 d-flex flex-column">
                      <h4 className="project-title">Government CMS Redesign</h4>
                      <p>
                        Led the redesign and implementation of an internal CMS for a government
                        agency using Contentful, HAML, SCSS, and Rails which streamlined content workflows.
                      </p>
                      <div className="mb-3">
                        <span className="tech-tag">Rails</span>
                        <span className="tech-tag">Contentful</span>
                        <span className="tech-tag">HAML</span>
                        <span className="tech-tag">SCSS</span>
                      </div>
                      <div className="d-flex flex-row align-items-center mt-auto me-auto">
                        <Button
                            className="btn-custom btn-primary-custom rounded-2 me-2 p-1 d-flex flex-row align-items-center"
                            onClick={() => openModal(1)}
                        >
                          View Details
                        </Button>
                        <Button
                            className="btn-custom btn-dark-custom rounded-2 d-flex p-1 flex-row align-items-center"
                            href="https://elevatesystems.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                          <IconWrapper Icon={FaExternalLinkAlt} className="me-1" /> Website
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-3">
                  <div className="project-card d-flex flex-column">
                    <div className="project-image project-image-2">
                      Document Platform
                    </div>
                    <div className="project-content h-100 d-flex flex-column">
                      <h4 className="project-title">Document Review Platform</h4>
                      <p>
                        Built multiple full-stack features for a classified document review platform,
                        including custom document viewers with OpenSeadragon and Turbo.
                      </p>
                      <div className="mb-3">
                        <span className="tech-tag">Rails</span>
                        <span className="tech-tag">OpenSeadragon</span>
                        <span className="tech-tag">Turbo</span>
                        <span className="tech-tag">Bootstrap</span>
                        <span className="tech-tag">JavaScript</span>
                      </div>
                      <div className="d-flex flex-row align-items-center mt-auto me-auto">
                        <Button
                            className="btn-custom btn-primary-custom rounded-2 me-2 p-1 d-flex flex-row align-items-center"
                            onClick={() => openModal(2)}
                        >
                          View Details
                        </Button>
                        <Button
                            className="btn-custom btn-dark-custom rounded-2 p-1 d-flex flex-row align-items-center"
                            href="https://github.com/andvarna99/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                          <IconWrapper Icon={FaGithub} className="me-2" />Private Repo
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <Container className="mw-100 mx-0 my-auto d-flex gap-2">
              <Row>
                <Col className="mb-3">
                  <div className="project-card d-flex flex-column">
                    <div className="project-image project-image-3">
                      Artzip
                    </div>
                    <div className="project-content h-100 d-flex flex-column">
                      <h4 className="project-title">Artzip Photo Service</h4>
                      <p>
                        Contributed to a photo stitching web service built in Rails with custom UI
                        components including rectification magnifier, theme previews, and gallery interfaces.
                      </p>
                      <div className="mb-3">
                        <span className="tech-tag">Rails</span>
                        <span className="tech-tag">HAML</span>
                        <span className="tech-tag">SCSS</span>
                        <span className="tech-tag">Turbo</span>
                        <span className="tech-tag">JavaScript</span>
                      </div>
                      <div className="d-flex flex-row align-items-center mt-auto me-auto">
                        <Button
                            className="btn-custom btn-primary-custom rounded-2 me-2 p-1 d-flex flex-row align-items-center"
                            onClick={() => openModal(3)}
                        >
                          View Details
                        </Button>
                        <Button
                            className="btn-custom btn-dark-custom rounded-2 p-1 d-flex flex-row align-items-center"
                            href="https://artzip.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                          <IconWrapper Icon={FaExternalLinkAlt} className="me-2" />Website
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-3">
                  <div className="project-card d-flex flex-column">
                    <div className="project-image project-image-4">
                      Dress Up Game
                    </div>
                    <div className="project-content h-100 d-flex flex-column">
                      <h4 className="project-title">Barbenheimer Dress-Up Game</h4>
                      <p>
                        A nostalgic web game built with React and custom CSS where players drag-and-drop
                        outfits onto characters, select themed backgrounds, and save their creations.
                      </p>
                      <div className="mb-3">
                        <span className="tech-tag">React</span>
                        <span className="tech-tag">CSS3</span>
                        <span className="tech-tag">JavaScript</span>
                      </div>
                      <div className="d-flex flex-row align-items-center mt-auto me-auto">
                        <Button
                            className="btn-custom btn-primary-custom rounded-2 me-2 p-1 d-flex flex-row align-items-center"
                            onClick={() => openModal(4)}
                        >
                          View Details
                        </Button>
                        <Button
                            className="btn-custom btn-dark-custom rounded-2 p-1 d-flex flex-row align-items-center"
                            href="https://github.com/andvarna99/barbenheimer_wardrobe_game"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                          <IconWrapper Icon={FaGithub} className="me-2" />Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
        </Container>
      </section>

      <footer className="footer-custom border-top pt-2">
        <div className="footer-container mx-5">
          <div className="d-flex justify-content-center align-items-center">
            <Container>
              <Row>
                <Col className="mt-2">
                  <h3 className="footer-title">Andrea Varnado</h3>
                  <p>
                    Frontend-focused software engineer passionate about creating exceptional
                    digital experiences with modern technologies.
                  </p>
                </Col>
                <Col className="my-2">
                  <h4>Quick Links</h4>
                  <div className="d-flex flex-row justify-content-start">
                    <a className="nav-link me-3" href="#about">About</a>
                    <a className="nav-link me-3" href="#skills">Skills</a>
                    <a className="nav-link me-3" href="#projects">Projects</a>
                  </div>
                </Col>
                <Col id="contact" className="mt-2">
                  <h4>Let's Connect</h4>
                  <p>
                    Follow me on social media or reach out directly!
                  </p>
                  <div>
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            className="contact-btn glass-btn me-2"
                            aria-label={label}
                            target="_blank"
                        >
                          <IconWrapper
                              Icon={Icon}
                              className="duration-300"
                          />
                        </a>
                    ))}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </footer>

      <footer className="footer-custom text-center">
        <div className="footer-container mx-5">
          <div className="footer-copyright d-flex flex-col justify-content-center align-items-center pb-3">
            <p className="pe-2">
              Built with
              <IconWrapper Icon={FaHeart} className="text-danger mx-1" />
              and modern web technologies.
            </p>
            <p className="text-center">
              © {currentYear} Andrea Varnado. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <Modal
        show={showModal}
        onHide={closeModal}
        size="lg"
        centered
        className="project-modal"
      >
        <Modal.Header closeButton className={`modal-header-custom modal-header-custom-${currentProject?.title?.toLowerCase().replace(/\s+/g, '-')}`}>
          <Modal.Title className="modal-title-custom">
            {currentProject?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-custom">
          {currentProject && (
            <>
              <div className="mb-4">
                <h5 className="section-subtitle">Technical Implementation</h5>
                {Object.entries(currentProject.techBreakdown).map(([category, description]) => (
                  <div key={category} className="tech-breakdown-item mb-2">
                    <strong className="tech-category">{category}:</strong>
                    <span className="tech-description"> {description}</span>
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <h5 className="section-subtitle">Key Challenges & Solutions</h5>
                {currentProject.challenges.map((challenge, index) => (
                  <div key={index} className="challenge-solution-item mb-3">
                    <div className="challenge mb-2">
                      <strong className="challenge-label">Challenge:</strong>
                      <span className="challenge-text"> {challenge}</span>
                    </div>
                    <div className="solution">
                      <strong className="solution-label">Solution:</strong>
                      <span className="solution-text"> {currentProject.solutions[index]}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <h5 className="section-subtitle">Results & Impact</h5>
                <ul className="results-list">
                  {currentProject.results.map((result, index) => (
                    <li key={index} className="result-item">{result}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer className="modal-footer-custom">
          <Button
            className="btn-custom btn-outline-custom me-2 btn-dark-custom"
            onClick={closeModal}
          >
            Close
          </Button>
          {currentProject && (
            <Button
              className="btn-custom btn-primary-custom"
              href={currentProject.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper
                Icon={currentProject.linkIcon === 'github' ? FaGithub : FaExternalLinkAlt}
                className="me-2"
              />
              {currentProject.linkText}
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;
