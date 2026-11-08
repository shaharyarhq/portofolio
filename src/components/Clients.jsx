import { clientProjects } from '../data';
import { Anim } from './Anim';
import SectionHead from './SectionHead';

const tilts = ['-1.5deg', '1deg', '-.5deg'];

export default function Clients() {
  return (
    <section className="section" id="clients">
      <div className="container">
        <SectionHead eyebrow="people I've worked with" title="Client projects" />

        <ul className="client-projects">
          {clientProjects.map(({ name, project, tone }, i) => (
            <Anim as="li" key={name} delay={i * 120}>
              <div className={`client-project tone-${tone}`} style={{ '--tilt': tilts[i % tilts.length] }}>
                <h3>{name}</h3>
                <p>{project}</p>
              </div>
            </Anim>
          ))}
        </ul>
      </div>
    </section>
  );
}
