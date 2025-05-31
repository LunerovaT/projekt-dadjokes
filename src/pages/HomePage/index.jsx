import { useState, useEffect } from 'react';
import './style.css';

export const HomePage = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [jokeText, setJokeText] = useState('Načítám vtip...');

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/vtipy');
        const json = await response.json();
        const first = json.data[0];
        setJokeText(first.text);
      } catch (error) {
        setJokeText('Nepodařilo se načíst vtip 😢');
        console.error('Chyba při načítání:', error);
      }
    };

    fetchJoke();
  }, []);

  return (
    <div className="container">
      <header>
        <div className="logo"></div>
      </header>
      <main>
        <div className="container">
          <div className="joke">
            <div className="joke__body">
              <div className="joke__user">
                <img
                  className="user-avatar"
                  src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
                  alt="Neroxx"
                />
                <p className="user-name">Neroxx</p>
              </div>

              <p className="joke__text">{jokeText}</p>
            </div>

            <div className="joke__likes">
              <button
                className="btn-like btn-like--up"
                onClick={() => setLikes(likes + 1)}
              ></button>
              <span className="likes-count likes-count--up">{likes}</span>

              <button
                className="btn-like btn-like--down"
                onClick={() => setDislikes(dislikes + 1)}
              ></button>
              <span className="likes-count likes-count--down">{dislikes}</span>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};
