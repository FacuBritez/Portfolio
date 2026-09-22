import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  rgb: string;
};

function BgCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let w = 0, h = 0, dpr = 1;
    let raf = 0;

    const COLORS = ['108, 92, 231', '0, 206, 201'];

    const initParticles = () => {
      const count = Math.min(
        Math.floor((window.innerWidth * window.innerHeight) / 22000),
        80
      );
      particles = Array.from({ length: count }, () => {
        const rgb = COLORS[Math.random() > 0.5 ? 0 : 1];
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.5 * dpr,
          vy: (Math.random() - 0.5) * 0.5 * dpr,
          r: (Math.random() * 1.6 + 0.6) * dpr,
          rgb,
        };
      });
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      initParticles();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const maxDist = 140 * dpr;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.rgb}, 0.65)`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.hypot(dx, dy);

          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * 0.16;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(${p.rgb}, ${alpha})`;
            ctx.lineWidth = 1 * dpr;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas id="bg-canvas" ref={ref} />;
}

export default BgCanvas;