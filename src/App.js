import React, {useState} from 'react';
import './App.css';

import Header from './components/Header';
import ListDogs from './components/ListDogs';
import FormDogs from './components/FormDogs';

function App() {
  const [selectedBreed, setSelectedBreed] = useState("");

  return (
    <>
      <Header/>
      <main className="main flex flex-column align-center">
        <FormDogs setSelectedBreed={setSelectedBreed}/>
        <ListDogs selectedBreed={selectedBreed} />
      </main>
    </>
  );
}

export default App;
