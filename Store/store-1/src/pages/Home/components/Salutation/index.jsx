import React, { useEffect, useState } from "react";
import { useAuth } from "../../../../context/auth/AuthContext";

export default function Salutation() {
  const [salutation, setSalutation] = useState('');
  const [timedisplay, setTimeDisplay] = useState('');
  const { state } = useAuth();

  useEffect(() => {
    const currentTime = new Date().getHours();
    const localStorageLoad = localStorage.getItem('salutation');
    const localStorageHora = localStorage.getItem('exibicaoHora');

    if (localStorageLoad && localStorageHora) {
      const showtime = new Date(localStorageHora);
      const umDiaEmMilissegundos = 24 * 60 * 60 * 1000;
      const displaytime = showtime.getTime() + umDiaEmMilissegundos;

      if (Date.now() >= displaytime) {
        localStorage.removeItem('salutation');
        localStorage.removeItem('exibicaoHora');
        setSalutation('');
        setTimeDisplay('');
      } else {
        setSalutation(localStorageLoad);
        setTimeDisplay(localStorageHora);
      }
    } else {
      if (currentTime >= 0 && currentTime < 12) {
        
        if (state.isAuthenticated && state.email) {
          const email = state.email.split('@')[0];
          const newgreeting = `Bom dia! Seja bem-vindo ${email}`;
          setSalutation(newgreeting);
        } else {
          const newgreeting = 'Bom dia! Seja bem-vindo. ';
          setSalutation(newgreeting);
          
          localStorage.setItem('salutation', newgreeting);
        }

      } else if (currentTime >= 12 && currentTime < 18) {

        if (state.isAuthenticated && state.email) {
          const email = state.email.split('@')[0];
          const newgreeting = `Boa tarde! Seja bem-vindo ${email}`;
          setSalutation(newgreeting);
        } else {
          const newgreeting = 'Boa tarde! Seja bem-vindo.';
          setSalutation(newgreeting);
          localStorage.setItem('salutation', newgreeting);
        }

      } else {

        if (state.isAuthenticated && state.email) {
          const email = state.email.split('@')[0];
          const newgreeting = `Boa noite! Seja bem-vindo ${email}`;
          setSalutation(newgreeting);
        } else {
          const newgreeting = 'Boa noite! Seja bem-vindo.';
          setSalutation(newgreeting);
          localStorage.setItem('salutation', newgreeting);
        }

      }
      const currenttime1 = new Date().toLocaleString();
      setTimeDisplay(currenttime1);
      localStorage.setItem('exibicaoHora', currenttime1);
    }
  }, []);

  useEffect(() => {
    if (salutation) {
      localStorage.removeItem('salutation');
      localStorage.removeItem('exibicaoHora');
    }
  }, [salutation]);

  return (
    <div className="max-w-[1640px] mx-auto">
        <div className="p-3">
        {salutation && (
            <>
              <h1 className="font-bold text-3xl animate-pulse">{salutation}</h1>
            </>
        )}
        </div>
    </div>
  );
}
