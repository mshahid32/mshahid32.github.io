import { Link } from 'react-router-dom';
import { faqs, games, jobs, projects, services, stats, steps, techGroups } from '../data/content';
import './Home.css';

const linkedin = 'https://www.linkedin.com/in/muhammad-shahid-aslam-35137622a';

function Brand() {
  return <a className="brand" href="#top" aria-label="Shahid Aslam, home"><span className="brand-mark">SA</span><span>Shahid Aslam</span></a>;
}

function Nav({ legal = false }: { legal?: boolean }) {
  return (
    <nav className="nav container" aria-label="Primary navigation">
      <Brand />
      <div className="nav-links">
        {legal ? <><Link className="link" to="/">Home</Link><Link className="link" to="/privacy">Privacy Policy</Link><Link className="link" to="/terms">Terms of Use</Link></> : <><a className="link" href="#games">Games</a><a className="link" href="#work">Work</a><a className="link" href="#experience">Experience</a><a className="link" href="#about">About</a></>}
        <a className="nav-contact" href={legal ? 'mailto:muhammadshahidaslam73@gmail.com' : '#contact'}>Contact</a>
      </div>
    </nav>
  );
}

function ServiceIcon({ type }: { type: string }) {
  if (type === 'pulse') return <svg viewBox="0 0 24 24"><polyline points="3,12 8,12 11,5 14,19 17,12 21,12" /></svg>;
  if (type === 'upload') return <svg viewBox="0 0 24 24"><path d="M12 15V3M7 8l5-5 5 5M5 21h14" /></svg>;
  if (type === 'plug') return <svg viewBox="0 0 24 24"><path d="M9 2v6M15 2v6M7 8h10v4a5 5 0 0 1-10 0V8zM12 17v5" /></svg>;
  return <svg viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></svg>;
}

function GamePanel({ game, withBanner = false }: { game: typeof games.wordFuse | typeof games.hueDive; withBanner?: boolean }) {
  return (
    <article className="game-panel">
      {withBanner && 'banner' in game && <img className="game-banner" src={game.banner} alt="Word Fuse: spell words before the board fills" width="1024" height="500" loading="lazy" decoding="async" />}
      <div className="game-header">
        <div className="game-copy">
          <h3>{game.title}</h3>
          <p>{game.description}</p>
          <div className="store-pills"><span>Google Play: coming soon</span><span>App Store: coming soon</span></div>
        </div>
        <ul className="game-highlights">{game.highlights.map((highlight) => <li key={highlight}><span />{highlight}</li>)}</ul>
      </div>
      <div className="screenshots">{game.screenshots.map((shot) => <picture key={shot.src}><source srcSet={shot.small} media="(max-width: 640px)" /><img src={shot.src} alt={shot.alt} width="540" height="960" loading="lazy" decoding="async" /></picture>)}</div>
    </article>
  );
}

export default function Home() {
  return (
    <div className="home" id="top">
      <Nav />
      <main>
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <span className="role-pill">Senior Software Engineer, React Native</span>
            <h1 id="hero-title">Hi, I'm Shahid Aslam, building <span>mobile apps and games.</span></h1>
            <p>Four years of shipping fintech, telecom, fitness and childcare apps to Google Play and the App Store. Now building two puzzle games of my own.</p>
            <div className="hero-actions"><a className="btn btn-primary" href="#games">See my games</a><a className="btn btn-outline" href={linkedin} target="_blank" rel="noopener noreferrer">View LinkedIn</a></div>
          </div>
          <div className="hero-photo">
            <img src="/images/shahid-portrait.jpg" alt="Muhammad Shahid Aslam" width="1376" height="768" fetchPriority="high" decoding="async" />
            <div className="stat-badge badge-tl"><strong>4+</strong><span>Years building apps</span></div><div className="stat-badge badge-tr"><strong>500K+</strong><span>App downloads</span></div><div className="stat-badge badge-bl"><strong>1000+</strong><span>Network sites mapped</span></div><div className="stat-badge badge-br"><strong>2</strong><span>Games in development</span></div>
          </div>
        </section>

        <div className="apps-strip container" aria-label="Apps built and shipped"><p>Apps I've built and shipped</p><div>{['Normies', 'Jazz FiberLive', 'The Nursery App', 'Manzil Invest', 'My Fitness Coach', 'FGMP'].map((app) => <span key={app}>{app}</span>)}</div></div>

        <section className="games section container" id="games" aria-labelledby="games-title"><div className="section-heading"><h2 id="games-title">Games in development</h2><p>Two puzzle games for Android and iOS. Short rounds, simple rules and a reason to play one more time.</p></div><GamePanel game={games.wordFuse} withBanner /><GamePanel game={games.hueDive} /></section>

        <section className="section container" id="work" aria-labelledby="work-title"><div className="section-heading"><h2 id="work-title">Recent projects</h2><p>Production apps built with React Native across fintech, telecom, childcare, fitness and freelancing.</p></div><div className="project-grid">{projects.map((project) => <article className="project-card card" key={project.name}><span className="project-tag">{project.tag}</span><h3>{project.name}</h3><p>{project.text}</p><p className="project-tech">{project.tech}</p><p className="project-meta">{project.meta}</p></article>)}</div></section>

        <section className="section container" id="services" aria-labelledby="services-title"><div className="section-heading"><h2 id="services-title">What I do</h2><p>From the first screen to the store listing, I handle the full life of a mobile app.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.title}><div className="icon-tile"><ServiceIcon type={service.icon} /></div><h3>{service.title}</h3><p>{service.text}</p></article>)}</div></section>

        <section className="stats section container" aria-label="Career stats"><div>{stats.map((stat) => <article className="stat-card" key={stat.label}><strong>{stat.n}</strong><span>{stat.label}</span></article>)}</div></section>

        <section className="section container" id="process" aria-labelledby="process-title"><div className="section-heading"><h2 id="process-title">From idea to playable app</h2><p>The same four steps for every app I build.</p></div><div className="process-grid">{steps.map((step) => <article className="process-card" key={step.n}><strong>{step.n}</strong><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>

        <section className="section container experience" id="experience" aria-labelledby="experience-title"><h2 id="experience-title">Experience</h2><div className="experience-list">{jobs.map((job) => <article className="experience-row" key={job.company}><div className="experience-meta"><strong>{job.dates}</strong><span>{job.place}</span></div><div><h3>{job.role}, {job.company}</h3><p>{job.text}</p></div></article>)}<article className="experience-row"><div className="experience-meta"><strong>2020 – 2022</strong><span>Islamabad, Pakistan</span></div><div><h3>MSc, Computer Science</h3><p>Quaid-i-Azam University</p></div></article></div></section>

        <section className="section container about" id="about" aria-labelledby="about-title"><h2 id="about-title">About me</h2><div className="about-layout"><div className="about-photo"><img src="/images/shahid-portrait.jpg" alt="Muhammad Shahid Aslam" width="1376" height="768" loading="lazy" decoding="async" /><div className="about-name"><strong>Muhammad Shahid Aslam</strong><span>Rawalpindi, Pakistan</span></div></div><div className="about-copy"><div><p className="about-lead">I'm a Senior Software Engineer and React Native developer with four years of experience building fast, polished apps for iOS and Android. I've led cross-functional teams, mentored other developers and taken apps from concept to Google Play and the App Store.</p><p>Outside of work I'm building Word Fuse and Hue Dive, two puzzle games that are light, accessible and quick to pick up.</p></div><div className="tech-card"><h3>My tech stack</h3>{techGroups.map((group) => <div className="tech-row" key={group.name}><strong>{group.name}</strong><span>{group.items}</span></div>)}</div></div></div></section>

        <section className="faq section container" id="faq" aria-labelledby="faq-title"><h2 id="faq-title">Frequently asked questions</h2><div className="faq-list">{faqs.map((faq) => <details className="details" key={faq.q}><summary><span>{faq.q}</span><span className="plus">+</span></summary><p>{faq.a}</p></details>)}</div></section>

        <section className="contact-wrap container" id="contact" aria-labelledby="contact-title"><div className="contact-card"><div><h2 id="contact-title">Have an idea or want to connect?</h2><p>I like talking with other developers, trading ideas and hearing about new opportunities.</p></div><div className="contact-actions"><a className="btn btn-primary" href="mailto:muhammadshahidaslam73@gmail.com">Send an email</a><span>muhammadshahidaslam73@gmail.com</span><a className="link linkedin-link" href={linkedin} target="_blank" rel="noopener noreferrer">Find me on LinkedIn</a></div></div></section>
      </main>

      <footer className="footer"><div className="container footer-inner"><div className="footer-name">SHAHID ASLAM</div><div className="footer-links"><div><a className="link" href="#top">Home</a><a className="link" href="#games">Games</a><a className="link" href="#work">Work</a><a className="link" href="#about">About</a><a className="link" href="#contact">Contact</a><Link className="link" to="/privacy">Privacy Policy</Link><Link className="link" to="/terms">Terms of Use</Link></div><span>Mobile App Developer</span></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Muhammad Shahid Aslam</span></div></div></footer>
    </div>
  );
}

export { Nav };
