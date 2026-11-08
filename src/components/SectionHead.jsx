import { useInView } from '../hooks';
import { Anim, SplitText } from './Anim';

export default function SectionHead({ eyebrow, title, note }) {
  const [ref, inView] = useInView();
  return (
    <header className="sec-head" ref={ref}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="pixel-title">
        <SplitText text={title} show={inView} delay={150} step={55} />
      </h2>
      {note && (
        <Anim as="span" type="stick" delay={700} show={inView} className="tape-note">
          {note}
        </Anim>
      )}
    </header>
  );
}
