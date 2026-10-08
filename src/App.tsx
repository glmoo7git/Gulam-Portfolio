import React, { useState, useEffect } from 'react';
import profileCutoutImg from './assets/images/profile_preview_actual_1791434709383.jpg';
import { getFullStandaloneHtml } from './standaloneHtml.ts';

interface WorkExpItem {
  id: string;
  role: string;
  company: string;
  affiliation?: string;
  summary: string;
  bullets: {
    title: string;
    description: string;
  }[];
  tags: string[];
}

interface TechProject {
  id: string;
  title: string;
  category: string;
  build: string;
  tech: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
}

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState<TechProject | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isExportHtmlOpen, setIsExportHtmlOpen] = useState(false);
  const [customAvatar, setCustomAvatar] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'philosophy', 'experience', 'projects', 'leadership', 'skills'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('gulam.iitm@alumni.iitm.ac.in');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const workExperience: WorkExpItem[] = [
    {
      id: 'morgan-stanley',
      role: 'IT Project Manager & Consultant',
      company: 'Morgan Stanley',
      affiliation: 'via Genpact',
      summary: 'Manage the end-to-end delivery of enterprise vendor onboardings and compliance reviews.',
      bullets: [
        {
          title: 'Concurrent Project Delivery',
          description: 'Act as the primary PM for 8 to 11 concurrent high-risk software onboarding projects and 90+ annual maintenance reviews, operating as a high-output consultant generating ~$170K–$200K in annual billable value for the firm.'
        },
        {
          title: 'Accelerated Lifecycle by 25%',
          description: 'Audited sequential risk workflows and transitioned them into concurrent Agile sprints on shared Jira boards, successfully cutting the end-to-end onboarding lifecycle from 6 months to 4 months.'
        },
        {
          title: 'Cross-Team Dependency Resolution',
          description: 'Act as the central bridge between Business units demanding speed and Internal Risk teams (SecArch, Privacy, DLM, Legal) enforcing compliance. Coordinate strict delivery tollgates for Single Sign-On (SAML), Data Masking, and TLS encryption.'
        },
        {
          title: 'Workflow Automation',
          description: 'Eliminated manual administrative bottlenecks by prompting Microsoft Copilot to write custom Python scripts, automating due diligence tracking, workflow diagrams, and monthly status matrices.'
        }
      ],
      tags: ['Enterprise Risk', 'Jira Agile', 'Python Automation', 'SecArch & SAML', 'Vendor Onboarding']
    },
    {
      id: 'relnto',
      role: 'Co-Founder & Product Lead',
      company: 'Relnto',
      affiliation: 'IIT Madras Nirmaan Pre-Incubation',
      summary: 'Built an early-stage peer-to-peer lending and renting platform through the IIT Madras Nirmaan pre-incubation program.',
      bullets: [
        {
          title: 'Zero-to-One Product Execution',
          description: 'Owned the product end-to-end. Defined the core strategy, mapped out a strict one-year roadmap from raw concept, and executed the build to achieve active market traction.'
        },
        {
          title: 'Incubator Milestone Delivery',
          description: 'Managed the venture through heavy scrutiny in the IIT Madras cohort, ensuring the engineering and business teams hit every critical timeline constraint without compromising on product quality.'
        }
      ],
      tags: ['0-to-1 Product', 'Roadmapping', 'IIT Madras Cohort', 'Market Traction', 'Peer-to-Peer']
    },
    {
      id: 'kriyative',
      role: 'UI/UX Design Intern',
      company: 'Kriyative Education / Kodate',
      affiliation: 'EdTech Initiative',
      summary: 'Led the design architecture for a new educational mobile app and web platform.',
      bullets: [
        {
          title: 'Scope Definition',
          description: 'Bridged business and tech by sitting with founders daily to translate ambiguous ideas into strict, locked-down project scopes and user flow diagrams before development began.'
        },
        {
          title: 'End-to-End Execution',
          description: 'Created wireframes, interactive Adobe XD prototypes, and brand assets. Owned the developer handoff, explaining exact functional requirements to ensure the final build matched the scoped prototype.'
        }
      ],
      tags: ['Wireframing', 'Adobe XD', 'Developer Handoff', 'User Flow Mapping', 'Scoping']
    },
    {
      id: 'adqvest',
      role: 'Business Analyst Intern',
      company: 'ADQVest',
      affiliation: 'Alternative Data Intelligence',
      summary: 'Researched and mapped alternative data usage across major corporate players.',
      bullets: [
        {
          title: 'Agile Team Leadership',
          description: 'Led a 3-person analyst team using weekly Agile sprints to conduct targeted discovery sessions with senior directors at Godrej Sara Lee, ITC, and Pidilite.'
        },
        {
          title: 'Strategic Synthesis',
          description: 'Translated messy interview notes and incomplete market information into an actionable strategic roadmap that leadership used to expand market coverage.'
        }
      ],
      tags: ['Agile Discovery', 'Executive Interviews', 'Alternative Data', 'Strategic Roadmap', 'Enterprise Market']
    }
  ];

  const technicalProjects: TechProject[] = [
    {
      id: 'voice-ai',
      title: 'Real-Time Multimodal Voice AI',
      category: 'Agentic Systems & Real-Time Orchestration',
      build: 'Architected and deployed a real-time Voice AI assistant for a personal portfolio using the Vanira orchestration platform.',
      tech: 'Integrated Sarvam AI for Indic STT/TTS and GPT-4 for conversational reasoning. Engineered interactive on-screen actions—such as in-call contact forms and automatic page navigation—achieving sub-600ms conversational response times with zero dedicated backend server maintenance.',
      highlights: [
        'Sub-600ms conversational latency with edge audio streaming',
        'Sarvam AI for localized Indic Speech-to-Text and Text-to-Speech',
        'GPT-4 conversational engine with deterministic tool calls',
        'Zero dedicated backend server maintenance required'
      ],
      metrics: [
        { label: 'Response Latency', value: '< 600ms' },
        { label: 'Voice Pipeline', value: 'Sarvam AI' },
        { label: 'LLM Reasoning', value: 'GPT-4' },
        { label: 'Infrastructure', value: 'Serverless' }
      ]
    },
    {
      id: 'job-match-agent',
      title: 'AI Job Match Automation Agent',
      category: 'Autonomous Scraping & Intelligent Triage',
      build: 'Designed an end-to-end AI automation pipeline to optimize my personal job search without manual scrolling.',
      tech: 'Utilized n8n, Apify, and the Gemini API to autonomously scrape LinkedIn job postings, apply a custom AI-based relevance score mapping against my profile, and feed top-tier matches into a live Google Sheets tracker.',
      highlights: [
        'Headless web scraping with Apify actor integration',
        'Gemini API contextual scoring against multi-vector profile schema',
        'Automated workflow pipeline orchestrated in self-hosted n8n',
        'Synchronous live ingestion to Google Sheets recruiter tracker'
      ],
      metrics: [
        { label: 'Workflow Engine', value: 'n8n' },
        { label: 'Scraping Grid', value: 'Apify' },
        { label: 'Evaluation Model', value: 'Gemini API' },
        { label: 'Data Sink', value: 'Google Sheets' }
      ]
    }
  ];

  const handleDownloadStandalone = () => {
    const element = document.createElement("a");
    const file = new Blob([getFullStandaloneHtml()], {type: 'text/html'});
    element.href = URL.createObjectURL(file);
    element.download = "gulam-ahmed-raza-portfolio.html";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const activePhoto = customAvatar || profileCutoutImg;

  return (
    <div className="min-h-screen bg-[#0c0a09] text-[#e5ded4] relative selection:bg-[#ff6b00]/30 selection:text-white font-sans">
      {/* Subtle warm ambient lighting overlays */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-1/4 w-[650px] h-[650px] bg-[#3a2213]/15 rounded-full blur-[140px]" />
        <div className="absolute top-[35%] left-[-100px] w-[500px] h-[500px] bg-[#22160f]/25 rounded-full blur-[130px]" />
        <div className="absolute bottom-[20%] right-[-50px] w-[550px] h-[550px] bg-[#2a1a11]/20 rounded-full blur-[150px]" />
      </div>

      {/* STICKY TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-[#0c0a09]/90 backdrop-blur-md border-b border-[#2a221b]/80 transition-colors">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Zone 1: Single text element brand wordmark with emblem */}
          <a href="#hero" className="flex items-center gap-3.5 group text-left">
            <div className="w-9 h-9 rounded-full border border-[#ff6b00]/40 flex items-center justify-center bg-[#18130e] text-[#ff6b00] group-hover:border-[#ff6b00] group-hover:shadow-[0_0_12px_rgba(255,107,0,0.3)] transition-all">
              <i className="fa-solid fa-compass text-sm"></i>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-base tracking-wide text-[#f4efe8] group-hover:text-[#ff6b00] transition-colors leading-tight">
                GULAM AHMED RAZA
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#a39485] font-medium">
                Technical Project Manager
              </span>
            </div>
          </a>

          {/* Zone 2: Clean 4–6 text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-wider uppercase font-medium text-[#b5a697]">
            <a href="#hero" className={`hover:text-[#f4efe8] transition-colors ${activeSection === 'hero' ? 'text-[#ff6b00] font-semibold' : ''}`}>
              About
            </a>
            <a href="#philosophy" className={`hover:text-[#f4efe8] transition-colors ${activeSection === 'philosophy' ? 'text-[#ff6b00] font-semibold' : ''}`}>
              Philosophy
            </a>
            <a href="#experience" className={`hover:text-[#f4efe8] transition-colors ${activeSection === 'experience' ? 'text-[#ff6b00] font-semibold' : ''}`}>
              Experience
            </a>
            <a href="#projects" className={`hover:text-[#f4efe8] transition-colors ${activeSection === 'projects' ? 'text-[#ff6b00] font-semibold' : ''}`}>
              Projects
            </a>
            <a href="#leadership" className={`hover:text-[#f4efe8] transition-colors ${activeSection === 'leadership' ? 'text-[#ff6b00] font-semibold' : ''}`}>
              Leadership
            </a>
            <a href="#skills" className={`hover:text-[#f4efe8] transition-colors ${activeSection === 'skills' ? 'text-[#ff6b00] font-semibold' : ''}`}>
              Skills
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#ff6b00] border border-[#523d2b] hover:border-[#ff6b00] hover:bg-[#1a140e] transition-all rounded"
            >
              <i className="fa-solid fa-file-arrow-down mr-2 text-[11px]"></i>
              Resume
            </button>
            <button
              onClick={() => setIsConnectModalOpen(true)}
              className="px-5 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-[#ff6b00] hover:bg-[#ff7d1f] transition-all rounded shadow-[0_2px_12px_rgba(255,107,0,0.25)]"
            >
              Let's Connect
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#b5a697] hover:text-white"
            aria-label="Toggle Navigation"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#120e0b] border-b border-[#2a221b] px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-3 text-sm tracking-wider uppercase text-[#c7b9ab]">
              <a onClick={() => setMobileMenuOpen(false)} href="#hero" className="hover:text-[#ff6b00]">About</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#philosophy" className="hover:text-[#ff6b00]">Philosophy</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#experience" className="hover:text-[#ff6b00]">Experience</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#projects" className="hover:text-[#ff6b00]">Projects</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#leadership" className="hover:text-[#ff6b00]">Leadership</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#skills" className="hover:text-[#ff6b00]">Skills</a>
            </nav>
            <div className="pt-4 border-t border-[#2a221b] flex flex-col gap-2.5">
              <button
                onClick={() => { setMobileMenuOpen(false); setIsResumeModalOpen(true); }}
                className="w-full py-2.5 text-xs uppercase tracking-wider text-[#ff6b00] border border-[#523d2b] rounded text-center font-medium"
              >
                Download Resume
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); setIsConnectModalOpen(true); }}
                className="w-full py-2.5 text-xs uppercase tracking-wider text-white bg-[#ff6b00] rounded text-center font-semibold"
              >
                Let's Connect
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        {/* ========================================================================= */}
        {/* SECTION 1: HOMEPAGE / HERO SECTION */}
        {/* ========================================================================= */}
        <section id="hero" className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between pt-8 pb-12 overflow-hidden border-b border-[#241c15]">
          <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center flex-grow">
            
            {/* HERO LEFT COLUMN: Clean Modern Typography with Extra Breathing Space */}
            <div className="lg:col-span-6 flex flex-col justify-center z-10 lg:pr-4">
              {/* Pre-heading: "Akif" removed */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#ff6b00] uppercase">
                  | GULAM AHMED RAZA |
                </span>
              </div>

              {/* Headline: Clean Modern Sans-Serif, "& IT Consultant" removed */}
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] text-[#f7f3ec] tracking-[-0.02em] mb-4 text-balance">
                Technical Project Manager
              </h1>

              {/* Social Icon Circles Under Headline (As shown in demo screenshot) */}
              <div className="flex items-center gap-3 mb-6">
                <a
                  href="https://www.linkedin.com/in/glm-ar/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-[#3b2d22] hover:border-[#ff6b00] flex items-center justify-center text-[#c5b5a5] hover:text-[#ff6b00] transition-all bg-[#15100c] hover:bg-[#1f1711]"
                  title="LinkedIn Profile"
                >
                  <i className="fa-brands fa-linkedin-in text-sm"></i>
                </a>
                <a
                  href="https://github.com/glmoo7git"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-[#3b2d22] hover:border-[#ff6b00] flex items-center justify-center text-[#c5b5a5] hover:text-[#ff6b00] transition-all bg-[#15100c] hover:bg-[#1f1711]"
                  title="GitHub Profile"
                >
                  <i className="fa-brands fa-github text-sm"></i>
                </a>
                <button
                  onClick={() => setIsConnectModalOpen(true)}
                  className="w-10 h-10 rounded-full border border-[#3b2d22] hover:border-[#ff6b00] flex items-center justify-center text-[#c5b5a5] hover:text-[#ff6b00] transition-all bg-[#15100c] hover:bg-[#1f1711]"
                  title="Direct Message"
                >
                  <i className="fa-regular fa-paper-plane text-sm"></i>
                </button>
              </div>

              {/* Sub-headline directly from document */}
              <p className="text-sm md:text-base text-[#cfc5b8] font-normal leading-relaxed mb-6 max-w-xl">
                Enterprise Discipline. Startup Speed. I bridge Business strategy, Product scope, and Engineering execution to drive iterative, incremental delivery and on-time releases.
              </p>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8">
                {/* Primary Button: Modern Orange Accent */}
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#ff6b00] hover:bg-[#ff7d1f] text-white text-xs font-semibold tracking-wider uppercase rounded transition-all shadow-[0_4px_16px_rgba(255,107,0,0.3)] hover:shadow-[0_6px_22px_rgba(255,107,0,0.45)]"
                >
                  <i className="fa-solid fa-play text-[10px]"></i>
                  <span>View My Work</span>
                </a>

                {/* Secondary Button */}
                <button
                  onClick={() => setIsResumeModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#17120d] hover:bg-[#221a13] text-[#e8dfd3] border border-[#523d2b] hover:border-[#ff6b00] text-xs font-semibold tracking-wider uppercase rounded transition-all"
                >
                  <i className="fa-solid fa-download text-[11px] text-[#ff6b00]"></i>
                  <span>Download Resume</span>
                </button>

                {/* Tertiary Button */}
                <button
                  onClick={() => setIsConnectModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-transparent hover:bg-[#1a140e] text-[#ff6b00] border border-[#ff6b00]/40 hover:border-[#ff6b00] text-xs font-semibold tracking-wider uppercase rounded transition-all"
                >
                  <span>Let's Connect</span>
                </button>
              </div>

              {/* Elevator Pitch (Label "The Elevator Pitch" has been removed) */}
              <div className="pt-6 border-t border-[#261d15] max-w-xl">
                <p className="text-xs sm:text-[13px] text-[#b0a294] leading-relaxed">
                  I am an IT Project Manager with over 5 years of combined experience scaling from zero-to-one startups to managing complex enterprise workflows. I specialize in untangling cross-team dependencies, building automated tracking tools, and translating ambiguous business requirements into strict Agile sprints. My philosophy is simple: I remove operational friction so technical teams can focus entirely on building.
                </p>
              </div>

              {/* Integrated Key Stats Strip Under Pitch (As in demo screenshot) */}
              <div className="mt-8 p-4 rounded-xl bg-[#14100c] border border-[#2b2016] flex items-center justify-between max-w-xl shadow-lg">
                <div className="text-center px-2 sm:px-4">
                  <div className="font-heading font-bold text-2xl sm:text-3xl text-[#ff6b00]">
                    5+
                  </div>
                  <div className="text-[10px] uppercase text-[#a8998a] tracking-wider mt-0.5 font-medium">
                    Years Experience
                  </div>
                </div>
                <div className="w-[1px] h-9 bg-[#2d2218]"></div>
                <div className="text-center px-2 sm:px-4">
                  <div className="font-heading font-bold text-2xl sm:text-3xl text-[#f4efe8]">
                    8–11
                  </div>
                  <div className="text-[10px] uppercase text-[#a8998a] tracking-wider mt-0.5 font-medium">
                    Concurrent Projects
                  </div>
                </div>
                <div className="w-[1px] h-9 bg-[#2d2218]"></div>
                <div className="text-center px-2 sm:px-4">
                  <div className="font-heading font-bold text-2xl sm:text-3xl text-[#ff6b00]">
                    ~$200K
                  </div>
                  <div className="text-[10px] uppercase text-[#a8998a] tracking-wider mt-0.5 font-medium">
                    Annual Value
                  </div>
                </div>
              </div>
            </div>

            {/* HERO RIGHT COLUMN: Integrated Photo Over Subtle Dark Circular Backdrop (With Ample Breathing Room) */}
            <div className="lg:col-span-6 flex justify-center items-center relative order-first lg:order-none my-6 lg:my-0 pl-0 lg:pl-10 xl:pl-16">
              {/* Outer ambient glow disc */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[360px] sm:w-[450px] lg:w-[500px] h-[360px] sm:h-[450px] lg:h-[500px] rounded-full bg-gradient-to-tr from-[#3a2012]/30 via-[#22150e]/40 to-transparent blur-[80px]" />
              </div>

              {/* Circular Container Matching Demo Screenshot */}
              <div className="relative w-[340px] sm:w-[420px] lg:w-[460px] xl:w-[490px] h-[340px] sm:h-[420px] lg:h-[460px] xl:h-[490px] flex items-center justify-center">
                {/* Subtle dark circular shape background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#241c16] via-[#1a140f] to-[#110e0b] border border-[#382b20]/70 shadow-[0_25px_60px_rgba(0,0,0,0.85)]"></div>
                
                {/* Secondary inner ring for refined depth */}
                <div className="absolute inset-4 rounded-full border border-[#ff6b00]/10 pointer-events-none"></div>

                {/* Profile Image Standing Over/Inside the Circular Frame */}
                <div className="relative z-10 w-full h-full flex items-end justify-center overflow-hidden rounded-full">
                  <img
                    src={activePhoto}
                    alt="Gulam Ahmed Raza - Technical Project Manager"
                    referrerPolicy="no-referrer"
                    className="w-[90%] sm:w-[86%] h-auto object-cover object-top filter contrast-[1.03] brightness-[1.0] transition-transform duration-700 hover:scale-[1.02] translate-y-2 sm:translate-y-4"
                  />
                  {/* Subtle blend gradient at bottom of circular cut */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#110e0b] via-[#110e0b]/60 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM STRIP / CREDENTIALS ROW */}
          <div className="max-w-7xl mx-auto px-6 w-full mt-12 pt-6 border-t border-[#201812] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-[#a39485]">
            {/* Contact Information */}
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#18120d] border border-[#3d2c1e] flex items-center justify-center text-[#ff6b00]">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <div className="text-[10px] tracking-widest uppercase text-[#7a6a5b] font-medium">
                  Direct Contact
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs text-[#e0d6cb] hover:text-[#ff6b00] transition-colors flex items-center gap-1.5"
                >
                  <span>gulam.iitm@alumni.iitm.ac.in</span>
                  <i className={`fa-regular ${copiedEmail ? 'fa-check text-emerald-400' : 'fa-copy text-[10px] text-[#8c7866]'}`}></i>
                </button>
              </div>
            </div>

            {/* Institutional Credentials */}
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#18120d] border border-[#3d2c1e] flex items-center justify-center text-[#ff6b00]">
                <i className="fa-solid fa-building-columns"></i>
              </div>
              <div>
                <div className="text-[10px] tracking-widest uppercase text-[#7a6a5b] font-medium">
                  Enterprise Experience &amp; Alma Mater
                </div>
                <div className="text-xs text-[#e0d6cb]">
                  Morgan Stanley (Genpact) · IIT Madras Alumnus
                </div>
              </div>
            </div>

            {/* Social Icons with exact updated profile URLs */}
            <div className="flex items-center gap-3.5 text-base text-[#b8a99a]">
              <a
                href="https://www.linkedin.com/in/glm-ar/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#36271a] hover:border-[#ff6b00] flex items-center justify-center hover:text-[#ff6b00] transition-colors"
                title="LinkedIn Profile"
              >
                <i className="fa-brands fa-linkedin-in text-xs"></i>
              </a>
              <a
                href="https://github.com/glmoo7git"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#36271a] hover:border-[#ff6b00] flex items-center justify-center hover:text-[#ff6b00] transition-colors"
                title="GitHub Profile"
              >
                <i className="fa-brands fa-github text-xs"></i>
              </a>
              <button
                onClick={() => setIsConnectModalOpen(true)}
                className="w-8 h-8 rounded-full border border-[#36271a] hover:border-[#ff6b00] flex items-center justify-center hover:text-[#ff6b00] transition-colors"
                title="Send Message"
              >
                <i className="fa-regular fa-paper-plane text-xs"></i>
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: CORE PHILOSOPHY / "HOW I WORK" */}
        {/* ========================================================================= */}
        <section id="philosophy" className="py-24 border-b border-[#241c15] relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#ff6b00] uppercase block mb-3">
                Strategic Operating Model
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#f4efe8] mb-4">
                Core Philosophy / &ldquo;How I Work&rdquo;
              </h2>
              <p className="text-sm sm:text-base text-[#9e8f80] italic leading-relaxed">
                Highlights your approach to project management so recruiters see you as a strategic thinker, not just a task-tracker.
              </p>
            </div>

            {/* 4 Architectural Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Card 1 */}
              <div className="p-8 rounded-xl bg-[#130f0c] border border-[#2d2218] hover:border-[#ff6b00]/60 transition-all group duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs text-[#ff6b00] tracking-widest uppercase">
                    01. Execution Governance
                  </span>
                  <i className="fa-solid fa-arrows-split-up-and-left text-[#634e3a] group-hover:text-[#ff6b00] transition-colors"></i>
                </div>
                <h3 className="font-heading font-semibold text-2xl text-[#f7f3ec] mb-4 group-hover:text-[#ff7d1f] transition-colors">
                  Pragmatic Agile, Not Rigid Playbooks
                </h3>
                <p className="text-sm text-[#b5a798] leading-relaxed mb-6">
                  I shape the process around what the team actually needs. I use structured Scrum sprints for defined remediation and time-boxed deliverables, and Kanban for continuous-flow intake and maintenance.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-[#a89582] pt-4 border-t border-[#231a13]">
                  <span>Scrum Remediation</span>
                  <span aria-hidden="true">·</span>
                  <span>Kanban Continuous Flow</span>
                  <span aria-hidden="true">·</span>
                  <span>Context-Driven Agility</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-8 rounded-xl bg-[#130f0c] border border-[#2d2218] hover:border-[#ff6b00]/60 transition-all group duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs text-[#ff6b00] tracking-widest uppercase">
                    02. Scope &amp; Estimation
                  </span>
                  <i className="fa-solid fa-chart-line text-[#634e3a] group-hover:text-[#ff6b00] transition-colors"></i>
                </div>
                <h3 className="font-heading font-semibold text-2xl text-[#f7f3ec] mb-4 group-hover:text-[#ff7d1f] transition-colors">
                  Data-Driven Forecasting over Blind Dates
                </h3>
                <p className="text-sm text-[#b5a798] leading-relaxed mb-6">
                  I never set engineering teams up for failure by making blind promises on unelaborated scope. I separate the knowns from the unknowns and provide business stakeholders with historical, data-backed confidence ranges.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-[#a89582] pt-4 border-t border-[#231a13]">
                  <span>Historical Confidence Ranges</span>
                  <span aria-hidden="true">·</span>
                  <span>Scope Elaboration</span>
                  <span aria-hidden="true">·</span>
                  <span>Uncertainty Modeling</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-8 rounded-xl bg-[#130f0c] border border-[#2d2218] hover:border-[#ff6b00]/60 transition-all group duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs text-[#ff6b00] tracking-widest uppercase">
                    03. Continuous Optimization
                  </span>
                  <i className="fa-solid fa-arrows-rotate text-[#634e3a] group-hover:text-[#ff6b00] transition-colors"></i>
                </div>
                <h3 className="font-heading font-semibold text-2xl text-[#f7f3ec] mb-4 group-hover:text-[#ff7d1f] transition-colors">
                  Actionable Retrospectives
                </h3>
                <p className="text-sm text-[#b5a798] leading-relaxed mb-6">
                  I treat retrospectives as our most critical alignment tool—using them to share cross-team updates, swarm major blockers, and figure out what manual processes we need to automate next to increase our velocity.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-[#a89582] pt-4 border-t border-[#231a13]">
                  <span>Blocker Swarming</span>
                  <span aria-hidden="true">·</span>
                  <span>Automated Friction Removal</span>
                  <span aria-hidden="true">·</span>
                  <span>Cross-Team Alignment</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="p-8 rounded-xl bg-[#130f0c] border border-[#2d2218] hover:border-[#ff6b00]/60 transition-all group duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs text-[#ff6b00] tracking-widest uppercase">
                    04. Stakeholder Trust
                  </span>
                  <i className="fa-solid fa-shield-halved text-[#634e3a] group-hover:text-[#ff6b00] transition-colors"></i>
                </div>
                <h3 className="font-heading font-semibold text-2xl text-[#f7f3ec] mb-4 group-hover:text-[#ff7d1f] transition-colors">
                  Direct &amp; Factual Communication
                </h3>
                <p className="text-sm text-[#b5a798] leading-relaxed mb-6">
                  I don't hide bad news or spin delays. I bring Business, Tech, and Risk teams together to re-forecast timelines and find phased solutions backed by formal risk acceptance.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-[#a89582] pt-4 border-t border-[#231a13]">
                  <span>Radical Candor</span>
                  <span aria-hidden="true">·</span>
                  <span>Formal Risk Acceptance</span>
                  <span aria-hidden="true">·</span>
                  <span>Phased Timelines</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: WORK EXPERIENCE */}
        {/* ========================================================================= */}
        <section id="experience" className="py-24 border-b border-[#241c15] relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#ff6b00] uppercase block mb-3">
                Chronology of Ownership
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#f4efe8] mb-4">
                Work Experience
              </h2>
              <p className="text-sm sm:text-base text-[#9e8f80] italic leading-relaxed">
                Your professional history, focused on metrics, ownership, and cross-team collaboration.
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-12 relative before:absolute before:inset-0 before:left-3.5 md:before:left-4 before:w-[1px] before:bg-[#2b2016] before:h-full">
              {workExperience.map((exp, index) => (
                <div key={exp.id} className="relative pl-10 md:pl-12 group">
                  <div className="absolute left-1.5 md:left-2 top-2 w-5 h-5 -translate-x-1/2 rounded-full border-2 border-[#5a422d] bg-[#120e0b] group-hover:border-[#ff6b00] group-hover:bg-[#ff6b00] transition-all"></div>

                  <div className="p-8 sm:p-10 rounded-2xl bg-[#130f0c] border border-[#2a1f16] group-hover:border-[#4f3824] transition-all shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 mb-4 pb-4 border-b border-[#241a12]">
                      <div>
                        <span className="text-xs font-mono text-[#ff6b00] uppercase tracking-wider block mb-1">
                          0{index + 1}. {exp.company} {exp.affiliation && `(${exp.affiliation})`}
                        </span>
                        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#f7f3ec]">
                          {exp.role}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs text-[#9c8b7c]">
                        {exp.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="text-[#a89582]">
                            {tag} {tIdx < exp.tags.length - 1 && '·'}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-[#d8cec2] mb-6 font-medium">
                      {exp.summary}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {exp.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="p-4 rounded-lg bg-[#18120d]/80 border border-[#2b1f15] hover:border-[#523d2b] transition-colors">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ff7d1f] mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]"></span>
                            {bullet.title}
                          </h4>
                          <p className="text-xs sm:text-[13px] text-[#b8ab9d] leading-relaxed">
                            {bullet.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: TECHNICAL PROJECTS & AUTOMATION */}
        {/* ========================================================================= */}
        <section id="projects" className="py-24 border-b border-[#241c15] relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#ff6b00] uppercase block mb-3">
                Hands-On Engineering
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#f4efe8] mb-4">
                Technical Projects &amp; Automation
              </h2>
              <p className="text-sm sm:text-base text-[#9e8f80] italic leading-relaxed">
                Proves you possess strong technical aptitude and hands-on system building skills.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {technicalProjects.map((project, pIdx) => (
                <div
                  key={project.id}
                  className="p-8 sm:p-10 rounded-2xl bg-[#130f0c] border border-[#2a1f16] hover:border-[#ff6b00]/60 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono tracking-widest uppercase text-[#ff6b00]">
                        0{pIdx + 1} // {project.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-[11px] text-[#52b788]">
                        <span className="w-2 h-2 rounded-full bg-[#52b788] animate-pulse"></span>
                        Production Deployed
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#f7f3ec] mb-6 group-hover:text-[#ff7d1f] transition-colors">
                      &lsquo;{project.title}&rsquo;
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-3 rounded-lg bg-[#18130e] border border-[#2a1e14] text-center">
                          <div className="font-heading font-bold text-lg text-[#f4efe8]">
                            {m.value}
                          </div>
                          <div className="text-[10px] tracking-wider uppercase text-[#8c7a68] mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ff7d1f] mb-2 flex items-center gap-2">
                        <i className="fa-solid fa-cube text-[11px]"></i>
                        The Build
                      </h4>
                      <p className="text-sm text-[#c4b6a7] leading-relaxed">
                        {project.build}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ff7d1f] mb-2 flex items-center gap-2">
                        <i className="fa-solid fa-microchip text-[11px]"></i>
                        The Tech
                      </h4>
                      <p className="text-sm text-[#b8ab9d] leading-relaxed">
                        {project.tech}
                      </p>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-[#231a13]">
                      {project.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#a69686]">
                          <i className="fa-solid fa-check text-[#ff6b00] text-[10px] mt-1 shrink-0"></i>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#241a12] flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#ff6b00] hover:text-white transition-colors"
                    >
                      <span>Inspect System Specs</span>
                      <i className="fa-solid fa-arrow-right text-[11px]"></i>
                    </button>
                    <span className="text-[11px] font-mono text-[#735f4e]">
                      Zero Backend Drift
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: LEADERSHIP & EXTRACURRICULAR IMPACT (IIT MADRAS) */}
        {/* ========================================================================= */}
        <section id="leadership" className="py-24 border-b border-[#241c15] relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#ff6b00] uppercase block mb-3">
                IIT Madras Track Record
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#f4efe8] mb-4">
                Leadership &amp; Extracurricular Impact (IIT Madras)
              </h2>
              <p className="text-sm sm:text-base text-[#9e8f80] italic leading-relaxed">
                Highlights your ability to manage people, budgets, and deliver projects outside of standard corporate structures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Media Club */}
              <div className="p-8 sm:p-10 rounded-2xl bg-[#130f0c] border border-[#2a1f16] hover:border-[#ff6b00]/60 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono tracking-wider text-[#ff6b00] uppercase">
                      Creative Production &amp; Scale
                    </span>
                    <span className="text-xs text-[#8c7866]">IIT Madras</span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#f7f3ec] mb-3">
                    Content Generation Head | Institute Media Club
                  </h3>

                  <p className="text-sm text-[#dfd6cc] font-medium mb-6">
                    Led a 15-member creative team to build a strong filmmaking culture on campus.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="p-4 rounded-lg bg-[#18120d] border border-[#271d14]">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ff7d1f] mb-1">
                        Fiscal Responsibility &amp; Execution
                      </h4>
                      <p className="text-xs sm:text-[13px] text-[#b8aa9b] leading-relaxed">
                        Managed multiple project budgets of ₹30K each, acting as the producer to balance creative vision with strict project execution timelines.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-[#18120d] border border-[#271d14]">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ff7d1f] mb-1">
                        Audience Reach &amp; Campus Impact
                      </h4>
                      <p className="text-xs sm:text-[13px] text-[#b8aa9b] leading-relaxed">
                        Delivered music videos and short films generating over 25,000 views, and launched a flagship campus event drawing 1,500+ participants.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-6 border-t border-[#231a13] text-center">
                  <div className="p-2">
                    <div className="font-heading font-bold text-xl text-[#f4efe8]">15</div>
                    <div className="text-[10px] uppercase text-[#8c7866]">Team Members</div>
                  </div>
                  <div className="p-2">
                    <div className="font-heading font-bold text-xl text-[#ff6b00]">25K+</div>
                    <div className="text-[10px] uppercase text-[#8c7866]">Media Views</div>
                  </div>
                  <div className="p-2">
                    <div className="font-heading font-bold text-xl text-[#f4efe8]">1,500+</div>
                    <div className="text-[10px] uppercase text-[#8c7866]">Event Guests</div>
                  </div>
                </div>
              </div>

              {/* Weightlifting */}
              <div className="p-8 sm:p-10 rounded-2xl bg-[#130f0c] border border-[#2a1f16] hover:border-[#ff6b00]/60 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono tracking-wider text-[#ff6b00] uppercase">
                      Athletic Leadership &amp; Program Building
                    </span>
                    <span className="text-xs text-[#8c7866]">IIT Madras</span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#f7f3ec] mb-3">
                    Institute Captain | IITM Weightlifting
                  </h3>

                  <p className="text-sm text-[#dfd6cc] font-medium mb-6">
                    Led a 12-member team to win the Overall Sportsfest Championship in 2019 while winning the Best Lifter Award.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="p-4 rounded-lg bg-[#18120d] border border-[#271d14]">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ff7d1f] mb-1">
                        Strategic Capital &amp; Mentorship
                      </h4>
                      <p className="text-xs sm:text-[13px] text-[#b8aa9b] leading-relaxed">
                        Operated as a strategic manager: Owned a ₹7 Lakh budget, mentored 20+ freshmen, and successfully launched the institute's first-ever women's and specially-abled powerlifting programs from scratch.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-[#18120d] border border-[#271d14]">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ff7d1f] mb-1">
                        Inclusion &amp; Program Foundation
                      </h4>
                      <p className="text-xs sm:text-[13px] text-[#b8aa9b] leading-relaxed">
                        Pioneered training protocols, safety governance, and institutional budget approvals ensuring lasting program vitality for subsequent cohorts.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-6 border-t border-[#231a13] text-center">
                  <div className="p-2">
                    <div className="font-heading font-bold text-xl text-[#ff6b00]">₹7 Lakh</div>
                    <div className="text-[10px] uppercase text-[#8c7866]">Budget Managed</div>
                  </div>
                  <div className="p-2">
                    <div className="font-heading font-bold text-xl text-[#f4efe8]">20+</div>
                    <div className="text-[10px] uppercase text-[#8c7866]">Freshmen Mentored</div>
                  </div>
                  <div className="p-2">
                    <div className="font-heading font-bold text-xl text-[#ff6b00]">Gold '19</div>
                    <div className="text-[10px] uppercase text-[#8c7866]">Best Lifter</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: SKILLS & TOOLS STACK */}
        {/* ========================================================================= */}
        <section id="skills" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#ff6b00] uppercase block mb-3">
                Domain Competencies
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#f4efe8] mb-4">
                Skills &amp; Tools Stack
              </h2>
              <p className="text-sm sm:text-base text-[#9e8f80] italic leading-relaxed">
                A quick-reference section for recruiters scanning for keywords.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Category 1 */}
              <div className="p-8 rounded-xl bg-[#130f0c] border border-[#2d2218]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-[#1e1710] border border-[#3d2c1e] flex items-center justify-center text-[#ff6b00]">
                    <i className="fa-solid fa-diagram-project text-xs"></i>
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-[#f7f3ec]">
                    Project &amp; Delivery Management
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    'Agile Frameworks',
                    'Scrum Ceremonies',
                    'Kanban Continuous Flow',
                    'Cross-Functional Dependency Mapping',
                    'Retrospective Facilitation',
                    'Release Planning',
                    'Risk Mitigation & Compliance Governance'
                  ].map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-1.5 rounded bg-[#1a140f] border border-[#3b2b1d] text-xs text-[#d8cec2] hover:border-[#ff6b00] hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 2 */}
              <div className="p-8 rounded-xl bg-[#130f0c] border border-[#2d2218]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-[#1e1710] border border-[#3d2c1e] flex items-center justify-center text-[#ff6b00]">
                    <i className="fa-solid fa-screwdriver-wrench text-xs"></i>
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-[#f7f3ec]">
                    Technical Tools
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    'Jira Cloud',
                    'Confluence / TWiki / SharePoint',
                    'Power BI',
                    'Advanced Excel',
                    'ServiceNow'
                  ].map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-1.5 rounded bg-[#1a140f] border border-[#3b2b1d] text-xs text-[#d8cec2] hover:border-[#ff6b00] hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 3 */}
              <div className="p-8 rounded-xl bg-[#130f0c] border border-[#2d2218]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-[#1e1710] border border-[#3d2c1e] flex items-center justify-center text-[#ff6b00]">
                    <i className="fa-solid fa-robot text-xs"></i>
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-[#f7f3ec]">
                    Automation &amp; AI
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    'Microsoft Copilot (Prompt Engineering)',
                    'Python',
                    'n8n',
                    'API Integrations (Gemini, Apify)',
                    'Vanira Orchestration',
                    'LLMs (GPT-4, Sarvam AI)'
                  ].map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-1.5 rounded bg-[#1a140f] border border-[#3b2b1d] text-xs text-[#d8cec2] hover:border-[#ff6b00] hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 4 */}
              <div className="p-8 rounded-xl bg-[#130f0c] border border-[#2d2218]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-[#1e1710] border border-[#3d2c1e] flex items-center justify-center text-[#ff6b00]">
                    <i className="fa-solid fa-pen-ruler text-xs"></i>
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-[#f7f3ec]">
                    Product &amp; Design
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    'UI/UX Wireframing',
                    'Adobe XD',
                    'User Flow Mapping',
                    'Product Roadmapping',
                    'Requirements Gathering (Discovery)'
                  ].map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-1.5 rounded bg-[#1a140f] border border-[#3b2b1d] text-xs text-[#d8cec2] hover:border-[#ff6b00] hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION BANNER & EXPORT TOOL */}
        <section className="py-20 border-t border-[#241c15] bg-[#0f0c09]">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#ff6b00] uppercase block mb-3">
              Available For Enterprise &amp; High-Growth Engagements
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#f4efe8] mb-6">
              Let's Build Resilient Delivery Systems.
            </h2>
            <p className="text-sm sm:text-base text-[#b8ab9d] max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether untangling complex regulatory dependencies or setting up pragmatic Agile sprints from zero, I ensure your business vision transitions smoothly into production.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setIsConnectModalOpen(true)}
                className="px-8 py-3.5 bg-[#ff6b00] hover:bg-[#ff7d1f] text-white text-xs font-semibold tracking-wider uppercase rounded transition-all shadow-[0_4px_20px_rgba(255,107,0,0.35)]"
              >
                Initiate Conversation
              </button>
              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="px-7 py-3.5 bg-[#17120d] hover:bg-[#221a13] text-[#e8dfd3] border border-[#523d2b] hover:border-[#ff6b00] text-xs font-semibold tracking-wider uppercase rounded transition-all"
              >
                Executive Summary / Highlights
              </button>
              <button
                onClick={() => setIsExportHtmlOpen(true)}
                className="px-5 py-3.5 bg-transparent hover:bg-[#1a140e] text-[#a39382] hover:text-[#ff6b00] border border-[#36271a] text-xs font-semibold tracking-wider uppercase rounded transition-all"
                title="Single File HTML Export"
              >
                <i className="fa-solid fa-code mr-2"></i>
                Single-File HTML
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* QUIET FOOTER */}
      <footer className="border-t border-[#1d1611] py-10 bg-[#0a0807] text-xs text-[#8c7a68]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-heading font-semibold text-sm text-[#e8dfd3]">Gulam Ahmed Raza</span>
            <span>·</span>
            <span>Technical Project Manager</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:gulam.iitm@alumni.iitm.ac.in" className="hover:text-[#ff6b00] transition-colors">
              gulam.iitm@alumni.iitm.ac.in
            </a>
            <span>·</span>
            <span>IIT Madras Alumnus</span>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* MODAL 1: RESUME VIEWER (Executive Summary / Highlights with Download Full PDF) */}
      {/* ========================================================================= */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#120e0b] border border-[#3d2c1e] w-full max-w-3xl max-h-[90vh] rounded-2xl flex flex-col shadow-2xl overflow-hidden">
            <div className="px-6 py-5 border-b border-[#241a12] flex items-center justify-between">
              <div>
                <h3 className="font-heading font-bold text-xl text-[#f4efe8]">
                  Executive Summary / Highlights
                </h3>
                <p className="text-xs text-[#a39485] mt-0.5">
                  Gulam Ahmed Raza · Technical Project Manager
                </p>
              </div>
              <button
                onClick={() => setIsResumeModalOpen(false)}
                className="w-8 h-8 rounded-full border border-[#36281c] flex items-center justify-center text-[#b8a99a] hover:text-white"
                aria-label="Close modal"
              >
                <i className="fa-solid fa-xmark text-sm"></i>
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6 text-xs text-[#cfc4b6] leading-relaxed">
              <div className="p-4 rounded-lg bg-[#18120d] border border-[#2e2015]">
                <div className="font-semibold text-sm text-[#f4efe8] mb-1 font-heading">
                  Professional Profile
                </div>
                <p>
                  IT Project Manager with over 5 years of combined experience scaling from zero-to-one startups to managing complex enterprise workflows. Specializes in untangling cross-team dependencies, building automated tracking tools, and translating ambiguous business requirements into strict Agile sprints.
                </p>
              </div>

              <div>
                <div className="text-xs uppercase font-mono tracking-wider text-[#ff6b00] mb-3">
                  Key Career Highlights
                </div>
                <div className="space-y-4">
                  <div className="p-3.5 rounded-lg bg-[#16110d] border border-[#261d15]">
                    <div className="font-semibold text-[#f4efe8] font-heading">
                      IT Project Manager &amp; Consultant | Morgan Stanley (via Genpact)
                    </div>
                    <div className="text-[#a39485] mt-1">
                      Primary PM for 8 to 11 concurrent high-risk software onboarding projects and 90+ annual maintenance reviews. Generated ~$170K–$200K annual billable value. Cut onboarding lifecycle from 6 months to 4 months (-25%).
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#16110d] border border-[#261d15]">
                    <div className="font-semibold text-[#f4efe8] font-heading">
                      Co-Founder &amp; Product Lead | Relnto
                    </div>
                    <div className="text-[#a39485] mt-1">
                      Zero-to-one product leadership through IIT Madras Nirmaan pre-incubation program.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#16110d] border border-[#261d15]">
                    <div className="font-semibold text-[#f4efe8] font-heading">
                      UI/UX Design Intern | Kriyative Education / Kodate
                    </div>
                    <div className="text-[#a39485] mt-1">
                      Led design architecture and developer handoff for mobile and web platforms.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#16110d] border border-[#261d15]">
                    <div className="font-semibold text-[#f4efe8] font-heading">
                      Business Analyst Intern | ADQVest
                    </div>
                    <div className="text-[#a39485] mt-1">
                      Agile sprint discovery sessions with senior directors at Godrej Sara Lee, ITC, Pidilite.
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs uppercase font-mono tracking-wider text-[#ff6b00] mb-2">
                  Academic Background
                </div>
                <p className="text-[#e2d8cd]">
                  Indian Institute of Technology Madras (IIT Madras)
                </p>
              </div>
            </div>

            <div className="p-5 border-t border-[#241a12] flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#15100c]">
              <div className="text-xs text-[#8c7866]">
                Format: Verified Executive Profile
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                {/* Standard anchor tag to open PDF in a new tab as requested */}
                <a
                  href="resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#ff6b00] hover:bg-[#ff7d1f] text-white text-xs font-semibold tracking-wider uppercase rounded transition-colors inline-flex items-center gap-2 shadow-md"
                >
                  <i className="fa-solid fa-file-pdf"></i>
                  <span>Download Full PDF</span>
                </a>
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 border border-[#423122] text-[#ff6b00] text-xs font-semibold rounded hover:bg-[#201710] transition-colors"
                >
                  <i className="fa-solid fa-print mr-1.5"></i>
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: LET'S CONNECT (Updated with exact specified text) */}
      {/* ========================================================================= */}
      {isConnectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#120e0b] border border-[#3d2c1e] w-full max-w-lg rounded-2xl flex flex-col shadow-2xl overflow-hidden">
            <div className="px-6 py-5 border-b border-[#241a12] flex items-center justify-between">
              <div>
                <h3 className="font-heading font-bold text-xl text-[#f4efe8]">
                  Let's Connect
                </h3>
                {/* EXACT text specified by user */}
                <p className="text-xs text-[#d8cec2] mt-1 leading-relaxed">
                  Reach out directly for Enterprise Project Manager and Program Manager opportunities.
                </p>
              </div>
              <button
                onClick={() => setIsConnectModalOpen(false)}
                className="w-8 h-8 rounded-full border border-[#36281c] flex items-center justify-center text-[#b8a99a] hover:text-white"
                aria-label="Close modal"
              >
                <i className="fa-solid fa-xmark text-sm"></i>
              </button>
            </div>

            <div className="p-6 space-y-5 text-xs text-[#cfc4b6]">
              {/* Direct Email Card */}
              <div className="p-4 rounded-xl bg-[#18120d] border border-[#2e2015] flex items-center justify-between">
                <div>
                  <div className="text-[10px] tracking-wider uppercase text-[#8c7866] mb-1">
                    Direct Email
                  </div>
                  <div className="font-mono text-sm text-[#f4efe8] select-all">
                    gulam.iitm@alumni.iitm.ac.in
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 bg-[#251a12] hover:bg-[#382619] border border-[#4d3623] text-[#ff6b00] rounded text-xs transition-colors"
                >
                  {copiedEmail ? 'Copied!' : 'Copy Email'}
                </button>
              </div>

              {/* Direct Profile Links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/glm-ar/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded bg-[#18120d] border border-[#2e2015] hover:border-[#ff6b00] text-center text-[#d4c6b8] hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <i className="fa-brands fa-linkedin-in text-[#ff6b00]"></i>
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href="https://github.com/glmoo7git"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded bg-[#18120d] border border-[#2e2015] hover:border-[#ff6b00] text-center text-[#d4c6b8] hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <i className="fa-brands fa-github text-[#ff6b00]"></i>
                  <span>GitHub Profile</span>
                </a>
              </div>

              {/* Message Composer */}
              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] text-[#a39485] uppercase tracking-wider mb-1">
                    Your Name or Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Talent Partner / Director"
                    id="connect-name"
                    className="w-full px-3.5 py-2.5 rounded bg-[#18120d] border border-[#2f2217] text-white focus:outline-none focus:border-[#ff6b00]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-[#a39485] uppercase tracking-wider mb-1">
                    Subject / Discussion Scope
                  </label>
                  <input
                    type="text"
                    defaultValue="Enterprise Project Manager Opportunity"
                    id="connect-subject"
                    className="w-full px-3.5 py-2.5 rounded bg-[#18120d] border border-[#2f2217] text-white focus:outline-none focus:border-[#ff6b00]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-[#a39485] uppercase tracking-wider mb-1">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your team's timeline, scope, or engagement model..."
                    id="connect-message"
                    className="w-full px-3.5 py-2.5 rounded bg-[#18120d] border border-[#2f2217] text-white focus:outline-none focus:border-[#ff6b00]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="mailto:gulam.iitm@alumni.iitm.ac.in?subject=Enterprise%20Project%20Manager%20Opportunity"
                  className="block w-full text-center py-3 bg-[#ff6b00] hover:bg-[#ff7d1f] text-white text-xs font-semibold tracking-wider uppercase rounded transition-all shadow-[0_4px_16px_rgba(255,107,0,0.3)]"
                >
                  <i className="fa-solid fa-paper-plane mr-2"></i>
                  Send via Mail Client
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 3: PROJECT DEEP DIVE */}
      {/* ========================================================================= */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#120e0b] border border-[#3d2c1e] w-full max-w-2xl rounded-2xl flex flex-col shadow-2xl overflow-hidden">
            <div className="px-6 py-5 border-b border-[#241a12] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#ff6b00]">
                  {selectedProject.category}
                </span>
                <h3 className="font-heading font-bold text-2xl text-[#f4efe8]">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-full border border-[#36281c] flex items-center justify-center text-[#b8a99a] hover:text-white"
              >
                <i className="fa-solid fa-xmark text-sm"></i>
              </button>
            </div>

            <div className="p-6 space-y-6 text-xs text-[#cfc4b6] leading-relaxed overflow-y-auto max-h-[75vh]">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ff7d1f] mb-2">
                  System Architecture &amp; The Build
                </h4>
                <p className="text-[#d8cec2]">
                  {selectedProject.build}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ff7d1f] mb-2">
                  Technical Stack &amp; Integration
                </h4>
                <p className="text-[#b5a798]">
                  {selectedProject.tech}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {selectedProject.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#18120d] border border-[#2b1f15] text-center">
                    <div className="font-heading font-bold text-lg text-[#f4efe8]">{m.value}</div>
                    <div className="text-[10px] uppercase text-[#8c7866] mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ff7d1f] mb-2">
                  Core Engineering Milestones
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[#a8998a]">
                      <i className="fa-solid fa-check text-[#ff6b00] text-[10px] mt-1 shrink-0"></i>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-5 border-t border-[#241a12] flex justify-end bg-[#15100c]">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 bg-[#221811] hover:bg-[#332317] border border-[#4a3422] text-[#ff6b00] text-xs font-semibold rounded"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 4: SINGLE-FILE HTML EXPORT */}
      {/* ========================================================================= */}
      {isExportHtmlOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#120e0b] border border-[#3d2c1e] w-full max-w-2xl rounded-2xl flex flex-col shadow-2xl overflow-hidden">
            <div className="px-6 py-5 border-b border-[#241a12] flex items-center justify-between">
              <div>
                <h3 className="font-heading font-bold text-xl text-[#f4efe8]">
                  Single-File HTML Exporter
                </h3>
                <p className="text-xs text-[#a39485]">
                  Get this complete portfolio as an offline, single-file HTML document
                </p>
              </div>
              <button
                onClick={() => setIsExportHtmlOpen(false)}
                className="w-8 h-8 rounded-full border border-[#36281c] flex items-center justify-center text-[#b8a99a] hover:text-white"
              >
                <i className="fa-solid fa-xmark text-sm"></i>
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs text-[#cfc4b6]">
              <p>
                Your entire portfolio is bundled into a pure standalone <code className="text-[#ff6b00]">index.html</code> with embedded styling, modern Poppins typography, and CDN links, ready to run offline or host on GitHub Pages with zero build step.
              </p>

              <div className="p-4 rounded-xl bg-[#18120d] border border-[#2e2015] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="font-semibold text-white">Download Standalone HTML File</div>
                  <div className="text-[11px] text-[#8c7866]">gulam-ahmed-raza-portfolio.html (HTML5, Poppins, Tailwind, JS)</div>
                </div>
                <button
                  onClick={handleDownloadStandalone}
                  className="px-5 py-2.5 bg-[#ff6b00] hover:bg-[#ff7d1f] text-white font-semibold tracking-wider uppercase rounded text-xs transition-colors shrink-0 shadow-md"
                >
                  <i className="fa-solid fa-download mr-1.5"></i>
                  Download .html
                </button>
              </div>

              <div className="relative">
                <div className="text-[11px] uppercase tracking-wider text-[#8c7866] mb-2 flex items-center justify-between">
                  <span>HTML Preview</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(getFullStandaloneHtml());
                      setCopiedHtml(true);
                      setTimeout(() => setCopiedHtml(false), 2000);
                    }}
                    className="text-[#ff6b00] hover:underline"
                  >
                    {copiedHtml ? 'Copied to Clipboard!' : 'Copy Code'}
                  </button>
                </div>
                <pre className="p-4 rounded-lg bg-[#0a0807] border border-[#221811] font-mono text-[11px] text-[#9c8b7c] overflow-x-auto max-h-48">
                  {getFullStandaloneHtml().slice(0, 700)}...
                </pre>
              </div>
            </div>

            <div className="p-5 border-t border-[#241a12] flex justify-end bg-[#15100c]">
              <button
                onClick={() => setIsExportHtmlOpen(false)}
                className="px-5 py-2 bg-[#221811] hover:bg-[#332317] border border-[#4a3422] text-[#ff6b00] text-xs font-semibold rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
