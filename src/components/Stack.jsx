import { useEffect, useState } from 'react';
import { stack, stats } from '../data';
import { useInView } from '../hooks';
import { Anim } from './Anim';
import SectionHead from './SectionHead';

const tilts = ['-1deg', '1deg', '-.5deg'];

function Counter({ value, label, delay }) {
  const [ref, inView] = useInView({ threshold: 0.6 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const t0 = performance.now();
    let id;
    const tick = (t) => {
      const p = Math.min((t - t0) / 1200, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [inView, value]);

  return (
    <div ref={ref}>
      <Anim className="counter" show={inView} delay={delay}>
        <span className="counter__num">{n}</span><span>{label}</span>
      </Anim>
    </div>
  );
}

export default function Stack() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <SectionHead eyebrow="my toolbox" title="Tech Stack" note="Pulled from what I actually ship." />

        <ul className="repo-grid">
          {stack.map((s, i) => (
            <Anim as="li" key={s.title} delay={i * 120}>
              <div className="repo" style={{ '--tilt': tilts[i % tilts.length] }}>
                <div className={`repo__bar tone-${s.tone}`}><span>{s.path}</span><span>★ {s.freq}</span></div>
                <div className="repo__body">
                  <h3>{s.title}</h3>
                  <p>{s.blurb}</p>
                  <ul className="chips">{s.items.map((t) => <li key={t}>{t}</li>)}</ul>
                </div>
              </div>
            </Anim>
          ))}
        </ul>

        <div className="counters">
          {stats.map((s, i) => <Counter key={s.label} {...s} delay={i * 100} />)}
        </div>
      </div>
    </section>
  );
}
