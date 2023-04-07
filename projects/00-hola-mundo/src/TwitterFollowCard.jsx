import { useState } from 'react';
export function TwitterFollowCard({ userName, children, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClaseName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span clasname='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClaseName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCar-stopFollow'>Dejar de Seguir</span>
        </button>
      </aside>
    </article>
  );
}
