import { Route, Routes } from 'react-router';
import './App.css';
import Start from './components/start/Start';
import Main from './components/main/Main';
import Create from './components/create/Create';
import { useState } from 'react';

function App() {
  const [characterName, setCharacterName] = useState('');
  const [characterDescription, setCharacterDescription] = useState('');

  const setInputValues = data => {
    setCharacterName(data.inputName);
    setCharacterDescription(data.inputAbout);
  };

  return (
    <main className="page">
      <Routes>
        <Route index path="/" element={<Start />} />
        <Route
          path="create"
          element={
            <Create
              setValues={data => {
                setInputValues(data);
              }}
            />
          }
        />
        <Route
          path="main"
          element={
            <Main
              name={characterName}
              setName={() => {
                setCharacterName();
              }}
              about={characterDescription}
              setAbout={() => {
                setCharacterDescription();
              }}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
