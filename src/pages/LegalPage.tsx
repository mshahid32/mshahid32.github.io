import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { LegalSection } from '../data/legal';
import './Legal.css';

export default function LegalPage({ title, description, notice, sections, alternateLabel, alternateTo }: { title: string; description: string; notice: string; sections: LegalSection[]; alternateLabel: string; alternateTo: string }) {
  useEffect(() => {
    document.title = title === 'Privacy Policy' ? 'Privacy Policy, Shahid Aslam' : 'Terms of Use, Shahid Aslam';
    const meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) meta.content = description;
  }, [title, description]);
  return (
    <div className="legal-page">
      <nav className="nav container legal-nav" aria-label="Primary navigation">
        <Link className="brand" to="/" aria-label="Shahid Aslam, home"><span className="brand-mark">SA</span><span>Shahid Aslam</span></Link>
        <div className="nav-links"><Link className="link" to="/">Home</Link><Link className="link" to={alternateTo}>{alternateLabel}</Link><a className="nav-contact" href="mailto:muhammadshahidaslam73@gmail.com">Contact</a></div>
      </nav>
      <main>
        <article className="legal-article">
          <div className="legal-heading"><h1>{title}</h1><p>{title === 'Terms of Use' ? 'Effective date: November 24, 2026' : 'Effective date: November 24, 2026'}</p></div>
          {notice && <div className="draft-notice">{notice}</div>}
          <div className="legal-sections">{sections.map((section) => <section className="legal-section" key={section.h}><h2>{section.h}</h2>{section.paras.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</div>
        </article>
      </main>
      <footer className="legal-footer"><div className="legal-footer-inner"><span>© {new Date().getFullYear()} Muhammad Shahid Aslam</span><span>Independent app developer, Rawalpindi, Pakistan</span></div></footer>
    </div>
  );
}
