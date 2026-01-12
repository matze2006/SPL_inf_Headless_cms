import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../utils/firebase';

export interface Player {
  id: string;
  name: string;
  position: string;
  team?: string;
}

export const useHockeyPlayers = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPlayers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'hockeyPlayers'));
      const playersData: Player[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() as Omit<Player, 'id'>
      }));
      setPlayers(playersData);
    } catch (error) {
      console.error('Error fetching players:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  return { players, loading, refetch: fetchPlayers };
};