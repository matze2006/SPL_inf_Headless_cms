import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'

type Person = {
  id: number;
  firstname: string;
  lastname: string;
};

function App() {
  const [person, setPerson] = useState<Person[]>([]);

  useEffect(() => {
    fetch("https://fakerapi.it/api/v2/persons?_quantity=10").then(
      (res) => res.json().then(data => {
        setPerson(data.data);
      })
    );
  }, []);

  return (
    <>
     <div className="bg-blue-300 min-h-screen pb-15">
      <h1 className="text-4xl font-bold text-right p-4 mb-8 text-white">HTL Dornbirn 5bWi</h1>

      <div className="grid sm:gap-x-5 md:gap-x-10 lg:gap-x-15 sm:gap-y-5 md:gap-y-7.5 lg:gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-30">
        {person.map((p) => (
          <Card
            key={p.id}
            person={p}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default App
