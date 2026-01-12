import React from 'react';
import type { Player } from '../hooks/useHockeyPlayers';

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '8px',
      width: '250px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3>{player.name}</h3>
      <p><strong>Position:</strong> {player.position}</p>
      {player.team && <p><strong>Team:</strong> {player.team}</p>}
    </div>
  );
};

export default PlayerCard;