import React from 'react';
import PlayerCard from './PlayerCard';
import AddPlayersButton from './AddPlayersButton';
import { useHockeyPlayers } from '../hooks/useHockeyPlayers';

const HockeyPlayers: React.FC = () => {
  const { players, loading, refetch } = useHockeyPlayers();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Hockey Players</h1>
      <AddPlayersButton onPlayersAdded={refetch} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {players.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default HockeyPlayers;