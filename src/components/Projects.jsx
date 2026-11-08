import { useRef, useState } from 'react';
import { projects } from '../data';
import { caseStudies } from '../caseStudies';
import { useInView, useScroll } from '../hooks';
import { Anim } from './Anim';
import Icon from './Icon';
import SectionHead from './SectionHead';

const tilts = ['3deg', '-3deg', '4deg'];

function Mock({ type }) {
  const blocks = { board: 3, shop: 6, cal: 1 }[type] ?? 0;
  return (
    <div className={`mock mock--${type}`}>
      {Array.from({ length: blocks }, (_, i) => <b key={i}></b>)}
    </div>
  );
}

function Photo({ project, tilt }) {
  const [ref, inView] = useInView();
  return (
    <div className="photo" ref={ref}>
      <Anim type="drop" show={inView} delay={100} className="photo__frame" style={{ '--tilt': tilt }}>
        {project.image
          ? <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
          : <Mock type={project.mock} />}
      </Anim>
      <Anim as="span" type="fade" show={inView} delay={600} className="tape tape--l" />
      <Anim as="span" type="fade" show={inView} delay={700} className="tape tape--r" />
    </div>
  );
}

export default function Projects() {
  const itemRefs = useRef([]);
  const [scales, setScales] = useState(() => projects.map(() => 1));

  // each folder shrinks slightly as the next one slides over it
  useScroll(() => {
    const items = itemRefs.current;
    setScales(items.map((item, i) => {
      const next = items[i + 1];
      if (!item || !next) return 1;
      const gap = next.getBoundingClientRect().top - item.getBoundingClientRect().top;
      const progress = Math.min(Math.max(1 - gap / item.offsetHeight, 0), 1);
      return 1 - progress * 0.06;
    }));
  });

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead eyebrow="explore my work!" title="Projects" note="A few recent things I've shipped." />

        <ul className="stack-list">
          {projects.map((p, i) => (
            <li
              className="stack-list__item"
              key={p.title}
              ref={(el) => (itemRefs.current[i] = el)}
              style={{ top: `calc(var(--nav-h) + ${1.5 + i}rem)` }}
            >
              <article className={`folder tone-${p.tone}`} style={{ '--s': scales[i] }}>
                <span className="folder__tab" style={{ '--i': i }}>✦ Project {String(i + 1).padStart(2, '0')}</span>
                <div className="folder__body">
                  <div className="project">
                    <div className="project__info">
                      <p className="project__kind"><i></i>{p.kind}</p>
                      <h3 className="project__title">{p.title}</h3>
                      <p className="project__desc">{p.description}</p>
                      {caseStudies[p.slug]
                        ? <a className="text-link" href={`#/projects/${p.slug}`}>See how it works <Icon name="arrow" /></a>
                        : p.link && <a className="text-link" href={p.link}>View project <Icon name="arrow" /></a>}
                      <ul className="chips">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                    </div>
                    <Photo project={p} tilt={tilts[i % tilts.length]} />
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
