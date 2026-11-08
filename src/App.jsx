import { useLayoutEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';
import { caseStudies } from './caseStudies';
import { useHash } from './hooks';

export default function App() {
  const hash = useHash();
  const slug = hash.match(/^#\/projects\/([\w-]+)$/)?.[1];
  const study = slug && Object.hasOwn(caseStudies, slug) ? caseStudies[slug] : null;

  // switching between the home page and a project page: start at the top,
  // or at the section the link pointed to (e.g. #contact)
  useLayoutEffect(() => {
    const target = !study && hash.length > 1 && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView({ behavior: 'instant' });
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [study]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <main id="main" className="paper">
        {study ? (
          <>
            <ProjectPage study={study} key={slug} />
            <Contact />
          </>
        ) : (
          <>
            <Hero />
            <Marquee />
            <Services />
            <Projects />
            <Stack />
            <Clients />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
