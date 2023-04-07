import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true,
  },
  {
    userName: 'pheralb',
    name: 'Pablo Hernández',
    isFollowing: false,
  },
  {
    userName: 'Pacoweb',
    name: 'Francisco Juárez',
    isFollowing: true,
  },
  {
    userName: 'TMChein',
    name: 'Tomas Prado',
    isFollowing: false,
  },
];

export function App () {
  return (
    <section className='App'>
      {
        users.map(({userName, name, isFollowing}) => (

            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          ))
        }
    </section>
  );
}
