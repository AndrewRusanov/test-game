import { Route, Routes } from 'react-router';
import './App.css';
import Start from './components/start/Start';
import Main from './components/main/Main';

function App() {
  return (
    <main className="page">
      <Routes>
        <Route index path="/" element={<Start />} />
        <Route path="main" element={<Main />} />
      </Routes>
    </main>
  );
}

export default App;
