import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Code2, Database, Download, Mail, MapPin, Server, ShieldCheck, Wrench } from "lucide-react";

const projects = [
  {
    number: "01",
    id: "bagipangan",
    title: "BagiPangan",
    type: "Food-sharing platform",
    date: "Sep 2026",
    description: "Connects donors with people who need food. Recipients set their own search radius, receive a claim code by email, and collect food in person; only the donor can confirm a claim.",
    stack: ["Go", "Microservices", "gRPC", "Echo", "PostgreSQL", "GORM", "Docker"],
    link: "https://github.com/arjundwibastian/BagiPangan",
    emblem: "✦",
  },
  {
    number: "02",
    id: "rentgo",
    title: "RentGo",
    type: "Vehicle rental API",
    date: "Jul 2026",
    description: "A RESTful backend for browsing vehicles, checking availability, and managing rentals with transaction-aware booking workflows.",
    stack: ["Go", "REST API", "Echo", "PostgreSQL", "GORM"],
    link: "https://github.com/arjundwibastian/RentGo",
    emblem: "◈",
  },
  {
    number: "03",
    id: "booklibrary",
    title: "BookLibrary",
    type: "Book management service",
    date: "Aug 2026",
    description: "A gRPC-based service for managing book records, built with a PostgreSQL data layer and a containerized development setup.",
    stack: ["Go", "gRPC", "PostgreSQL", "GORM", "Docker"],
    link: "https://github.com/arjundwibastian/BookLibrary",
    emblem: "◇",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-inner">
          <a className="brand" href="#top" aria-label="Arjun Dwi Bastian, back to top"><span className="brand-mark">✦</span><span>ARJUN <small>/ BACKEND ENGINEER</small></span></a>
          <nav aria-label="Main navigation"><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#experience">Experience</a><a href="#contact">Contact</a></nav>
          <a className="nav-resume" href="/Arjun_Dwi_Bastian_CV.pdf" download>Download CV <Download size={15} aria-hidden="true" /></a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> THE NEXT CAMPAIGN BEGINS HERE</div>
            <h1>Building the systems <em>behind</em> the experience.</h1>
            <p className="hero-lead">I’m Arjun, a backend engineer focused on Go, PostgreSQL, and reliable services. I bring hands-on systems thinking from three years supporting technology across a university.</p>
            <div className="hero-actions"><a className="button button-gold" href="#projects">Explore projects <ArrowRight size={18} aria-hidden="true" /></a><a className="button button-outline" href="mailto:arjundwibastian@gmail.com">Get in touch <ArrowUpRight size={17} aria-hidden="true" /></a></div>
            <div className="hero-facts"><span><MapPin size={16} aria-hidden="true" /> Ngawi, East Java</span><span className="fact-divider" /><span>Open to relocating to Jakarta</span></div>
          </div>
          <div className="map-frame" aria-label="Campaign map showing three portfolio projects">
            <div className="map-topline"><span>THE PROJECT CAMPAIGN</span><span>01 — 03</span></div>
            <div className="map-surface">
              <span className="map-grid" aria-hidden="true" />
              <svg className="map-route" viewBox="0 0 520 420" preserveAspectRatio="none" aria-hidden="true"><path d="M105 300 C 155 255, 145 185, 240 190 S 330 255, 415 115" /></svg>
              <a className="map-node node-bagi" href="#bagipangan"><span className="node-icon">✦</span><span><small>QUEST 01</small><strong>BagiPangan</strong></span></a>
              <a className="map-node node-rent" href="#rentgo"><span className="node-icon">◈</span><span><small>QUEST 02</small><strong>RentGo</strong></span></a>
              <a className="map-node node-book" href="#booklibrary"><span className="node-icon">◇</span><span><small>QUEST 03</small><strong>BookLibrary</strong></span></a>
              <span className="map-contour contour-one" aria-hidden="true" /><span className="map-contour contour-two" aria-hidden="true" />
              <span className="map-compass" aria-hidden="true">✦<small>N</small></span>
            </div>
            <div className="map-footer"><span>SELECT A MARKER TO EXPLORE</span><span>↓</span></div>
          </div>
        </div>
        <div className="container scroll-cue"><a href="#projects">SCROLL TO EXPLORE <ArrowDown size={14} aria-hidden="true" /></a></div>
      </section>

      <section className="section parchment" id="projects">
        <div className="container">
          <div className="section-heading"><div><div className="kicker">01 / COMPLETED QUESTS</div><h2>Selected projects<span className="period">.</span></h2></div><p>Practical backend work: APIs, service communication, and data flows built in Go.</p></div>
          <div className="project-grid">
            {projects.map((project) => <article className="project-card" id={project.id} key={project.id}>
              <div className="card-top"><span>PROJECT / {project.number}</span><span>{project.date}</span></div>
              <div className="project-emblem" aria-hidden="true">{project.emblem}</div>
              <div className="project-type">{project.type}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              <a className="card-link" href={project.link} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={17} aria-hidden="true" /></a>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section dark-section" id="skills">
        <div className="container">
          <div className="section-heading inverse"><div><div className="kicker">02 / THE TOOLKIT</div><h2>Built for the backend<span className="period">.</span></h2></div><p>A focused set of tools for building, connecting, and operating services.</p></div>
          <div className="skill-grid">
            <div className="skill-card"><div className="skill-icon"><Code2 size={25} /></div><span>01 / BUILD</span><h3>Services & APIs</h3><p>Go, RESTful APIs, gRPC, Echo, and microservices.</p></div>
            <div className="skill-card"><div className="skill-icon"><Database size={25} /></div><span>02 / DATA</span><h3>Persistence</h3><p>PostgreSQL, SQL, GORM, and data modeling.</p></div>
            <div className="skill-card"><div className="skill-icon"><Server size={25} /></div><span>03 / DELIVER</span><h3>Development tools</h3><p>Docker, Linux, Git, troubleshooting, and systems support.</p></div>
          </div>
        </div>
      </section>

      <section className="section parchment" id="experience">
        <div className="container experience-grid">
          <div><div className="kicker">03 / THE JOURNEY</div><h2>Experience that <em>carries over.</em></h2><p className="experience-intro">My route into backend engineering started with real users, real systems, and the responsibility to keep them running.</p><a className="text-link" href="/Arjun_Dwi_Bastian_CV.pdf" download>Full experience in my CV <ArrowUpRight size={17} aria-hidden="true" /></a></div>
          <div className="timeline">
            <div className="timeline-item"><div className="timeline-symbol"><ShieldCheck size={20} /></div><div><span className="timeline-date">2018 — 2021</span><h3>Computer & Network Engineering</h3><p className="timeline-org">SMK PGRI 02 Geneng</p><p>Technical foundation in computer hardware, software, and networking. IC3 Digital Literacy certified by Certiport.</p></div></div>
            <div className="timeline-item"><div className="timeline-symbol"><Wrench size={20} /></div><div><span className="timeline-date">MAR 2023 — JAN 2026</span><h3>IT Support Technician</h3><p className="timeline-org">Universitas PGRI Madiun</p><p>Supported nine computer labs with over 180 PCs, handled around 20 support requests weekly, and helped prepare technology for university testing and events. Upgraded approximately 40 PCs across two labs each year.</p></div></div>
            <div className="timeline-item"><div className="timeline-symbol"><BookOpen size={20} /></div><div><span className="timeline-date">MAY — SEP 2026</span><h3>Backend Golang Program</h3><p className="timeline-org">Hacktiv8</p><p>Built Go backend projects spanning REST APIs, gRPC services, PostgreSQL, and Docker.</p></div></div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="container footer-grid">
          <div><div className="kicker">04 / LET'S CONNECT</div><h2>Ready for the <em>next chapter?</em></h2><p>I’m looking for backend engineering opportunities where I can contribute, learn, and grow.</p><a className="button button-gold" href="mailto:arjundwibastian@gmail.com">Send me an email <Mail size={17} aria-hidden="true" /></a></div>
          <div className="footer-links"><a href="https://github.com/arjundwibastian" target="_blank" rel="noreferrer"><span className="social-monogram">GH</span> GitHub <ArrowUpRight size={16} /></a><a href="https://www.linkedin.com/in/arjun-dwi-bastian" target="_blank" rel="noreferrer"><span className="social-monogram">in</span> LinkedIn <ArrowUpRight size={16} /></a><a href="/Arjun_Dwi_Bastian_CV.pdf" download><Download size={21} /> Download CV <ArrowUpRight size={16} /></a></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 ARJUN DWI BASTIAN</span><span>CRAFTED WITH PURPOSE • BUILT WITH REACT</span></div>
      </footer>
    </main>
  );
}
