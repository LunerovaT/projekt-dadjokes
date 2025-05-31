import { useState } from 'react';
import './style.css';

export const Joke = ({
  userAvatar,
  userName,
  text,
  likes: initialLikes,
  dislikes: initialDislikes,
}) => {
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} alt={userName} />
          <p className="user-name">{userName}</p>
        </div>
        <p className="joke__text">{text}</p>
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
  );
};
