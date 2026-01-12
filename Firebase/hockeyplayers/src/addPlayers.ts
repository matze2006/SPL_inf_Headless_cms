import { collection, addDoc } from 'firebase/firestore';
import { db } from './utils/firebase';

const addPlayers = async () => {
  const players = [
    { name: 'Wayne Gretzky', position: 'Center', team: 'Edmonton Oilers' },
    { name: 'Mario Lemieux', position: 'Center', team: 'Pittsburgh Penguins' },
    { name: 'Bobby Orr', position: 'Defenseman', team: 'Boston Bruins' },
    { name: 'Gordie Howe', position: 'Right Wing', team: 'Detroit Red Wings' },
    { name: 'Sidney Crosby', position: 'Center', team: 'Pittsburgh Penguins' },
  ];

  for (const player of players) {
    try {
      const docRef = await addDoc(collection(db, 'hockeyPlayers'), player);
      console.log('Added player:', player.name, 'with ID:', docRef.id);
    } catch (error) {
      console.error('Error adding player:', player.name, error);
    }
  }
};

addPlayers();