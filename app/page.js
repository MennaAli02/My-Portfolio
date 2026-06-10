import { PhoneIcon, EnvelopeIcon, LinkIcon, FolderOpenIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';



export default function Portfolio() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#certificates">Courses</a>
          <a href="#contacts">Contacts</a>
        </nav>
      </header>

      <main>
        <section id="home">
          <h1 className="hero-name">Menna Ali</h1>
          <div className="hero-title">Backend-Focused Full Stack Developer | .NET | Data Analytics</div>
          <div className="hero-subtitle">(Specialized in Health Informatics)</div>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <FolderOpenIcon className="icon" aria-hidden="true" />
              View Projects
            </a>
            <a href="/Resume.pdf" download className="btn btn-secondary">
              <ArrowDownTrayIcon className="icon" aria-hidden="true" />
              Download Resume
            </a>
            <a href="#contacts" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </section>

        <section id="about">
          <div className="glow-orb-1"></div>
          <h1 className="section-title">About Me</h1>
          
          <div className="about-container">
            <div className="about-text-content">
              <p className="section-content" style={{ textAlign: 'left', maxWidth: '100%' }}>
                I’m Menna, a backend-focused full stack developer specializing in .NET, Python, healthcare systems, and data analytics. I build scalable APIs, modern web applications, and data-driven solutions using technologies like ASP.NET Core, FastAPI, React, and Next.js.
              </p>
              <div className="education-card" style={{ marginTop: '2rem' }}>
                <h3 className="card-title">🎓 Education</h3>
                <h4 className="card-subtitle">Faculty of Computer & Data Sciences<br/>Alexandria University</h4>
                <div className="card-details">
                  <span className="gpa">GPA: 3.76 — Excellent with Honors</span>
                  <span className="years">2021 — 2025</span>
                </div>
              </div>
            </div>

            <div className="about-image-content">
              <div className="profile-image-container">
                <img src="/profile.jpg" alt="Menna Ali" className="profile-image" />
                <div className="image-accent-border"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="glow-orb-2"></div>
          <h2 className="section-title">Experience</h2>
          <p className="section-content">
            My professional journey in backend development, healthcare systems, and data analytics.
          </p>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="card-title">Backend Developer (Python/Odoo)</h3>
                <h4 className="card-subtitle">Diwan for Scientific Solutions</h4>
                <div className="card-details" style={{ borderTop: 'none', paddingTop: 0 }}>
                  <span className="years">Nov 2025 — Present</span>
                  <span className="location">Alexandria, Egypt • On-site</span>
                </div>
                <p className="timeline-desc">
                  Contributing to backend development for medical and ERP systems using Python-based frameworks while supporting frontend enhancements with React to improve healthcare workflows and user experience.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="card-title">IT Support Engineer Intern</h3>
                <h4 className="card-subtitle">Andalusia</h4>
                <div className="card-details" style={{ borderTop: 'none', paddingTop: 0 }}>
                  <span className="years">Aug 2025 — Oct 2025</span>
                  <span className="location">Alexandria, Egypt • On-site</span>
                </div>
                <p className="timeline-desc">
                  Worked with Andalusia’s management systems and healthcare workflows while developing APIs, backend modules, and data analytics solutions to improve operational efficiency.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="card-title">Data Analytics Intern</h3>
                <h4 className="card-subtitle">My Communication</h4>
                <div className="card-details" style={{ borderTop: 'none', paddingTop: 0 }}>
                  <span className="years">Jun 2024 — Jul 2024</span>
                  <span className="location">Remote</span>
                </div>
                <p className="timeline-desc">
                  Analyzed hotel reservation datasets and created dashboards to uncover booking trends, guest preferences, and business insights using SQL and Power BI.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-content">
            A showcase of my recent work, collection of healthcare, backend, and data-driven applications I’ve built using modern technologies.
          </p>

          <div className="projects-grid">
            <div className="project-card">
              <h3 className="project-title">MediGo: Electronic Health Record System</h3>
              <div className="project-tags">
                <span>Flutter</span>
                <span>FastAPI</span>
                <span>Firebase</span>
                <span>Python</span>
                <span>AI Models</span>
              </div>
              <ul className="project-desc">
                <li>(Led backend development and data integration and also Focused on data preprocessing and visualization).</li>
                <li>Developed a real-time bilingual EHR mobile app to enhance emergency care and clinical decisions.</li>
                <li>Integrated Firebase, FastAPI, and AI models for disease risk prediction, OCR, and radiology validation.</li>
                <li>Enabled dynamic QR-based emergency access and multi-role user management.</li>
              </ul>
            </div>

            <div className="project-card">
              <h3 className="project-title">Hospital Management System</h3>
              <div className="project-tags">
                <span>Oracle</span>
                <span>Java</span>
                <span>NetBeans</span>
              </div>
              <ul className="project-desc">
                <li>Developed a Hospital Management System using Oracle and Java with modules for patient management, scheduling, and medical records, ensuring seamless data flow and accessibility. Demonstrated strong skills in database management, system integration, and UI design.</li>
              </ul>
            </div>

            <div className="project-card">
              <h3 className="project-title">User Management Web API</h3>
              <div className="project-tags">
                <span>.NET Core</span>
                <span>ASP.NET Core</span>
                <span>Web APIs</span>
                <span>C#</span>
                <span>Swagger</span>
              </div>
              <ul className="project-desc">
                <li>Developed a Minimal ASP.NET Core Web API with full CRUD operations, input validation, authentication, and global error handling using custom middleware.</li>
                <li>Integrated HTTPS redirection, response compression, and Swagger for secure, efficient, and well-documented API performance.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="glow-orb-1" style={{ top: 'auto', bottom: '-10%', left: '50%' }}></div>
          <h2 className="section-title">Skills</h2>
          <p className="section-content">
            A comprehensive overview of my technical expertise, tools, and languages.
          </p>

          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="category-title">Programming Languages</h3>
              <div className="skill-tags">
                <span>Python</span><span>C#</span><span>JavaScript</span><span>SQL</span><span>Java</span><span>R</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Backend Technologies</h3>
              <div className="skill-tags">
                <span>.NET Core</span><span>ASP.NET Core</span><span>FastAPI</span><span>Node.js</span><span>REST APIs</span><span>Entity Framework</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Frontend Technologies</h3>
              <div className="skill-tags">
                <span>React</span><span>Next.js</span><span>HTML5</span><span>CSS</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Data Analytics & Visualization</h3>
              <div className="skill-tags">
                <span>Power BI</span><span>RStudio</span><span>Jupyter Notebook</span><span>Google Colab</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Databases</h3>
              <div className="skill-tags">
                <span>SQL Server</span><span>PostgreSQL</span><span>Oracle</span><span>Firebase</span><span>Supabase</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Tools & Platforms</h3>
              <div className="skill-tags">
                <span>GitHub</span><span>Bitbucket</span><span>Postman</span><span>Swagger UI</span><span>Visual Studio</span><span>VS Code</span><span>PyCharm</span><span>NetBeans</span><span>Cursor AI</span><span>Antigravity</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Languages</h3>
              <div className="skill-tags">
                <span>English (Fluent)</span><span>Arabic (Native)</span>
              </div>
            </div>
          </div>
        </section>

        <section id="certificates">
          <h2 className="section-title">Courses & Certificates</h2>
          <p className="section-content">
            Continuous learning is a core part of my journey. Here are some of the key courses and certifications I've completed.
          </p>

          <div className="certificates-grid">
            <div className="certificate-item">
                <img src="/UC-e4eff9aa-8c7d-4a72-b9b3-7ae52edb6912_page-0001.jpg" alt="Certificate" className="certificate-img" />
                <span className="certificate-name">Python Basics and OOP Concepts</span>
            </div>
            <div className="certificate-item">
              <span className="certificate-name">C# Programming: Basics and OOP Concepts</span>
            </div>
            <div className="certificate-item">
              <span className="certificate-name">JavaScript Basics </span>
            </div>
            <div className="certificate-item">
              <img src="\certificate (database in python)_page-0001.jpg" alt="Course" className="certificate-img" />
              <span className="certificate-name">Introduction to Databases in Python</span>
            </div>
            <div className="certificate-item">
              <img src="\certificate (SQL)_page-0001.jpg" alt="Course" className="certificate-img" />              
              <span className="certificate-name">Introduction to SQL Server (Beginner Level)</span>
            </div>
            <div className="certificate-item">
              <img src="\certificate (intermediate sql)_page-0001.jpg" alt="Course" className="certificate-img" />              
              <span className="certificate-name">SQL Server  (Intermediate Level)</span>
            </div>
            <div className="certificate-item">
              <img src="\excel.jfif" alt="Course" className="certificate-img" />
              <span className="certificate-name">Data Analysis in Excel</span>
            </div>
            <div className="certificate-item">
              <img src="/Backend Development Certification.jpg" alt="Course" className="certificate-img" />
              <span className="certificate-name">Backend Development with .NET</span>
            </div>
            <div className="certificate-item">
              <img src="\CertificateOfCompletion_Learning ASP.NET Core MVC Razor Pages Web APIs  Other Foundations (1)_page-0001.jpg" alt="Course" className="certificate-img" />
              <span className="certificate-name">ASP.NET Core Foundations</span>
            </div>
            <div className="certificate-item">
              <span className="certificate-name">.NET Core MVC and Entity Framework Fundamentals</span>
            </div>
            <div className="certificate-item">
              <img src="\CertificateOfCompletion_ASP.NET Core Razor Pages (1) (1)_page-0001.jpg" alt="Course" className="certificate-img" />
              <span className="certificate-name">ASP.NET Core: Razor Pages</span>
            </div>
            <div className="certificate-item">
              <img src="\CertificateOfCompletion_HTML Essential Training (1)_page-0001.jpg" alt="Course" className="certificate-img" />
              <span className="certificate-name">HTML Essential Fundamentals</span>
            </div>
            <div className="certificate-item">
              <img src="\CertificateOfCompletion_CSS Essential Training (1)_page-0001 (1).jpg" alt="Course" className="certificate-img" />
              <span className="certificate-name">CSS Essential Fundamentals</span>
            </div>
            <div className="certificate-item">
              <img src="\next.jpg" alt="Course" className="certificate-img" />
              <span className="certificate-name">Introduction to Next.js</span>
            </div>
            <div className="certificate-item">
              <img src="\bitbucket.jfif" alt="Course" className="certificate-img" />
              <span className="certificate-name">Learning Bitbucket</span>
            </div>
            <div className="certificate-item">
              <img src="\git.jfif" alt="Course" className="certificate-img" />
              <span className="certificate-name">Git and Version Control</span>
            </div>
          </div>
        </section>

        <section id="contacts">
          <h2 className="section-title">Contacts</h2>
          <p className="section-content">
           Feel free to reach out to me through any of the channels below.
          </p>

          <div className="contacts-line">
            <a href="tel:+2001090574321" className="contact-link">
                          <PhoneIcon className="contact-icon" aria-hidden="true" />
              <span className="contact-label">Phone:</span> +20 01090574321
            </a>
            <a href="mailto:mennatullahali02@gmail.com" className="contact-link">
                          <EnvelopeIcon className="contact-icon" aria-hidden="true" />
              <span className="contact-label">Email:</span> mennatullahali02@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/menna-ali-047661276/" target="_blank" rel="noopener noreferrer" className="contact-link">
                          <LinkIcon className="contact-icon" aria-hidden="true" />
              <span className="contact-label">LinkedIn:</span> Menna Ali
            </a>
          </div>
        </section>
        <footer className="footer">
          © 2026 Menna Ali. All rights reserved.
        </footer>
      </main>
    </>
  );
}
