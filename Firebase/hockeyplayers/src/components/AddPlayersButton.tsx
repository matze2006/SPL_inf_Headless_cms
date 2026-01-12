import React from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';

interface AddPlayersButtonProps {
  onPlayersAdded: () => void;
}

const AddPlayersButton: React.FC<AddPlayersButtonProps> = ({ onPlayersAdded }) => {
  const addSamplePlayers = async () => {
    const samplePlayers = [
      { name: 'Wayne Gretzky', position: 'Center', team: 'Edmonton Oilers' },
      { name: 'Mario Lemieux', position: 'Center', team: 'Pittsburgh Penguins' },
      { name: 'Bobby Orr', position: 'Defenseman', team: 'Boston Bruins' },
      { name: 'Gordie Howe', position: 'Right Wing', team: 'Detroit Red Wings' },
      { name: 'Sidney Crosby', position: 'Center', team: 'Pittsburgh Penguins' },
    ];

    for (const player of samplePlayers) {
      try {
        await addDoc(collection(db, 'hockeyPlayers'), player);
      } catch (error) {
        console.error('Error adding player:', player.name, error);
      }
    }
    onPlayersAdded();
  };

  return (
    <button onClick={addSamplePlayers} style={{
      padding: '10px 20px',
      fontSize: '16px',
      margin: '16px'
    }}>
      Add Sample Players
    </button>
  );
};

export default AddPlayersButton;