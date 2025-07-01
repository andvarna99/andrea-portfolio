import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col, Navbar, Nav, Button, Modal } from 'react-bootstrap';
import { FaReact, FaDatabase, FaCloud, FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer, FaMobile, FaExternalLinkAlt } from 'react-icons/fa';

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



  return (
    <div className="App">
      <Navbar expand="lg" className="navbar-custom fixed-top">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">
            Andrea Varnado
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section id="home" className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-content">
              <div className="fade-in-up">
                <h1 className="hero-title">Andrea Varnado</h1>
                <p className="hero-subtitle">Frontend-Focused Software Engineer</p>
                <p className="lead mb-4">
                  I didn't fall in love with coding because of the tools; I fell in love with 
                  what those tools could create. I care about building software that helps 
                  people move faster, understand more, or express themselves more freely.
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <Button className="btn-custom btn-primary-custom" href="#projects">
                    View My Work
                  </Button>
                  <Button className="btn-custom btn-outline-custom" href="#contact">
                    Let's Connect
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <div className="hero-image-container">
                <img 
                  src="/andrea-photo.jpg" 
                  alt="Andrea Varnado" 
                  className="hero-image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="about" className="section-padding bg-white">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">About Me</h2>
              <p className="lead">
                I'm a frontend-focused software engineer with 2 years of experience building 
                responsive, accessible web applications in React and Rails. Currently at 
                Elevate Systems, I've led CMS redesigns, built document review platforms, 
                and delivered features that streamline workflows for government agencies.
              </p>
              <p>
                My journey to tech began with a background in Classical Vocal Performance at UNT, 
                before I discovered my passion for coding through a Bootcamp. 
                This creative foundation helps me approach engineering with both technical 
                rigor and an eye for user experience that truly serves people's needs.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="skills" className="section-padding" style={{ background: 'var(--gray-50)' }}>
        <Container>
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <IconWrapper Icon={FaReact} className="skill-icon" />
              <h4>Frontend Development</h4>
              <p>Building responsive, accessible interfaces with modern frameworks and styling</p>
              <div className="mt-3">
                <span className="tech-tag">React</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">SCSS</span>
                <span className="tech-tag">Bootstrap</span>
                <span className="tech-tag">HAML</span>
                <span className="tech-tag">OpenSeadragon</span>
              </div>
            </div>
            
            <div className="skill-card">
              <IconWrapper Icon={FaServer} className="skill-icon" />
              <h4>Full-Stack Frameworks</h4>
              <p>Ruby on Rails with modern tooling for efficient, maintainable web applications</p>
              <div className="mt-3">
                <span className="tech-tag">Ruby on Rails</span>
                <span className="tech-tag">Turbo</span>
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
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="projects" className="section-padding bg-white">
        <Container>
          <h2 className="section-title">Featured Work Projects</h2>
          <Row>
            <Col lg={6} className="mb-4">
              <div className="project-card">
                <div className="project-image">
                  CMS Platform
                </div>
                <div className="project-content">
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
                  <div>
                    <Button 
                      className="btn-custom btn-primary-custom me-2"
                      onClick={() => openModal(1)}
                    >
                      View Details
                    </Button>
                    <Button 
                        className="btn-custom btn-outline-custom my-2"
                        href="https://elevatesystems.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconWrapper Icon={FaExternalLinkAlt} className="me-2" /> Website
                      </Button>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={6} className="mb-4">
              <div className="project-card">
                <div className="project-image">
                  Document Platform
                </div>
                <div className="project-content">
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
                  <div>
                    <Button 
                      className="btn-custom btn-primary-custom me-2"
                      onClick={() => openModal(2)}
                    >
                      View Details
                    </Button>
                    <Button 
                        className="btn-custom btn-outline-custom my-2"
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
            
            <Col lg={6} className="mb-4">
              <div className="project-card">
                <div className="project-image">
                  Photo Service
                </div>
                <div className="project-content">
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
                  <div>
                    <Button 
                      className="btn-custom btn-primary-custom me-2"
                      onClick={() => openModal(3)}
                    >
                      View Details
                    </Button>
                    <Button 
                        className="btn-custom btn-outline-custom my-2"
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
            
            <Col lg={6} className="mb-4">
              <div className="project-card">
                <div className="project-image">
                  Interactive Game
                </div>
                <div className="project-content">
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
                  <div>
                    <Button 
                      className="btn-custom btn-primary-custom me-2"
                      onClick={() => openModal(4)}
                    >
                      View Details
                    </Button>
                    <Button 
                        className="btn-custom btn-outline-custom my-2"
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
      </section>

      <section id="contact" className="contact-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="mb-4" style={{ color: 'white' }}>Let's Connect</h2>
              <p className="lead mb-5">
                I'm always interested in new opportunities and collaborations. 
                Whether you have a project in mind or just want to connect, I'd love to hear from you!
              </p>
              
              <div className="social-links mt-5">
                <a href="https://www.linkedin.com/in/andrea-varnado/" target="_blank" rel="noopener noreferrer">
                  <IconWrapper Icon={FaLinkedin} />
                </a>
                <a href="https://github.com/andvarna99" target="_blank" rel="noopener noreferrer">
                  <IconWrapper Icon={FaGithub} />
                </a>
                <a href="mailto:andrea.h.varnado@gmail.com" target="_blank" rel="noopener noreferrer">
                  <IconWrapper Icon={FaEnvelope} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="footer-custom text-center">
        <Container>
          <p>&copy; 2025 Andrea Varnado. Crafted with care.</p>
          <p>Built with React, TypeScript, and Bootstrap • Deployed on Vercel</p>
        </Container>
      </footer>

      <Modal 
        show={showModal} 
        onHide={closeModal} 
        size="lg" 
        centered
        className="project-modal"
      >
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title className="modal-title-custom">
            {currentProject?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-custom">
          {currentProject && (
            <>
              <div className="mb-4">
                <h5 className="section-subtitle">Project Overview</h5>
                <p>{currentProject.shortDesc}</p>
              </div>

              <div className="mb-4">
                <h5 className="section-subtitle">Technology Stack</h5>
                <div className="mb-3">
                  {currentProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag me-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

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
            className="btn-custom btn-outline-custom me-2" 
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
