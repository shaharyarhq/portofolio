import { services } from '../data';
import { Anim } from './Anim';
import Icon from './Icon';
import SectionHead from './SectionHead';

const tilts = ['-1deg', '1deg', '-.5deg'];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHead eyebrow="what i do" title="Services" note="Built around how your business actually works." />

        <ul className="clip-grid">
          {services.map((s, i) => (
            <Anim as="li" key={s.title} delay={i * 120}>
              <a className="clipboard" href="#contact" style={{ '--tilt': tilts[i % tilts.length] }}>
                <span className="clipboard__clip" aria-hidden="true"></span>
                <div className="clipboard__sheet">
                  <div className="clipboard__head">
                    <h3 className={`torn tone-${s.tone}`}>{s.title}</h3>
                    <span className={`badge badge--lg tone-${s.tone}`} aria-hidden="true"><Icon name={s.icon} /></span>
                  </div>
                  <ul className="checklist">
                    {s.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                  <span className="clipboard__cta">Start a project <Icon name="arrow" /></span>
                </div>
              </a>
            </Anim>
          ))}
        </ul>
      </div>
    </section>
  );
}
