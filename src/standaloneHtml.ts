/**
 * Self-contained single file HTML export for Gulam Ahmed Raza's Portfolio.
 * Updated with clean modern Sans-Serif (Poppins/Montserrat), subtle circular photo integration,
 * accurate text removals, updated modals, and social links.
 */

export const getFullStandaloneHtml = (): string => {
  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gulam Ahmed Raza | Technical Project Manager</title>
  <meta name="description" content="Technical Project Manager. Enterprise Discipline. Startup Speed." />
  
  <!-- Google Fonts: Poppins & Montserrat for modern clean Sans-Serif aesthetic -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
  
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  
  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <style>
    :root {
      --font-heading: 'Poppins', 'Montserrat', -apple-system, sans-serif;
      --font-sans: 'Poppins', 'Montserrat', -apple-system, sans-serif;
    }
    body {
      font-family: var(--font-sans);
      background-color: #0c0a09;
      color: #e5ded4;
      overflow-x: hidden;
    }
    h1, h2, h3, h4, h5, h6, .font-heading {
      font-family: var(--font-heading);
      letter-spacing: -0.015em;
    }
  </style>
</head>
<body class="bg-[#0c0a09] text-[#e5ded4] selection:bg-[#ff6b00]/30 selection:text-white">

  <!-- Ambient Dark Gradients -->
  <div class="fixed inset-0 pointer-events-none z-0">
    <div class="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#3a2012]/15 rounded-full blur-[140px]"></div>
    <div class="absolute top-[40%] left-[-100px] w-[500px] h-[500px] bg-[#22150e]/25 rounded-full blur-[130px]"></div>
  </div>

  <!-- Header Navigation -->
  <header class="sticky top-0 z-40 bg-[#0c0a09]/90 backdrop-blur-md border-b border-[#2a221b]/80">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <a href="#hero" class="flex items-center gap-3.5 group">
        <div class="w-9 h-9 rounded-full border border-[#ff6b00]/40 flex items-center justify-center bg-[#18130e] text-[#ff6b00]">
          <i class="fa-solid fa-compass text-sm"></i>
        </div>
        <div class="flex flex-col">
          <span class="font-heading font-semibold text-base tracking-wide text-[#f4efe8] group-hover:text-[#ff6b00] transition-colors leading-tight">
            GULAM AHMED RAZA
          </span>
          <span class="text-[10px] tracking-[0.2em] uppercase text-[#a39485] font-medium">
            Technical Project Manager
          </span>
        </div>
      </a>

      <nav class="hidden lg:flex items-center gap-8 text-[13px] tracking-wider uppercase font-medium text-[#b5a697]">
        <a href="#hero" class="hover:text-[#f4efe8] transition-colors">About</a>
        <a href="#philosophy" class="hover:text-[#f4efe8] transition-colors">Philosophy</a>
        <a href="#experience" class="hover:text-[#f4efe8] transition-colors">Experience</a>
        <a href="#projects" class="hover:text-[#f4efe8] transition-colors">Projects</a>
        <a href="#leadership" class="hover:text-[#f4efe8] transition-colors">Leadership</a>
        <a href="#skills" class="hover:text-[#f4efe8] transition-colors">Skills</a>
      </nav>

      <div class="flex items-center gap-3">
        <a href="mailto:gulam.iitm@alumni.iitm.ac.in" class="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#ff6b00] hover:bg-[#ff7d1f] transition-all rounded">
          Let's Connect
        </a>
      </div>
    </div>
  </header>

  <main class="relative z-10">
    <!-- SECTION 1: HOMEPAGE / HERO -->
    <section id="hero" class="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between pt-8 pb-12 overflow-hidden border-b border-[#241c15]">
      <div class="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center flex-grow">
        
        <!-- Hero Left Column: Clean Modern Typography & Breathing Room -->
        <div class="lg:col-span-6 flex flex-col justify-center z-10">
          <div class="flex items-center gap-2 mb-4">
            <span class="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#ff6b00] uppercase">
              | GULAM AHMED RAZA |
            </span>
          </div>

          <h1 class="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[58px] leading-[1.08] text-[#f7f3ec] tracking-[-0.02em] mb-4">
            Technical Project Manager
          </h1>

          <!-- Social Icon Circles Under Headline (As in Demo Screenshot) -->
          <div className="flex items-center gap-3 mb-6">
            <a href="https://www.linkedin.com/in/glm-ar/" target="_blank" rel="noreferrer" class="w-9 h-9 rounded-full border border-[#3d2f24] hover:border-[#ff6b00] flex items-center justify-center text-[#c2b2a3] hover:text-[#ff6b00] transition-colors bg-[#17120d]">
              <i class="fa-brands fa-linkedin-in text-xs"></i>
            </a>
            <a href="https://github.com/glmoo7git" target="_blank" rel="noreferrer" class="w-9 h-9 rounded-full border border-[#3d2f24] hover:border-[#ff6b00] flex items-center justify-center text-[#c2b2a3] hover:text-[#ff6b00] transition-colors bg-[#17120d]">
              <i class="fa-brands fa-github text-xs"></i>
            </a>
            <a href="mailto:gulam.iitm@alumni.iitm.ac.in" class="w-9 h-9 rounded-full border border-[#3d2f24] hover:border-[#ff6b00] flex items-center justify-center text-[#c2b2a3] hover:text-[#ff6b00] transition-colors bg-[#17120d]">
              <i class="fa-regular fa-envelope text-xs"></i>
            </a>
          </div>

          <p class="text-sm md:text-base text-[#cfc5b8] leading-relaxed mb-6 max-w-xl">
            Enterprise Discipline. Startup Speed. I bridge Business strategy, Product scope, and Engineering execution to drive iterative, incremental delivery and on-time releases.
          </p>

          <div class="flex flex-wrap items-center gap-3.5 mb-8">
            <a href="#experience" class="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#ff6b00] hover:bg-[#ff7d1f] text-white text-xs font-semibold tracking-wider uppercase rounded shadow-lg">
              <i class="fa-solid fa-play text-[10px]"></i>
              <span>View My Work</span>
            </a>
            <a href="resume.pdf" target="_blank" class="inline-flex items-center gap-2 px-5 py-3.5 bg-[#17120d] hover:bg-[#221a13] text-[#e8dfd3] border border-[#523d2b] hover:border-[#ff6b00] text-xs font-semibold tracking-wider uppercase rounded">
              <i class="fa-solid fa-download text-[11px] text-[#ff6b00]"></i>
              <span>Download Resume</span>
            </a>
            <a href="mailto:gulam.iitm@alumni.iitm.ac.in" class="inline-flex items-center gap-2 px-5 py-3.5 bg-transparent hover:bg-[#1a140e] text-[#ff6b00] border border-[#ff6b00]/40 text-xs font-semibold tracking-wider uppercase rounded">
              <span>Let's Connect</span>
            </a>
          </div>

          <!-- Elevator Pitch Content without the removed title label -->
          <div class="pt-6 border-t border-[#261d15] max-w-xl">
            <p class="text-xs sm:text-[13px] text-[#a89b8d] leading-relaxed">
              I am an IT Project Manager with over 5 years of combined experience scaling from zero-to-one startups to managing complex enterprise workflows. I specialize in untangling cross-team dependencies, building automated tracking tools, and translating ambiguous business requirements into strict Agile sprints. My philosophy is simple: I remove operational friction so technical teams can focus entirely on building.
            </p>
          </div>

          <!-- Modern Stats Banner Card -->
          <div class="mt-8 p-4 rounded-xl bg-[#14100c] border border-[#2b2016] flex items-center justify-between max-w-lg">
            <div class="text-center px-3">
              <div class="font-heading font-bold text-2xl text-[#ff6b00]">5+</div>
              <div class="text-[10px] uppercase text-[#a8998a] tracking-wider mt-0.5">Years Experience</div>
            </div>
            <div class="w-[1px] h-8 bg-[#2d2218]"></div>
            <div class="text-center px-3">
              <div class="font-heading font-bold text-2xl text-[#f4efe8]">8–11</div>
              <div class="text-[10px] uppercase text-[#a8998a] tracking-wider mt-0.5">Concurrent Projects</div>
            </div>
            <div class="w-[1px] h-8 bg-[#2d2218]"></div>
            <div class="text-center px-3">
              <div class="font-heading font-bold text-2xl text-[#ff6b00]">~$200K</div>
              <div class="text-[10px] uppercase text-[#a8998a] tracking-wider mt-0.5">Annual Value</div>
            </div>
          </div>
        </div>

        <!-- Hero Right Column: Subtle Dark Circular Background & Breathing Room -->
        <div class="lg:col-span-6 flex justify-center items-center relative pl-0 lg:pl-10 xl:pl-16">
          <div class="relative w-[340px] sm:w-[420px] lg:w-[460px] h-[340px] sm:h-[420px] lg:h-[460px] flex items-center justify-center">
            <!-- Subtle dark circular frame matching demo screenshot -->
            <div class="absolute inset-0 rounded-full bg-gradient-to-b from-[#221c17] to-[#120e0b] border border-[#33261c]/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"></div>
            <!-- Glow disc -->
            <div class="absolute inset-4 rounded-full bg-[#ff6b00]/5 blur-xl"></div>
            
            <!-- Cutout Profile Container -->
            <div class="relative z-10 w-full h-full flex items-end justify-center overflow-hidden rounded-full">
              <img
                src="./profile.jpg"
                alt="Gulam Ahmed Raza - Technical Project Manager"
                class="w-[88%] h-auto object-cover object-top filter contrast-[1.03] translate-y-3"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Strip -->
      <div class="max-w-7xl mx-auto px-6 w-full mt-12 pt-6 border-t border-[#201812] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-[#a39485]">
        <div class="flex items-center gap-3.5">
          <div class="w-9 h-9 rounded-full bg-[#18120d] border border-[#3d2c1e] flex items-center justify-center text-[#ff6b00]">
            <i class="fa-solid fa-envelope"></i>
          </div>
          <div>
            <div class="text-[10px] tracking-widest uppercase text-[#7a6a5b]">Direct Contact</div>
            <a href="mailto:gulam.iitm@alumni.iitm.ac.in" class="text-xs text-[#e0d6cb] hover:text-[#ff6b00]">gulam.iitm@alumni.iitm.ac.in</a>
          </div>
        </div>
        <div class="flex items-center gap-3.5">
          <div class="w-9 h-9 rounded-full bg-[#18120d] border border-[#3d2c1e] flex items-center justify-center text-[#ff6b00]">
            <i class="fa-solid fa-building-columns"></i>
          </div>
          <div>
            <div class="text-[10px] tracking-widest uppercase text-[#7a6a5b]">Enterprise &amp; Alma Mater</div>
            <div class="text-xs text-[#e0d6cb]">Morgan Stanley (Genpact) · IIT Madras Alumnus</div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: CORE PHILOSOPHY -->
    <section id="philosophy" class="py-24 border-b border-[#241c15]">
      <div class="max-w-7xl mx-auto px-6">
        <div class="max-w-3xl mb-16">
          <span class="text-xs font-semibold tracking-[0.25em] text-[#ff6b00] uppercase block mb-3">Strategic Operating Model</span>
          <h2 class="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#f4efe8] mb-4">Core Philosophy / "How I Work"</h2>
          <p class="text-sm sm:text-base text-[#9e8f80] italic">Highlights your approach to project management so recruiters see you as a strategic thinker, not just a task-tracker.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div class="p-8 rounded-xl bg-[#130f0c] border border-[#2d2218]">
            <span class="font-mono text-xs text-[#ff6b00] uppercase block mb-4">01. Execution Governance</span>
            <h3 class="font-heading font-semibold text-2xl text-[#f7f3ec] mb-4">Pragmatic Agile, Not Rigid Playbooks</h3>
            <p class="text-sm text-[#b5a798] leading-relaxed">I shape the process around what the team actually needs. I use structured Scrum sprints for defined remediation and time-boxed deliverables, and Kanban for continuous-flow intake and maintenance.</p>
          </div>

          <div class="p-8 rounded-xl bg-[#130f0c] border border-[#2d2218]">
            <span class="font-mono text-xs text-[#ff6b00] uppercase block mb-4">02. Scope &amp; Estimation</span>
            <h3 class="font-heading font-semibold text-2xl text-[#f7f3ec] mb-4">Data-Driven Forecasting over Blind Dates</h3>
            <p class="text-sm text-[#b5a798] leading-relaxed">I never set engineering teams up for failure by making blind promises on unelaborated scope. I separate the knowns from the unknowns and provide business stakeholders with historical, data-backed confidence ranges.</p>
          </div>

          <div class="p-8 rounded-xl bg-[#130f0c] border border-[#2d2218]">
            <span class="font-mono text-xs text-[#ff6b00] uppercase block mb-4">03. Continuous Optimization</span>
            <h3 class="font-heading font-semibold text-2xl text-[#f7f3ec] mb-4">Actionable Retrospectives</h3>
            <p class="text-sm text-[#b5a798] leading-relaxed">I treat retrospectives as our most critical alignment tool—using them to share cross-team updates, swarm major blockers, and figure out what manual processes we need to automate next to increase our velocity.</p>
          </div>

          <div class="p-8 rounded-xl bg-[#130f0c] border border-[#2d2218]">
            <span class="font-mono text-xs text-[#ff6b00] uppercase block mb-4">04. Stakeholder Trust</span>
            <h3 class="font-heading font-semibold text-2xl text-[#f7f3ec] mb-4">Direct &amp; Factual Communication</h3>
            <p class="text-sm text-[#b5a798] leading-relaxed">I don't hide bad news or spin delays. I bring Business, Tech, and Risk teams together to re-forecast timelines and find phased solutions backed by formal risk acceptance.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: WORK EXPERIENCE -->
    <section id="experience" class="py-24 border-b border-[#241c15]">
      <div class="max-w-7xl mx-auto px-6">
        <div class="max-w-3xl mb-16">
          <span class="text-xs font-semibold tracking-[0.25em] text-[#ff6b00] uppercase block mb-3">Chronology of Impact</span>
          <h2 class="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#f4efe8] mb-4">Work Experience</h2>
          <p class="text-sm sm:text-base text-[#9e8f80] italic">Your professional history, focused on metrics, ownership, and cross-team collaboration.</p>
        </div>

        <div class="space-y-10">
          <div class="p-8 sm:p-10 rounded-2xl bg-[#130f0c] border border-[#2a1f16]">
            <div class="mb-4 pb-4 border-b border-[#241a12]">
              <span class="text-xs font-mono text-[#ff6b00] uppercase block mb-1">01. Morgan Stanley (via Genpact)</span>
              <h3 class="font-heading font-bold text-2xl sm:text-3xl text-[#f7f3ec]">IT Project Manager &amp; Consultant</h3>
            </div>
            <p class="text-sm sm:text-base text-[#d8cec2] mb-6 font-medium">Manage the end-to-end delivery of enterprise vendor onboardings and compliance reviews.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="p-4 rounded-lg bg-[#18120d] border border-[#2b1f15]">
                <h4 class="text-xs font-semibold uppercase text-[#ff6b00] mb-2">Concurrent Project Delivery</h4>
                <p class="text-xs text-[#b8ab9d]">Act as the primary PM for 8 to 11 concurrent high-risk software onboarding projects and 90+ annual maintenance reviews, operating as a high-output consultant generating ~$170K–$200K in annual billable value for the firm.</p>
              </div>
              <div class="p-4 rounded-lg bg-[#18120d] border border-[#2b1f15]">
                <h4 class="text-xs font-semibold uppercase text-[#ff6b00] mb-2">Accelerated Lifecycle by 25%</h4>
                <p class="text-xs text-[#b8ab9d]">Audited sequential risk workflows and transitioned them into concurrent Agile sprints on shared Jira boards, successfully cutting the end-to-end onboarding lifecycle from 6 months to 4 months.</p>
              </div>
              <div class="p-4 rounded-lg bg-[#18120d] border border-[#2b1f15]">
                <h4 class="text-xs font-semibold uppercase text-[#ff6b00] mb-2">Cross-Team Dependency Resolution</h4>
                <p class="text-xs text-[#b8ab9d]">Act as the central bridge between Business units demanding speed and Internal Risk teams (SecArch, Privacy, DLM, Legal) enforcing compliance. Coordinate strict delivery tollgates for Single Sign-On (SAML), Data Masking, and TLS encryption.</p>
              </div>
              <div class="p-4 rounded-lg bg-[#18120d] border border-[#2b1f15]">
                <h4 class="text-xs font-semibold uppercase text-[#ff6b00] mb-2">Workflow Automation</h4>
                <p class="text-xs text-[#b8ab9d]">Eliminated manual administrative bottlenecks by prompting Microsoft Copilot to write custom Python scripts, automating due diligence tracking, workflow diagrams, and monthly status matrices.</p>
              </div>
            </div>
          </div>

          <div class="p-8 sm:p-10 rounded-2xl bg-[#130f0c] border border-[#2a1f16]">
            <div class="mb-4 pb-4 border-b border-[#241a12]">
              <span class="text-xs font-mono text-[#ff6b00] uppercase block mb-1">02. Relnto (IIT Madras Nirmaan Pre-Incubation)</span>
              <h3 class="font-heading font-bold text-2xl sm:text-3xl text-[#f7f3ec]">Co-Founder &amp; Product Lead</h3>
            </div>
            <p class="text-sm sm:text-base text-[#d8cec2] mb-6 font-medium">Built an early-stage peer-to-peer lending and renting platform through the IIT Madras Nirmaan pre-incubation program.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="p-4 rounded-lg bg-[#18120d] border border-[#2b1f15]">
                <h4 class="text-xs font-semibold uppercase text-[#ff6b00] mb-2">Zero-to-One Product Execution</h4>
                <p class="text-xs text-[#b8ab9d]">Owned the product end-to-end. Defined the core strategy, mapped out a strict one-year roadmap from raw concept, and executed the build to achieve active market traction.</p>
              </div>
              <div class="p-4 rounded-lg bg-[#18120d] border border-[#2b1f15]">
                <h4 class="text-xs font-semibold uppercase text-[#ff6b00] mb-2">Incubator Milestone Delivery</h4>
                <p class="text-xs text-[#b8ab9d]">Managed the venture through heavy scrutiny in the IIT Madras cohort, ensuring the engineering and business teams hit every critical timeline constraint without compromising on product quality.</p>
              </div>
            </div>
          </div>

          <div class="p-8 sm:p-10 rounded-2xl bg-[#130f0c] border border-[#2a1f16]">
            <div class="mb-4 pb-4 border-b border-[#241a12]">
              <span class="text-xs font-mono text-[#ff6b00] uppercase block mb-1">03. Kriyative Education / Kodate</span>
              <h3 class="font-heading font-bold text-2xl sm:text-3xl text-[#f7f3ec]">UI/UX Design Intern</h3>
            </div>
            <p class="text-sm sm:text-base text-[#d8cec2] mb-6 font-medium">Led the design architecture for a new educational mobile app and web platform.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="p-4 rounded-lg bg-[#18120d] border border-[#2b1f15]">
                <h4 class="text-xs font-semibold uppercase text-[#ff6b00] mb-2">Scope Definition</h4>
                <p class="text-xs text-[#b8ab9d]">Bridged business and tech by sitting with founders daily to translate ambiguous ideas into strict, locked-down project scopes and user flow diagrams before development began.</p>
              </div>
              <div class="p-4 rounded-lg bg-[#18120d] border border-[#2b1f15]">
                <h4 class="text-xs font-semibold uppercase text-[#ff6b00] mb-2">End-to-End Execution</h4>
                <p class="text-xs text-[#b8ab9d]">Created wireframes, interactive Adobe XD prototypes, and brand assets. Owned the developer handoff, explaining exact functional requirements to ensure the final build matched the scoped prototype.</p>
              </div>
            </div>
          </div>

          <div class="p-8 sm:p-10 rounded-2xl bg-[#130f0c] border border-[#2a1f16]">
            <div class="mb-4 pb-4 border-b border-[#241a12]">
              <span class="text-xs font-mono text-[#ff6b00] uppercase block mb-1">04. ADQVest</span>
              <h3 class="font-heading font-bold text-2xl sm:text-3xl text-[#f7f3ec]">Business Analyst Intern</h3>
            </div>
            <p class="text-sm sm:text-base text-[#d8cec2] mb-6 font-medium">Researched and mapped alternative data usage across major corporate players.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="p-4 rounded-lg bg-[#18120d] border border-[#2b1f15]">
                <h4 class="text-xs font-semibold uppercase text-[#ff6b00] mb-2">Agile Team Leadership</h4>
                <p class="text-xs text-[#b8ab9d]">Led a 3-person analyst team using weekly Agile sprints to conduct targeted discovery sessions with senior directors at Godrej Sara Lee, ITC, and Pidilite.</p>
              </div>
              <div class="p-4 rounded-lg bg-[#18120d] border border-[#2b1f15]">
                <h4 class="text-xs font-semibold uppercase text-[#ff6b00] mb-2">Strategic Synthesis</h4>
                <p class="text-xs text-[#b8ab9d]">Translated messy interview notes and incomplete market information into an actionable strategic roadmap that leadership used to expand market coverage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: TECHNICAL PROJECTS & AUTOMATION -->
    <section id="projects" class="py-24 border-b border-[#241c15]">
      <div class="max-w-7xl mx-auto px-6">
        <div class="max-w-3xl mb-16">
          <span class="text-xs font-semibold tracking-[0.25em] text-[#ff6b00] uppercase block mb-3">Hands-On Engineering</span>
          <h2 class="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#f4efe8] mb-4">Technical Projects &amp; Automation</h2>
          <p class="text-sm sm:text-base text-[#9e8f80] italic">Proves you possess strong technical aptitude and hands-on system building skills.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="p-8 sm:p-10 rounded-2xl bg-[#130f0c] border border-[#2a1f16]">
            <span class="text-[11px] font-mono tracking-widest uppercase text-[#ff6b00] block mb-2">01 // Agentic Systems</span>
            <h3 class="font-heading font-bold text-2xl sm:text-3xl text-[#f7f3ec] mb-6">'Real-Time Multimodal Voice AI'</h3>
            <div class="mb-6">
              <h4 class="text-xs font-semibold uppercase text-[#ff6b00] mb-2">The Build</h4>
              <p class="text-sm text-[#c4b6a7]">Architected and deployed a real-time Voice AI assistant for a personal portfolio using the Vanira orchestration platform.</p>
            </div>
            <div>
              <h4 class="text-xs font-semibold uppercase text-[#ff6b00] mb-2">The Tech</h4>
              <p class="text-sm text-[#b8ab9d]">Integrated Sarvam AI for Indic STT/TTS and GPT-4 for conversational reasoning. Engineered interactive on-screen actions—such as in-call contact forms and automatic page navigation—achieving sub-600ms conversational response times with zero dedicated backend server maintenance.</p>
            </div>
          </div>

          <div class="p-8 sm:p-10 rounded-2xl bg-[#130f0c] border border-[#2a1f16]">
            <span class="text-[11px] font-mono tracking-widest uppercase text-[#ff6b00] block mb-2">02 // Intelligent Triage</span>
            <h3 class="font-heading font-bold text-2xl sm:text-3xl text-[#f7f3ec] mb-6">AI Job Match Automation Agent</h3>
            <div class="mb-6">
              <h4 class="text-xs font-semibold uppercase text-[#ff6b00] mb-2">The Build</h4>
              <p class="text-sm text-[#c4b6a7]">Designed an end-to-end AI automation pipeline to optimize my personal job search without manual scrolling.</p>
            </div>
            <div>
              <h4 class="text-xs font-semibold uppercase text-[#ff6b00] mb-2">The Tech</h4>
              <p class="text-sm text-[#b8ab9d]">Utilized n8n, Apify, and the Gemini API to autonomously scrape LinkedIn job postings, apply a custom AI-based relevance score mapping against my profile, and feed top-tier matches into a live Google Sheets tracker.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5: LEADERSHIP & EXTRACURRICULAR IMPACT -->
    <section id="leadership" class="py-24 border-b border-[#241c15]">
      <div class="max-w-7xl mx-auto px-6">
        <div class="max-w-3xl mb-16">
          <span class="text-xs font-semibold tracking-[0.25em] text-[#ff6b00] uppercase block mb-3">IIT Madras Track Record</span>
          <h2 class="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#f4efe8] mb-4">Leadership &amp; Extracurricular Impact (IIT Madras)</h2>
          <p class="text-sm sm:text-base text-[#9e8f80] italic">Highlights your ability to manage people, budgets, and deliver projects outside of standard corporate structures.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="p-8 sm:p-10 rounded-2xl bg-[#130f0c] border border-[#2a1f16]">
            <span class="text-xs font-mono text-[#ff6b00] uppercase block mb-2">Media Club Head</span>
            <h3 class="font-heading font-bold text-2xl sm:text-3xl text-[#f7f3ec] mb-3">Content Generation Head | Institute Media Club</h3>
            <p class="text-sm text-[#dfd6cc] font-medium mb-6">Led a 15-member creative team to build a strong filmmaking culture on campus.</p>
            <ul class="space-y-4 text-xs text-[#b8aa9b]">
              <li class="p-3 rounded bg-[#18120d] border border-[#271d14]">Managed multiple project budgets of ₹30K each, acting as the producer to balance creative vision with strict project execution timelines.</li>
              <li class="p-3 rounded bg-[#18120d] border border-[#271d14]">Delivered music videos and short films generating over 25,000 views, and launched a flagship campus event drawing 1,500+ participants.</li>
            </ul>
          </div>

          <div class="p-8 sm:p-10 rounded-2xl bg-[#130f0c] border border-[#2a1f16]">
            <span class="text-xs font-mono text-[#ff6b00] uppercase block mb-2">Sports Captain</span>
            <h3 class="font-heading font-bold text-2xl sm:text-3xl text-[#f7f3ec] mb-3">Institute Captain | IITM Weightlifting</h3>
            <p class="text-sm text-[#dfd6cc] font-medium mb-6">Led a 12-member team to win the Overall Sportsfest Championship in 2019 while winning the Best Lifter Award.</p>
            <div class="p-3 rounded bg-[#18120d] border border-[#271d14] text-xs text-[#b8aa9b]">
              Operated as a strategic manager: Owned a ₹7 Lakh budget, mentored 20+ freshmen, and successfully launched the institute's first-ever women's and specially-abled powerlifting programs from scratch.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 6: SKILLS & TOOLS STACK -->
    <section id="skills" class="py-24">
      <div class="max-w-7xl mx-auto px-6">
        <div class="max-w-3xl mb-16">
          <span class="text-xs font-semibold tracking-[0.25em] text-[#ff6b00] uppercase block mb-3">Core Competencies</span>
          <h2 class="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#f4efe8] mb-4">Skills &amp; Tools Stack</h2>
          <p class="text-sm sm:text-base text-[#9e8f80] italic">A quick-reference section for recruiters scanning for keywords.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="p-8 rounded-xl bg-[#130f0c] border border-[#2d2218]">
            <h3 class="font-heading font-semibold text-xl text-[#f7f3ec] mb-4">Project &amp; Delivery Management</h3>
            <div class="flex flex-wrap gap-2 text-xs text-[#d8cec2]">
              <span class="p-2 bg-[#1a140f] border border-[#3b2b1d] rounded">Agile Frameworks</span>
              <span class="p-2 bg-[#1a140f] border border-[#3b2b1d] rounded">Scrum Ceremonies</span>
              <span class="p-2 bg-[#1a140f] border border-[#3b2b1d] rounded">Kanban Continuous Flow</span>
              <span class="p-2 bg-[#1a140f] border border-[#3b2b1d] rounded">Cross-Functional Dependency Mapping</span>
              <span class="p-2 bg-[#1a140f] border border-[#3b2b1d] rounded">Retrospective Facilitation</span>
              <span class="p-2 bg-[#1a140f] border border-[#3b2b1d] rounded">Release Planning</span>
              <span class="p-2 bg-[#1a140f] border border-[#3b2b1d] rounded">Risk Mitigation &amp; Compliance Governance</span>
            </div>
          </div>

          <div class="p-8 rounded-xl bg-[#130f0c] border border-[#2d2218]">
            <h3 class="font-heading font-semibold text-xl text-[#f7f3ec] mb-4">Technical Tools</h3>
            <div class="flex flex-wrap gap-2 text-xs text-[#d8cec2]">
              <span class="p-2 bg-[#1a140f] border border-[#3b2b1d] rounded">Jira Cloud</span>
              <span class="p-2 bg-[#1a140f] border border-[#3b2b1d] rounded">Confluence / TWiki / SharePoint</span>
              <span class="p-2 bg-[#1a140f] border border-[#3b2b1d] rounded">Power BI</span>
              <span class="p-2 bg-[#1a140f] border border-[#3b2b1d] rounded">Advanced Excel</span>
              <span class="p-2 bg-[#1a140f] border border-[#3b2b1d] rounded">ServiceNow</span>
            </div>
          </div>

          <div class="p-8 rounded-xl bg-[#130f0c] border border-[#2d2218]">
            <h3 class="font-heading font-semibold text-xl text-[#f7f3ec] mb-4">Automation &amp; AI</h3>
            <div class="flex flex-wrap gap-2 text-xs text-[#d8cec2]">
              <span class="p-2 bg-[#1a140f] border border-[#3b2b1d] rounded">Microsoft Copilot (Prompt Engineering)</span>
              <span class="p-2 bg-[#1a140f] border border-[#3b2b1d] rounded">Python</span>
              <span class="p-2 bg-[#1a140f] border border-[#3b2b1d] rounded">n8n</span>
              <span class="p-2 bg-[#1a140f] border border-[#3b2b1d] rounded">API Integrations (Gemini, Apify)</span>
              <span class="p-2 bg-[#1a140f] border border-[#3b2b1d] rounded">Vanira Orchestration</span>
              <span class="p-2 bg-[#1a140f] border border-[#3b2b1d] rounded">LLMs (GPT-4, Sarvam AI)</span>
            </div>
          </div>

          <div class="p-8 rounded-xl bg-[#130f0c] border border-[#2d2218]">
            <h3 class="font-heading font-semibold text-xl text-[#f7f3ec] mb-4">Product &amp; Design</h3>
            <div class="flex flex-wrap gap-2 text-xs text-[#d8cec2]">
              <span class="p-2 bg-[#1a140f] border border-[#3b2b1d] rounded">UI/UX Wireframing</span>
              <span class="p-2 bg-[#1a140f] border border-[#3b2b1d] rounded">Adobe XD</span>
              <span class="p-2 bg-[#1a140f] border border-[#3b2b1d] rounded">User Flow Mapping</span>
              <span class="p-2 bg-[#1a140f] border border-[#3b2b1d] rounded">Product Roadmapping</span>
              <span class="p-2 bg-[#1a140f] border border-[#3b2b1d] rounded">Requirements Gathering (Discovery)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="border-t border-[#1d1611] py-10 bg-[#0a0807] text-xs text-[#8c7a68] text-center">
    <div class="max-w-7xl mx-auto px-6">
      <span class="font-heading font-semibold text-sm text-[#e8dfd3]">Gulam Ahmed Raza</span> · Technical Project Manager · IIT Madras
    </div>
  </footer>
</body>
</html>`;
};
