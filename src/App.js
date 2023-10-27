import { Route, Routes } from 'react-router';
import './App.css';
import Start from './components/start/Start';
import Main from './components/main/Main';
import Create from './components/create/Create';
import { useState } from 'react';
import { parametrs } from './utils/constants.js';
import { skills } from './utils/constants.js';
import Import from './components/import/Import';

function App() {
  const [characterName, setCharacterName] = useState('');
  const [characterDescription, setCharacterDescription] = useState('');
  const [paramsState, setParamsState] = useState(parametrs);
  const [skillsState, setSkillsState] = useState(skills);

  const setInputValues = data => {
    setCharacterName(data.inputName);
    setCharacterDescription(data.inputAbout);
  };

  return (
    <main className="page">
      <Routes>
        <Route index path="/" element={<Start />} />
        <Route
          path="import"
          element={
            <Import
              setValues={data => {
                setInputValues(data);
              }}
              setParams={setParamsState}
              setSkills={setSkillsState}
            />
          }
        />
        <Route
          path="create"
          element={
            <Create
              setValues={data => {
                setInputValues(data);
              }}
              params={paramsState}
              setParams={setParamsState}
            />
          }
        />
        <Route
          path="main"
          element={
            <Main
              name={characterName}
              about={characterDescription}
              setValues={data => {
                setInputValues(data);
              }}
              params={paramsState}
              setParams={setParamsState}
              skills={skillsState}
              setSkills={setSkillsState}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
