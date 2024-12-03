import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    const checkDate = () => {
      const currentDate = new Date();
      const cutoffDate = new Date('2024-12-04T12:00:00');
      if (currentDate >= cutoffDate) {
        setShowForm(false);
      }
    };
    checkDate();
    const intervalId = setInterval(checkDate, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
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

      {showForm && <Form />}
    </>
  );
}

export default App;