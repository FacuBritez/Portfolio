import { useEffect } from 'react';
import './App.scss';

import BgCanvas from './Components/BgCanvas';
import Navbar from './Components/NavBar';
import Banner from './Components/Banner';
import Proyectos from './Components/Proyectos';
import SobreMi from './Components/SobreMi';
import Skills from './Components/Skills';
import Contacto from './Components/Contacto';
import Footer from './Components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    document
      .querySelectorAll('[data-animate], .project-card, .bento-item')
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;
      e.preventDefault();
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const el = document.querySelector(href);
      if (el) {
        window.scrollTo({ top: (el as HTMLElement).offsetTop - 80, behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="App">
      <BgCanvas />
      <Navbar />
      <Banner />
      <Proyectos />
      <SobreMi />
      <Skills />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;