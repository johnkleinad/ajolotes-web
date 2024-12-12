import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [backgroundStyle, setBackgroundStyle] = useState({
    gradient1: { x: 88, y: 40 },
    gradient2: { x: 49, y: 30 },
    gradient3: { x: 14, y: 26 },
  });

  useEffect(() => {
    const animateBackground = () => {
      setBackgroundStyle((prev) => ({
        gradient1: {
          x: prev.gradient1.x + Math.sin(Date.now() / 1000) * 0.5,
          y: prev.gradient1.y + Math.cos(Date.now() / 1000) * 0.5,
        },
        gradient2: {
          x: prev.gradient2.x + Math.sin(Date.now() / 1100) * 0.3,
          y: prev.gradient2.y + Math.cos(Date.now() / 1100) * 0.3,
        },
        gradient3: {
          x: prev.gradient3.x + Math.sin(Date.now() / 1200) * 0.4,
          y: prev.gradient3.y + Math.cos(Date.now() / 1200) * 0.4,
        },
      }));
    };

    const intervalId = setInterval(animateBackground, 5);
    return () => clearInterval(intervalId);
  }, []);

  const { gradient1, gradient2, gradient3 } = backgroundStyle;

  return (
    <div
      style={{
        backgroundImage: `
          radial-gradient(at ${gradient1.x}% ${gradient1.y}%, #421958 0px, transparent 85%),
          radial-gradient(at ${gradient2.x}% ${gradient2.y}%, #00003a 0px, transparent 85%),
          radial-gradient(at ${gradient3.x}% ${gradient3.y}%, #14141a 0px, transparent 85%)
        `,
        transition: 'background-image 0.1s ease',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        inset: 0,
      }}
      className="overflow-auto p-10"
    >
      <div className="flex flex-col items-center gap-5 mb-10">
        <img
          src="/images/gradient_logo.png"
          alt=""
          className="max-h-[315px] max-w-72 h-full w-full"
        />
        <div>
          <span className="text-3xl font-light">AWS User Group</span> <br />
          <span className="text-5xl font-bold">Ajolotes en la Nube</span>
        </div>
      </div>
      <span className="text-2xl font-light">
        Próximamente nuestra web oficial
      </span>
      <Form />
    </div>
  );
}

export default App;