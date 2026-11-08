import { useInView } from '../hooks';

// Animated wrapper. Pass `show` to control it from a parent,
// otherwise it animates itself when scrolled into view.
export function Anim({ as: Tag = 'div', type = 'fade-up', delay = 0, show, className = '', style, children, ...rest }) {
  const [ref, inView] = useInView();
  const active = show ?? inView;
  return (
    <Tag
      ref={show === undefined ? ref : undefined}
      data-anim={type}
      className={`${className} ${active ? 'is-in' : ''}`.trim()}
      style={{ ...style, '--d': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Splits text into letters that bounce in one after another.
export function SplitText({ text, show, delay = 0, step = 60 }) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" data-split className={show ? 'is-in' : ''}>
        {[...text].map((ch, i) => (
          <span
            key={i}
            className={ch === ' ' ? 'char space' : 'char'}
            style={{ '--d': `${delay + i * step}ms` }}
          >
            {ch === ' ' ? ' ' : ch}
          </span>
        ))}
      </span>
    </>
  );
}
