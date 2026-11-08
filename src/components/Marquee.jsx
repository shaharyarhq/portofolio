import { marquee } from '../data';

// a strip of tape with your skills scrolling across it
export default function Marquee() {
  const row = marquee.map((word, i) => (
    <span key={i} className="marquee__item">{word}<span className="marquee__star" aria-hidden="true">✦</span></span>
  ));
  return (
    <div className="marquee" aria-label={`Skills: ${marquee.join(', ')}`}>
      <div className="marquee__track" aria-hidden="true">
        <div className="marquee__row">{row}</div>
        <div className="marquee__row">{row}</div>
      </div>
    </div>
  );
}
