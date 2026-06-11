'use client';
import { useState, useEffect } from 'react';
import { PhoneIcon, EnvelopeIcon, LinkIcon, FolderOpenIcon, ArrowDownTrayIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import {
  SiPython, SiJavascript, SiR, SiDotnet,
  SiFastapi, SiNodedotjs, SiReact, SiNextdotjs, SiHtml5, SiCss,
  SiPostgresql, SiFirebase, SiSupabase,
  SiGithub, SiBitbucket, SiPostman, SiVscodium,
  SiPycharm, SiJupyter, SiSwagger, SiRstudioide,
  SiGooglecolab, SiDocker, SiFigma
} from 'react-icons/si';
import { FaJava, FaDatabase, FaChartBar, FaCube, FaCode } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { DiMsqlServer, DiVisualstudio } from 'react-icons/di';

export default function Portfolio() {
const [lightboxSrc, setLightboxSrc] = useState(null);
const [mounted, setMounted] = useState(false);
useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
const skills = {
  "Programming Languages": [
    { name: "Python", icon: <SiPython /> },
    { name: "C#", icon: <FaCode /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "Java", icon: <FaJava /> },
    { name: "R", icon: <SiR /> },
  ],
  "Backend Technologies": [
    { name: ".NET Core", icon: <SiDotnet /> },
    { name: "ASP.NET Core", icon: <SiDotnet /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "REST APIs", icon: <TbApi /> },
    { name: "Entity Framework", icon: <SiDotnet /> },
  ],
  "Frontend Technologies": [
    { name: "React", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss /> },
  ],
  "Data Analytics & Visualization": [
    { name: "Power BI", icon: <FaChartBar /> },
    { name: "RStudio", icon: <SiRstudioide /> },
    { name: "Jupyter Notebook", icon: <SiJupyter /> },
    { name: "Google Colab", icon: <SiGooglecolab /> },  
  ],
  "Databases": [
    { name: "SQL Server", icon: <DiMsqlServer /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Oracle", icon: <FaDatabase /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Supabase", icon: <SiSupabase /> },
  ],
  "Tools & Platforms": [
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Bitbucket", icon: <SiBitbucket /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Swagger UI", icon: <SiSwagger /> },
    { name: "Visual Studio", icon: <DiVisualstudio /> },
    { name: "VS Code", icon: <DiVisualstudio /> },
    { name: "PyCharm", icon: <SiPycharm /> },
    { name: "Jupyter", icon: <SiJupyter /> },
    { name: "NetBeans", icon: <FaCube /> },
    { name: "Cursor AI", icon: <FaCode /> },
    { name: "Docker", icon: <SiDocker /> },           
    { name: "Figma", icon: <SiFigma /> },            
  ],
};
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
            {/* View Projects → GitHub */}
            <a href="https://github.com/MennaAli02/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FolderOpenIcon className="icon" aria-hidden="true" />
              View Projects
            </a>

            {/* Download Resume → your PDF in /public folder */}
            <a href="\Menna ALI.pdf" download="Menna ALI.pdf" className="btn btn-secondary">
              <ArrowDownTrayIcon className="icon" aria-hidden="true" />
              Download Resume
            </a>

            {/* Contact Me → phone number */}
            <a href="tel:+201090574321" className="btn btn-outline">
              <ChatBubbleLeftRightIcon className="icon" aria-hidden="true" />
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
                <div className="image-glow-ring"></div>
                <img src="/profile.jpg" alt="Menna Ali" className="profile-image" />
                <div className="image-accent-border"></div>
                <div className="image-badge">
                  <span className="badge-dot"></span>
                  Available for work
                </div>
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
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <div className="skill-category" key={category} style={{ '--category-index': categoryIndex }}>
                <h3 className="category-title">{category}</h3>
                <div className="skill-tags">
                  {items.map(({ name, icon }) => (
                    <span className="skill-tag" key={name}>
                      <span className="skill-icon">{icon}</span>
                      <span className="skill-name">{name}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="certificates">
          <h2 className="section-title">Courses & Certificates</h2>
          <p className="section-content">
            Continuous learning is a core part of my journey. Here are some of the key courses and certifications I've completed.
          </p>

          <div className="certificates-grid">
          <div className="certificate-item">
            <img src="/UC-e4eff9aa-8c7d-4a72-b9b3-7ae52edb6912_page-0001.jpg" alt="Certificate" className="certificate-img" onClick={() => setLightboxSrc('/UC-e4eff9aa-8c7d-4a72-b9b3-7ae52edb6912_page-0001.jpg')} />
            <span className="certificate-name">Python Basics and OOP Concepts</span>
          </div>
          <div className="certificate-item">
            <span className="skill-icon" style={{ fontSize: '2rem', color: 'var(--primary)' }}><FaCode /></span>
            <span className="certificate-name">C# Programming: Basics and OOP Concepts</span>
          </div>
          <div className="certificate-item">
            <span className="skill-icon" style={{ fontSize: '2rem', color: 'var(--primary)' }}><SiJavascript /></span>
            <span className="certificate-name">JavaScript Basics</span>
          </div>
          <div className="certificate-item">
            <img src="/certificate (database in python)_page-0001.jpg" alt="Course" className="certificate-img" onClick={() => setLightboxSrc('/certificate (database in python)_page-0001.jpg')} />
            <span className="certificate-name">Introduction to Databases in Python</span>
          </div>
          <div className="certificate-item">
            <img src="/certificate (SQL)_page-0001.jpg" alt="Course" className="certificate-img" onClick={() => setLightboxSrc('/certificate (SQL)_page-0001.jpg')} />
            <span className="certificate-name">Introduction to SQL Server (Beginner Level)</span>
          </div>
          <div className="certificate-item">
            <img src="/certificate (intermediate sql)_page-0001.jpg" alt="Course" className="certificate-img" onClick={() => setLightboxSrc('/certificate (intermediate sql)_page-0001.jpg')} />
            <span className="certificate-name">SQL Server (Intermediate Level)</span>
          </div>
          <div className="certificate-item">
            <img src="/excel.jfif" alt="Course" className="certificate-img" onClick={() => setLightboxSrc('/excel.jfif')} />
            <span className="certificate-name">Data Analysis in Excel</span>
          </div>
          <div className="certificate-item">
            <img src="/Backend Development Certification.jpg" alt="Course" className="certificate-img" onClick={() => setLightboxSrc('/Backend Development Certification.jpg')} />
            <span className="certificate-name">Backend Development with .NET</span>
          </div>
          <div className="certificate-item">
            <img src="/CertificateOfCompletion_Learning ASP.NET Core MVC Razor Pages Web APIs  Other Foundations (1)_page-0001.jpg" alt="Course" className="certificate-img" onClick={() => setLightboxSrc('/CertificateOfCompletion_Learning ASP.NET Core MVC Razor Pages Web APIs  Other Foundations (1)_page-0001.jpg')} />
            <span className="certificate-name">ASP.NET Core Foundations</span>
          </div>
          <div className="certificate-item">
            <span className="skill-icon" style={{ fontSize: '2rem', color: 'var(--primary)' }}><SiDotnet /></span>
            <span className="certificate-name">.NET Core MVC and Entity Framework Fundamentals</span>
          </div>
          <div className="certificate-item">
            <img src="/CertificateOfCompletion_ASP.NET Core Razor Pages (1) (1)_page-0001.jpg" alt="Course" className="certificate-img" onClick={() => setLightboxSrc('/CertificateOfCompletion_ASP.NET Core Razor Pages (1) (1)_page-0001.jpg')} />
            <span className="certificate-name">ASP.NET Core: Razor Pages</span>
          </div>
          <div className="certificate-item">
            <span className="skill-icon" style={{ fontSize: '2rem', color: 'var(--primary)' }}><SiNodedotjs /></span>
            <span className="certificate-name">Introduction to Node.js</span>
          </div>
          <div className="certificate-item">
            <img src="/CertificateOfCompletion_HTML Essential Training (1)_page-0001.jpg" alt="Course" className="certificate-img" onClick={() => setLightboxSrc('/CertificateOfCompletion_HTML Essential Training (1)_page-0001.jpg')} />
            <span className="certificate-name">HTML Essential Fundamentals</span>
          </div>
          <div className="certificate-item">
            <img src="/CertificateOfCompletion_CSS Essential Training (1)_page-0001 (1).jpg" alt="Course" className="certificate-img" onClick={() => setLightboxSrc('/CertificateOfCompletion_CSS Essential Training (1)_page-0001 (1).jpg')} />
            <span className="certificate-name">CSS Essential Fundamentals</span>
          </div>
          <div className="certificate-item">
            <span className="skill-icon" style={{ fontSize: '2rem', color: 'var(--primary)' }}><SiReact /></span>
            <span className="certificate-name">React Basics</span>
          </div>
          <div className="certificate-item">
            <img src="/next.jpg" alt="Course" className="certificate-img" onClick={() => setLightboxSrc('/next.jpg')} />
            <span className="certificate-name">Introduction to Next.js</span>
          </div>
          <div className="certificate-item">
            <img src="/bitbucket.jfif" alt="Course" className="certificate-img" onClick={() => setLightboxSrc('/bitbucket.jfif')} />
            <span className="certificate-name">Learning Bitbucket</span>
          </div>
          <div className="certificate-item">
            <img src="/git.jfif" alt="Course" className="certificate-img" onClick={() => setLightboxSrc('/git.jfif')} />
            <span className="certificate-name">Git and Version Control</span>
          </div>
        </div>
        </section>

        <section id="contacts">
          <h2 className="section-title">Contacts</h2>
          <p className="section-content"> Feel free to reach out to me through any of the channels below.</p>

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
        {lightboxSrc && (
        <div
          onClick={() => setLightboxSrc(null)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 9999, cursor: 'zoom-out',
          }}
        >
          <img
            src={lightboxSrc}
            alt="Certificate preview"
            style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: '12px', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
          />
        </div>
      )}
      </main>
    </>
  );
}
