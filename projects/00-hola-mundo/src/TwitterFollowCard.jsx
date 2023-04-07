import { useState } from "react"
export function TwitterFollowCard ({userName, children}) {


const [isFollowing, setIsFollowing] = useState(false)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClaseName = isFollowing 
  ? 'tw-followCard-button is-following'
  : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }


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
      <button className={buttonClaseName} onClick={handleClick}>{text}</button>
    </aside>
  </article>
  )
}