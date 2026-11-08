import { useState } from 'react';
import { profile } from '../data';
import { useMounted } from '../hooks';
import { Anim, SplitText } from './Anim';
import Icon from './Icon';

export default function Hero() {
  const on = useMounted();
  const [lens, setLens] = useState(null);

  // dashed "selection box" that follows the cursor over your name
  const moveLens = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setLens({ x: e.clientX - r.left - 72, y: e.clientY - r.top - 48 });
  };

  const { pins } = profile;

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        {profile.available && (
          <Anim as="p" className="status-pill" show={on}>
            <span className="live-dot" aria-hidden="true"></span>{profile.availabilityText}
          </Anim>
        )}
        <Anim as="p" className="eyebrow" show={on} delay={100}>
          hey there, i'm
          <svg className="eyebrow__arrow" viewBox="0 0 60 30" aria-hidden="true"><path d="M2 6c14 2 26 8 34 18m0 0-1-9m1 9-9-2" /></svg>
        </Anim>

        <div
          className={`hero__stage ${lens ? 'is-hovering' : ''}`}
          onPointerMove={moveLens}
          onPointerLeave={() => setLens(null)}
        >
          <div className="hand-box">
            <h1 className="hero__name">
              <SplitText text={profile.name} show={on} delay={200} step={60} />
            </h1>
          </div>
          <svg className="doodle doodle--star" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 3l4 12 13 1-10 8 4 13-11-8-11 8 4-13L3 16l13-1z" /></svg>
          <svg className="doodle doodle--squiggle" viewBox="0 0 80 20" aria-hidden="true"><path d="M2 10c8-10 14 10 22 0s14 10 22 0 14 10 22 0" /></svg>

          <Anim as="span" type="pop" delay={800} show={on} className="pin pin--tl">
            <span className="sticker tone-mint" style={{ '--tilt': '-6deg' }}>{pins.topLeft}</span>
          </Anim>
          <Anim as="span" type="pop" delay={900} show={on} className="pin pin--tr">
            <span className="sticker tone-yellow" style={{ '--tilt': '6deg' }}>{pins.topRight}</span>
          </Anim>
          <Anim as="span" type="stick" delay={1000} show={on} className="pin pin--bl">
            <span className="note tone-yellow" style={{ '--tilt': '-4deg' }}>{pins.bottomLeft}</span>
          </Anim>
          <Anim as="span" type="stick" delay={1100} show={on} className="pin pin--br">
            <span className="note tone-mint" style={{ '--tilt': '4deg' }}>{pins.bottomRight}</span>
          </Anim>

          <span
            className="lens"
            aria-hidden="true"
            style={lens ? { '--lx': `${lens.x}px`, '--ly': `${lens.y}px` } : undefined}
          >
            <i></i><i></i><i></i><i></i>
          </span>
        </div>

        <Anim as="h2" className="hero__headline" delay={1000} show={on}>
          {profile.headline}{' '}
          <span className="scribble">
            {profile.highlight}
            <svg viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true"><path d="M3 14c40-8 90-10 194-4" /></svg>
          </span>
          <Anim as="span" type="pop" delay={1700} show={on} className="badge tone-yellow" aria-hidden="true">
            <Icon name="bolt" />
          </Anim>
        </Anim>

        <Anim className="hero__actions" delay={1300} show={on}>
          <a className="btn" href="#projects">View work <Icon name="arrow" /></a>
          <a className="btn btn--outline" href="#contact">Get in touch</a>
        </Anim>
      </div>
    </section>
  );
}
