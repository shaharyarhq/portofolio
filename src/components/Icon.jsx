const paths = {
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  bolt: 'M13 2 4 14h7l-1 8 9-12h-7z',
  monitor: 'M3 5h18v12H3zM8 21h8M12 17v4',
  cart: 'M3 4h2l2.5 11h11L21 7H6.5M9 20h.01M18 20h.01',
  code: 'm8 8-5 4 5 4m8-8 5 4-5 4M14 4l-4 16',
};

const filled = {
  github:
    'M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7 1 .7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z',
  x:
    'M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L2 3h6.4l4.4 5.8zm-1.1 16.2h1.7L7.4 4.7H5.6z',
  linkedin:
    'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.2 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z',
};

export default function Icon({ name, className }) {
  if (filled[name]) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path d={filled[name]} style={{ fill: 'currentColor', stroke: 'none' }} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className ?? (name === 'arrow' ? 'arrow' : undefined)} aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
