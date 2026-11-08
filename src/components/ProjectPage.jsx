import { useEffect, useRef, useState } from 'react';
import { useMounted } from '../hooks';
import { Anim, SplitText } from './Anim';
import Icon from './Icon';

// Full-screen image viewer. Arrow keys / buttons step through `shots`.
function Lightbox({ shots, index, onChange, onClose }) {
  const ref = useRef(null);
  const open = index !== null;

  useEffect(() => {
    const dialog = ref.current;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const step = (d) => onChange((index + d + shots.length) % shots.length);
  const onKey = (e) => {
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  };
  const shot = open ? shots[index] : null;

  return (
    <dialog ref={ref} className="lightbox" onClose={onClose} onKeyDown={onKey} onClick={(e) => e.target === ref.current && onClose()}>
      {shot && (
        <figure className="lightbox__body">
          <img src={shot.src} alt={shot.caption} />
          <figcaption>
            <span className="lightbox__count">{index + 1} / {shots.length}</span>
            {shot.caption}
          </figcaption>
          <button className="lightbox__btn lightbox__btn--prev" onClick={() => step(-1)} aria-label="Previous screenshot">
            <Icon name="arrow" />
          </button>
          <button className="lightbox__btn lightbox__btn--next" onClick={() => step(1)} aria-label="Next screenshot">
            <Icon name="arrow" />
          </button>
          <button className="lightbox__close" onClick={onClose} aria-label="Close">✕</button>
        </figure>
      )}
    </dialog>
  );
}

export default function ProjectPage({ study }) {
  const on = useMounted();
  const [viewing, setViewing] = useState(null);

  // one flat list so the lightbox can step across every section
  const shots = [study.cover, ...study.steps.flatMap((s) => s.shots)];
  const offsets = study.steps.reduce((acc, s, i) => [...acc, acc[i] + s.shots.length], [1]);

  // in-page jumps use scrollIntoView so they don't change the #/route hash
  const jump = (i) => document.getElementById(`step-${i + 1}`)?.scrollIntoView();

  return (
    <article className={`study tone-${study.tone}`}>
      <header className="section study__head">
        <div className="container">
          <a className="text-link study__back" href="#projects">
            <Icon name="arrow" className="arrow arrow--back" /> All projects
          </a>
          <p className="project__kind"><i></i>{study.kind}</p>
          <h1 className="pixel-title"><SplitText text={study.title} show={on} delay={100} step={35} /></h1>
          <Anim as="p" className="study__intro" show={on} delay={400}>{study.intro}</Anim>
          <Anim as="ul" className="chips" show={on} delay={550}>
            {study.tags.map((t) => <li key={t}>{t}</li>)}
          </Anim>
          {study.live && (
            <Anim show={on} delay={600}>
              <a className="btn btn--sm" href={study.live} target="_blank" rel="noopener">
                Visit live site <Icon name="arrow" />
              </a>
            </Anim>
          )}

          <Anim as="dl" className="study__facts" show={on} delay={650}>
            {study.facts.map((f) => (
              <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>
            ))}
          </Anim>

          <Anim className="photo study__cover" type="drop" show={on} delay={300}>
            <button className="photo__frame shot" style={{ '--tilt': '-1.5deg' }} onClick={() => setViewing(0)}>
              <img src={study.cover.src} alt={study.cover.caption} />
            </button>
            <span className="tape tape--l"></span>
            <span className="tape tape--r"></span>
          </Anim>

          <ul className="study__stats">
            {study.stats.map((s, i) => (
              <Anim as="li" key={s.label} type="stick" delay={i * 90}>
                <strong>{s.value}</strong>{s.label}
              </Anim>
            ))}
          </ul>
        </div>
      </header>

      <section className="section study__flow" aria-labelledby="flow-title">
        <div className="container">
          <p className="eyebrow">how it works</p>
          <h2 className="pixel-title" id="flow-title">The flow</h2>

          <ol className="flow-map">
            {study.steps.map((s, i) => (
              <li key={s.title}>
                <button onClick={() => jump(i)}>
                  <span>{String(i + 1).padStart(2, '0')}</span>{s.title}
                </button>
              </li>
            ))}
          </ol>

          {study.steps.map((s, i) => (
            <section className="flow-step" id={`step-${i + 1}`} key={s.title}>
              <Anim className="flow-step__text">
                <span className="flow-step__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                {s.points && (
                  <ul className="flow-step__points">
                    {s.points.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                )}
              </Anim>
              <ul className={`shots shots--${s.shots.length === 4 ? 2 : Math.min(s.shots.length, 3)}`}>
                {s.shots.map((shot, j) => (
                  <Anim as="li" key={shot.src} delay={j * 80}>
                    <button className="shot" onClick={() => setViewing(offsets[i] + j)}>
                      <img src={shot.src} alt={shot.caption} loading="lazy" />
                    </button>
                    <p className="shot__caption">{shot.caption}</p>
                  </Anim>
                ))}
              </ul>
            </section>
          ))}

          <div className="study__end">
            <p className="tape-note">Need something like this for your business?</p>
            <div className="study__end-actions">
              <a className="btn" href="#contact">Let's talk <Icon name="arrow" /></a>
              <a className="btn btn--outline" href="#projects">Back to projects</a>
            </div>
          </div>
        </div>
      </section>

      <Lightbox shots={shots} index={viewing} onChange={setViewing} onClose={() => setViewing(null)} />
    </article>
  );
}
