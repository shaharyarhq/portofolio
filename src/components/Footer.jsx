import { useEffect, useState } from 'react';
import { nav, profile, services } from '../data';
import Icon from './Icon';

function useLocalTime(timeZone) {
  const fmt = () =>
    new Date().toLocaleTimeString('en-US', { timeZone, hour: '2-digit', minute: '2-digit' });
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 15000);
    return () => clearInterval(id);
  }, [timeZone]);
  return time;
}

export default function Footer() {
  const time = useLocalTime(profile.timezone);
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* torn paper edge */}
      <svg className="footer__edge" viewBox="0 0 1200 40" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 40V22l40-8 35 10 50-14 40 12 55-16 30 9 60-11 45 14 50-13 35 8 55-12 40 15 45-10 50 11 30-9 60 13 45-12 40 8 55-14 35 12 50-9 45 11 30-6L1200 18V40z" />
      </svg>

      <div className="footer__band">
        <div className="container">
          {/* call to action */}
          <div className="footer__cta">
            <div>
              <p className="footer__kicker">got an idea?</p>
              <p className="footer__big">Let's build it<span className="footer__dot">.</span></p>
            </div>
            <div className="footer__cta-actions">
              <a className="btn" href="#contact">Start a project <Icon name="arrow" /></a>
              {profile.email && <a className="btn btn--ghost" href={`mailto:${profile.email}`}>{profile.email}</a>}
            </div>
          </div>

          <div className="footer__grid">
            <div className="footer__brand">
              <p className="footer__name">{profile.name}</p>
              <p className="footer__role">{profile.role}</p>
              <div className="footer__social">
                {profile.github && <a className="icon-btn icon-btn--lg tone-pink" href={profile.github} target="_blank" rel="noopener" aria-label="GitHub"><Icon name="github" /></a>}
                {profile.x && <a className="icon-btn icon-btn--lg tone-mint" href={profile.x} target="_blank" rel="noopener" aria-label="X (Twitter)"><Icon name="x" /></a>}
                {profile.linkedin && <a className="icon-btn icon-btn--lg tone-yellow" href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><Icon name="linkedin" /></a>}
              </div>
            </div>

            <div>
              <p className="footer__title">Pages</p>
              <ul className="footer__links">
                {nav.map((n) => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div>
              <p className="footer__title">Services</p>
              <ul className="footer__links">
                {services.map((s) => <li key={s.title}><a href="#services">{s.title}</a></li>)}
              </ul>
            </div>

            <div>
              <p className="footer__title">Right now</p>
              <ul className="footer__links footer__status">
                <li><span className="footer__clock">🕑 {time}</span> my local time</li>
                <li>📍 {profile.location}</li>
                {profile.available && <li><span className="live-dot" aria-hidden="true"></span>{profile.availabilityText}</li>}
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <span>&copy; {year} {profile.name}. All rights reserved.</span>
            <span className="footer__made">Made with <span className="heart">♥</span> &amp; lots of chai in {profile.location}</span>
            <a className="footer__top" href="#top" aria-label="Back to top">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5m-6 6 6-6 6 6" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
