import { useState } from 'react';
import { nav, profile } from '../data';
import { useScroll } from '../hooks';
import Icon from './Icon';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useScroll(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    setProgress(max > 0 ? window.scrollY / max : 0);
    setScrolled(window.scrollY > 8);

    const y = window.scrollY + window.innerHeight * 0.35;
    let idx = 0;
    nav.forEach((item, i) => {
      const el = document.querySelector(item.href);
      if (el && el.offsetTop <= y) idx = i;
    });
    setActive(idx);
  });

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <span className="nav__progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true"></span>
      <nav className="nav__bar" aria-label="Main">
        <a className="nav__logo" href="#top" aria-label="Home">
          <span>{profile.name[0]}</span>
        </a>
        <ul className="nav__links">
          {nav.map((item, i) => (
            <li key={item.href}>
              <a href={item.href} className={i === active ? 'is-active' : ''}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav__right">
          {profile.github && (
            <a className="icon-btn tone-pink" href={profile.github} target="_blank" rel="noopener" aria-label="GitHub">
              <Icon name="github" />
            </a>
          )}
          {profile.x && (
            <a className="icon-btn tone-mint" href={profile.x} target="_blank" rel="noopener" aria-label="X (Twitter)">
              <Icon name="x" />
            </a>
          )}
          {profile.linkedin && (
            <a className="icon-btn tone-yellow" href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
              <Icon name="linkedin" />
            </a>
          )}
          <a className="btn btn--outline btn--sm nav__cta" href="#contact">Contact</a>
          <button
            className="nav__burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            <span></span><span></span>
          </button>
        </div>
      </nav>
      <div className="nav__menu" id="mobile-menu" hidden={!open}>
        {nav.map((item) => (
          <a key={item.href} href={item.href} onClick={close}>{item.label}</a>
        ))}
        <a href="#contact" onClick={close}>Contact</a>
      </div>
    </header>
  );
}
