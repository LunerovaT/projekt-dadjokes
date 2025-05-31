import { useEffect, useState } from 'react';
import { Joke } from '../../components/joke';
import './style.css';

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/vtipy');
        const json = await res.json();
        setJokes(json.data);
      } catch (err) {
        console.error('Chyba při načítání vtipů:', err);
      }
    };

    fetchJokes();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Dad jokes</h1>
      </header>
      <main>
        {jokes.map((joke) => (
          <Joke
            key={joke.id}
            userAvatar={joke.avatar}
            userName={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
          />
        ))}
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};
