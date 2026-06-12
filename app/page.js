'use client';
import { useState, useEffect } from 'react';
import {
  PhoneIcon, EnvelopeIcon, LinkIcon, FolderOpenIcon,
  ArrowDownTrayIcon, ChatBubbleLeftRightIcon, ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import {
  SiPython, SiJavascript, SiR, SiDotnet,
  SiFastapi, SiNodedotjs, SiReact, SiNextdotjs, SiHtml5, SiCss,
  SiPostgresql, SiFirebase, SiSupabase,
  SiGithub, SiBitbucket, SiPostman, SiVscodium,
  SiPycharm, SiJupyter, SiSwagger, SiRstudioide,
  SiGooglecolab, SiDocker, SiFigma, SiFlutter, SiOracle
} from 'react-icons/si';
import { FaJava, FaDatabase, FaChartBar, FaCube, FaCode, FaHospital, FaMobile, FaBrain, FaNetworkWired, FaUserShield } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { DiMsqlServer, DiVisualstudio } from 'react-icons/di';

export default function Portfolio() {
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState('personal');

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

  const personalProjects = [
    {
      title: "My Portfolio",
      description: "A modern developer portfolio built with Next.js featuring glassmorphism UI, smooth scroll navigation, skill grids, certificate showcase, and a responsive layout with animated interactions.",
      tech: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "React", icon: <SiReact /> },
        { name: "CSS", icon: <SiCss /> },
        { name: "HTML5", icon: <SiHtml5 /> },
      ],
      github: "https://github.com/MennaAli02/My-Portfolio",
      visual: "portfolio",
      accent: "#6366f1",
    },
    {
      title: "Data Analytics Dashboards",
      description: "Interactive Power BI dashboards analyzing datasets — uncovering trends, patterns, and business insights through rich visual storytelling.",
      tech: [
        { name: "Power BI", icon: <FaChartBar /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "Python", icon: <SiPython /> },
      ],
      github: "https://github.com/MennaAli02/PowerBI-Dashboards",
      visual: "analytics",
      accent: "#8b5cf6",
    },
    {
      title: "User Management Web API",
      description: "Minimal ASP.NET Core Web API with full CRUD operations, JWT authentication, input validation, global error handling via custom middleware, HTTPS redirection, response compression, and Swagger documentation.",
      tech: [
        { name: ".NET Core", icon: <SiDotnet /> },
        { name: "ASP.NET", icon: <SiDotnet /> },
        { name: "C#", icon: <FaCode /> },
        { name: "Swagger", icon: <SiSwagger /> },
      ],
      github: "https://github.com/MennaAli02/User-Management-Web-API",
      visual: "api",
      accent: "#ec4899",
    },
    {
      title: "Network Usage Monitoring API",
      description: "A backend API that tracks and reports real-time network usage metrics across devices, offering filtering, historical analysis, and alerting capabilities for system administrators.",
      tech: [
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "Python", icon: <SiPython /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "REST APIs", icon: <TbApi /> },
      ],
      github: "https://github.com/MennaAli02/Network-Usage-Monitoring-API",
      visual: "network",
      accent: "#06b6d4",
    },
    {
      title: "Healthcare Database System",
      description: "A relational database system for managing patient records, appointments, prescriptions, and clinical workflows — built with Oracle and Java, featuring a desktop UI and robust data integrity constraints.",
      tech: [
        { name: "Oracle", icon: <FaDatabase /> },
        { name: "Java", icon: <FaJava /> },
        { name: "SQL", icon: <FaDatabase /> },
      ],
      github: "https://github.com/MennaAli02/Healthcare-database-system",
      visual: "healthcare",
      accent: "#10b981",
    },
  ];

  const teamProjects = [
    {
      title: "MediGo: Electronic Health Record System",
      description: "Real-time bilingual EHR mobile app for emergency care. Led backend development and data integration with Firebase, FastAPI, and AI models for disease risk prediction, OCR, and radiology validation. Includes QR-based emergency access and multi-role management.",
      tech: [
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Python", icon: <SiPython /> },
        { name: "AI Models", icon: <FaBrain /> },
      ],
      github: "https://github.com/ClaraMagdy2/my-fastapi-app",
      visual: "medigo",
      accent: "#6366f1",
      role: "Backend Lead",
    },
    {
      title: "Medical Analytics System",
      description: "A data analytics platform for healthcare institutions providing dashboards on patient outcomes, resource utilization, and clinical performance metrics.",
      tech: [
        { name: "React", icon: <SiReact /> },
      ],
      github: "https://github.com/Esraaaalaaa/Medical_analytics_system",
      visual: "medanalytics",
      accent: "#8b5cf6",
      role: "Frontend Developer",
    },
    {
      title: "SayCare – Healthcare Application",
      description: "A comprehensive patient-facing healthcare application enabling appointment booking, doctor browsing, medical history access, and secure messaging. Built with a team to streamline patient-provider communication.",
      tech: [
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "REST APIs", icon: <TbApi /> },
      ],
      github: "https://github.com/maanaar/SayCare",
      visual: "saycare",
      accent: "#ec4899",
      role: "Frontend Developer",
    },
  ];

  /* ─── SVG project visuals ─── */
  const ProjectVisual = ({ type, accent }) => {
    const visuals = {
      portfolio: (
        <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="project-svg">
          <rect width="280" height="160" rx="10" fill="#0d0d14" />
          <rect x="0" y="0" width="280" height="28" rx="10" fill="#16161f" />
          <circle cx="16" cy="14" r="5" fill="#ff5f57" />
          <circle cx="32" cy="14" r="5" fill="#febc2e" />
          <circle cx="48" cy="14" r="5" fill="#28c840" />
          <rect x="20" y="42" width="90" height="8" rx="4" fill={accent} opacity="0.9" />
          <rect x="20" y="58" width="140" height="5" rx="3" fill="#334155" />
          <rect x="20" y="70" width="110" height="5" rx="3" fill="#334155" />
          <rect x="20" y="90" width="60" height="22" rx="6" fill={accent} opacity="0.8" />
          <rect x="90" y="90" width="60" height="22" rx="6" fill="transparent" style={{ stroke: accent, strokeWidth: 1.5 }} />
          <rect x="160" y="42" width="100" height="100" rx="12" fill="#16161f" style={{ stroke: accent, strokeWidth: 1 }} />
          <circle cx="210" cy="82" r="22" fill={accent} opacity="0.15" />
          <circle cx="210" cy="76" r="16" fill="#1e1e2e" style={{ stroke: accent, strokeWidth: 1.5 }} />
          <rect x="200" y="102" width="20" height="6" rx="3" fill={accent} opacity="0.6" />
        </svg>
      ),
      analytics: (
        <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="project-svg">
          <rect width="280" height="160" rx="10" fill="#0d0d14" />
          <rect x="14" y="110" width="28" height="36" rx="4" fill={accent} opacity="0.8" />
          <rect x="52" y="80" width="28" height="66" rx="4" fill={accent} opacity="0.65" />
          <rect x="90" y="60" width="28" height="86" rx="4" fill={accent} opacity="0.9" />
          <rect x="128" y="90" width="28" height="56" rx="4" fill={accent} opacity="0.55" />
          <rect x="166" y="50" width="28" height="96" rx="4" fill={accent} opacity="0.75" />
          <rect x="204" y="70" width="28" height="76" rx="4" fill={accent} opacity="0.6" />
          <rect x="242" y="40" width="28" height="106" rx="4" fill={accent} opacity="0.85" />
          <polyline points="14,95 52,68 90,55 128,72 166,44 204,62 242,38 270,30" fill="none" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="14" y1="148" x2="270" y2="148" stroke="#334155" strokeWidth="1" />
          <rect x="14" y="14" width="90" height="22" rx="6" fill="#16161f" />
          <rect x="20" y="22" width="50" height="6" rx="3" fill={accent} opacity="0.7" />
        </svg>
      ),
      api: (
        <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="project-svg">
          <rect width="280" height="160" rx="10" fill="#0d0d14" />
          <rect x="14" y="14" width="252" height="30" rx="6" fill="#16161f" />
          <rect x="22" y="22" width="45" height="14" rx="4" fill="#10b981" opacity="0.85" />
          <rect x="75" y="24" width="140" height="10" rx="3" fill="#334155" />
          <rect x="14" y="56" width="252" height="30" rx="6" fill="#16161f" />
          <rect x="22" y="64" width="45" height="14" rx="4" fill="#6366f1" opacity="0.85" />
          <rect x="75" y="66" width="120" height="10" rx="3" fill="#334155" />
          <rect x="14" y="98" width="252" height="30" rx="6" fill="#16161f" />
          <rect x="22" y="106" width="45" height="14" rx="4" fill="#f59e0b" opacity="0.85" />
          <rect x="75" y="108" width="100" height="10" rx="3" fill="#334155" />
          <rect x="14" y="140" width="252" height="12" rx="6" fill="#1e1e2e" />
          <rect x="14" y="140" width="170" height="12" rx="6" fill={accent} opacity="0.3" />
        </svg>
      ),
      network: (
        <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="project-svg">
          <rect width="280" height="160" rx="10" fill="#0d0d14" />
          <circle cx="140" cy="80" r="18" fill={accent} opacity="0.2" style={{ stroke: accent, strokeWidth: 2 }} />
          <circle cx="140" cy="80" r="6" fill={accent} />
          <circle cx="50" cy="40" r="10" fill="#16161f" style={{ stroke: accent, strokeWidth: 1.5 }} />
          <circle cx="230" cy="40" r="10" fill="#16161f" style={{ stroke: accent, strokeWidth: 1.5 }} />
          <circle cx="50" cy="120" r="10" fill="#16161f" style={{ stroke: accent, strokeWidth: 1.5 }} />
          <circle cx="230" cy="120" r="10" fill="#16161f" style={{ stroke: accent, strokeWidth: 1.5 }} />
          <circle cx="140" cy="20" r="8" fill="#16161f" style={{ stroke: accent, strokeWidth: 1.5 }} />
          <line x1="50" y1="40" x2="140" y2="80" stroke={accent} strokeWidth="1.5" opacity="0.6" strokeDasharray="4,3" />
          <line x1="230" y1="40" x2="140" y2="80" stroke={accent} strokeWidth="1.5" opacity="0.6" strokeDasharray="4,3" />
          <line x1="50" y1="120" x2="140" y2="80" stroke={accent} strokeWidth="1.5" opacity="0.6" strokeDasharray="4,3" />
          <line x1="230" y1="120" x2="140" y2="80" stroke={accent} strokeWidth="1.5" opacity="0.6" strokeDasharray="4,3" />
          <line x1="140" y1="20" x2="140" y2="62" stroke={accent} strokeWidth="1.5" opacity="0.6" strokeDasharray="4,3" />
          <polyline points="14,130 40,105 70,118 100,90 130,100 160,70 190,85 220,55 260,40" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        </svg>
      ),
      healthcare: (
        <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="project-svg">
          <rect width="280" height="160" rx="10" fill="#0d0d14" />
          <rect x="30" y="20" width="220" height="120" rx="12" fill="#0f1520" style={{ stroke: accent, strokeWidth: 1 }} />
          <rect x="50" y="40" width="70" height="80" rx="8" fill="#16161f" style={{ stroke: accent, strokeWidth: 1 }} />
          <rect x="64" y="62" width="42" height="6" rx="3" fill={accent} opacity="0.8" />
          <rect x="64" y="74" width="30" height="4" rx="2" fill="#334155" />
          <rect x="64" y="84" width="36" height="4" rx="2" fill="#334155" />
          <rect x="64" y="94" width="28" height="4" rx="2" fill="#334155" />
          <rect x="55" y="50" width="8" height="16" rx="2" fill="#ec4899" opacity="0.9" />
          <rect x="134" y="40" width="96" height="36" rx="8" fill="#16161f" style={{ stroke: accent, strokeWidth: 1 }} />
          <rect x="146" y="52" width="60" height="5" rx="2" fill={accent} opacity="0.6" />
          <rect x="146" y="62" width="40" height="4" rx="2" fill="#334155" />
          <rect x="134" y="88" width="96" height="32" rx="8" fill="#16161f" style={{ stroke: accent, strokeWidth: 1 }} />
          <rect x="146" y="96" width="72" height="4" rx="2" fill="#334155" />
          <rect x="146" y="106" width="55" height="4" rx="2" fill="#334155" />
        </svg>
      ),
      medigo: (
        <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="project-svg">
          <rect width="280" height="160" rx="10" fill="#0d0d14" />
          <rect x="90" y="10" width="100" height="140" rx="16" fill="#0f1520" style={{ stroke: accent, strokeWidth: 1.5 }} />
          <rect x="110" y="16" width="60" height="8" rx="4" fill="#16161f" />
          <rect x="100" y="34" width="80" height="30" rx="6" fill="#16161f" />
          <path d="M120 42 h10 v-6 h10 v6 h10 v10 h-10 v6 h-10 v-6 h-10 z" fill="#ec4899" opacity="0.9" />
          <rect x="100" y="74" width="80" height="20" rx="6" fill="#16161f" />
          <rect x="108" y="80" width="44" height="8" rx="4" fill={accent} opacity="0.7" />
          <rect x="100" y="102" width="38" height="16" rx="6" fill={accent} opacity="0.85" />
          <rect x="142" y="102" width="38" height="16" rx="6" fill="#16161f" style={{ stroke: accent, strokeWidth: 1 }} />
          <rect x="100" y="126" width="80" height="6" rx="3" fill="#16161f" />
          <rect x="100" y="126" width="55" height="6" rx="3" fill="#10b981" opacity="0.6" />
          <circle cx="30" cy="60" r="18" fill="#16161f" style={{ stroke: '#8b5cf6', strokeWidth: 1.5 }} />
          <rect x="23" y="57" width="14" height="4" rx="2" fill="#8b5cf6" opacity="0.9" />
          <rect x="28" y="52" width="4" height="14" rx="2" fill="#8b5cf6" opacity="0.9" />
          <line x1="48" y1="60" x2="90" y2="75" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3,2" opacity="0.5" />
          <circle cx="248" cy="80" r="14" fill="#16161f" style={{ stroke: '#10b981', strokeWidth: 1.5 }} />
          <text x="244" y="85" fill="#10b981" fontSize="12" fontWeight="bold">QR</text>
          <line x1="190" y1="80" x2="234" y2="80" stroke="#10b981" strokeWidth="1" strokeDasharray="3,2" opacity="0.5" />
        </svg>
      ),
      medanalytics: (
        <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="project-svg">
          <rect width="280" height="160" rx="10" fill="#0d0d14" />
          <rect x="14" y="14" width="120" height="64" rx="8" fill="#0f1520" style={{ stroke: accent, strokeWidth: 1 }} />
          <rect x="22" y="22" width="50" height="7" rx="3" fill={accent} opacity="0.7" />
          <polyline points="22,68 40,52 56,58 72,42 88,48 104,36 120,30" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="104" cy="36" r="4" fill="#10b981" />
          <rect x="146" y="14" width="120" height="64" rx="8" fill="#0f1520" style={{ stroke: accent, strokeWidth: 1 }} />
          <rect x="154" y="22" width="50" height="7" rx="3" fill={accent} opacity="0.7" />
          <circle cx="206" cy="52" r="22" fill="none" style={{ stroke: '#ec4899', strokeWidth: 6, strokeDasharray: '42 68', strokeDashoffset: '0' }} transform="rotate(-90 206 52)" />
          <circle cx="206" cy="52" r="22" fill="none" style={{ stroke: '#6366f1', strokeWidth: 6, strokeDasharray: '25 85', strokeDashoffset: '-42' }} transform="rotate(-90 206 52)" />
          <circle cx="206" cy="52" r="14" fill="#0f1520" />
          <rect x="14" y="90" width="252" height="56" rx="8" fill="#0f1520" style={{ stroke: accent, strokeWidth: 1 }} />
          <rect x="22" y="98" width="60" height="7" rx="3" fill={accent} opacity="0.7" />
          <rect x="22" y="112" width="230" height="5" rx="3" fill="#334155" />
          <rect x="22" y="112" width="160" height="5" rx="3" fill={accent} opacity="0.4" />
          <rect x="22" y="124" width="230" height="5" rx="3" fill="#334155" />
          <rect x="22" y="124" width="105" height="5" rx="3" fill="#ec4899" opacity="0.5" />
          <rect x="22" y="136" width="230" height="5" rx="3" fill="#334155" />
          <rect x="22" y="136" width="195" height="5" rx="3" fill="#10b981" opacity="0.4" />
        </svg>
      ),
      saycare: (
        <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="project-svg">
          <rect width="280" height="160" rx="10" fill="#0d0d14" />
          <rect x="20" y="14" width="240" height="28" rx="8" fill="#16161f" />
          <circle cx="36" cy="28" r="10" fill={accent} opacity="0.2" />
          <text x="31" y="32" fill={accent} fontSize="10">S</text>
          <rect x="54" y="22" width="60" height="6" rx="3" fill={accent} opacity="0.7" />
          <rect x="220" y="20" width="32" height="16" rx="6" fill={accent} opacity="0.85" />
          <rect x="20" y="54" width="80" height="96" rx="8" fill="#0f1520" style={{ stroke: accent, strokeWidth: 1 }} />
          <circle cx="60" cy="78" r="16" fill={accent} opacity="0.15" style={{ stroke: accent, strokeWidth: 1 }} />
          <circle cx="60" cy="74" r="10" fill="#16161f" style={{ stroke: accent, strokeWidth: 1 }} />
          <rect x="50" y="92" width="20" height="6" rx="3" fill={accent} opacity="0.5" />
          <rect x="30" y="104" width="60" height="4" rx="2" fill="#334155" />
          <rect x="30" y="114" width="44" height="4" rx="2" fill="#334155" />
          <rect x="30" y="124" width="60" height="16" rx="5" fill={accent} opacity="0.8" />
          <rect x="112" y="54" width="148" height="44" rx="8" fill="#0f1520" style={{ stroke: accent, strokeWidth: 1 }} />
          <rect x="122" y="64" width="80" height="5" rx="2" fill="#334155" />
          <rect x="122" y="74" width="120" height="5" rx="2" fill="#334155" />
          <rect x="122" y="84" width="60" height="5" rx="2" fill="#334155" />
          <rect x="112" y="108" width="148" height="42" rx="8" fill="#0f1520" style={{ stroke: '#ec4899', strokeWidth: 1 }} />
          <rect x="122" y="118" width="128" height="5" rx="2" fill="#334155" />
          <rect x="122" y="128" width="90" height="5" rx="2" fill="#334155" />
          <rect x="122" y="138" width="50" height="6" rx="3" fill="#ec4899" opacity="0.6" />
        </svg>
      ),
    };
    return visuals[type] || null;
  };

  const ProjectCard = ({ project, isTeam = false }) => (
    <div className="project-card-new" style={{ '--card-accent': project.accent }}>
      <div className="project-visual-wrap">
        <ProjectVisual type={project.visual} accent={project.accent} />
        {isTeam && project.role && (
          <div className="project-role-badge">{project.role}</div>
        )}
      </div>
      <div className="project-card-body">
        <h3 className="project-title-new">{project.title}</h3>
        <p className="project-desc-new">{project.description}</p>
        <div className="project-tech-row">
          {project.tech.map(({ name, icon }) => (
            <span className="project-tech-chip" key={name}>
              <span className="skill-icon">{icon}</span>
              <span>{name}</span>
            </span>
          ))}
        </div>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-github-btn">
          <SiGithub />
          <span>View on GitHub</span>
          <ArrowTopRightOnSquareIcon style={{ width: '0.85rem', height: '0.85rem' }} />
        </a>
      </div>
    </div>
  );

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
            <a href="https://github.com/MennaAli02/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FolderOpenIcon className="icon" aria-hidden="true" />
              View Projects
            </a>
            <a href="\Menna ALI.pdf" download="Menna ALI.pdf" className="btn btn-secondary">
              <ArrowDownTrayIcon className="icon" aria-hidden="true" />
              Download Resume
            </a>
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
              Healthcare systems need engineers who understand the domain and the data inside it.     
              <br /><br />I'm Menna: a backend-focused full stack developer who builds scalable APIs and clinical 
              web applications in .NET, FastAPI, and React, and a data analyst who knows what to do with 
              the data once it's there. Specialized in Health Informatics</p>
              <div className="about-chips">
                <span className="about-chip"><SiDotnet /> .NET / ASP.NET Core</span>
                <span className="about-chip"><SiFastapi /> FastAPI / Python</span>
                <span className="about-chip"><SiReact /> React / Next.js</span>
                <span className="about-chip"><FaHospital /> Health Informatics</span>
                <span className="about-chip"><FaChartBar /> Data Analytics</span>
              </div>  
              <div className="education-card" style={{ marginTop: '2rem' }}>
                <h3 className="card-title">🎓 Education</h3>
                <h4 className="card-subtitle">Faculty of Computer & Data Sciences<br />Alexandria University</h4>
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
          <p className="section-content">My professional journey in backend development, healthcare systems, and data analytics.</p>
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
                  Worked with Andalusia's management systems and healthcare workflows while developing APIs, backend modules, and data analytics solutions to improve operational efficiency.
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

        {/* ═══════════════ PROJECTS SECTION ═══════════════ */}
        <section id="projects" className="projects-section">
          <div className="glow-orb-1" style={{ top: '20%', left: '-5%' }}></div>
          <div className="glow-orb-2" style={{ bottom: '10%', right: '-5%' }}></div>

          <div className="projects-header">
            <h2 className="section-title">Projects</h2>
            <p className="section-content">
              A collection of healthcare, backend, and data-driven applications — built solo and with teams.
            </p>

            {/* Tab Toggle */}
            <div className="project-tabs">
              <button
                className={`project-tab ${activeProjectTab === 'personal' ? 'active' : ''}`}
                onClick={() => setActiveProjectTab('personal')}
              >
                <FaCode style={{ fontSize: '0.9rem' }} />
                Personal Projects
                <span className="tab-count">{personalProjects.length}</span>
              </button>
              <button
                className={`project-tab ${activeProjectTab === 'team' ? 'active' : ''}`}
                onClick={() => setActiveProjectTab('team')}
              >
                <FaHospital style={{ fontSize: '0.9rem' }} />
                Team Projects
                <span className="tab-count">{teamProjects.length}</span>
              </button>
            </div>
          </div>

          {/* Personal Projects */}
          {activeProjectTab === 'personal' && (
            <div className="projects-new-grid" key="personal">
              {personalProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          )}

          {/* Team Projects */}
          {activeProjectTab === 'team' && (
            <div className="projects-new-grid projects-team-grid" key="team">
              {teamProjects.map((project) => (
                <ProjectCard key={project.title} project={project} isTeam />
              ))}
            </div>
          )}
        </section>

        <section id="skills">
          <div className="glow-orb-1" style={{ top: 'auto', bottom: '-10%', left: '50%' }}></div>
          <h2 className="section-title">Skills</h2>
          <p className="section-content">A comprehensive overview of my technical expertise, tools, and languages.</p>
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
          <p className="section-content">Feel free to reach out</p>
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