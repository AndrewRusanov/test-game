import styles from './Main.module.css';
import Header from '../header/Header';
import Activities from '../activities/Activities';
import Character from '../../utils/Character';

const Main = ({ name, setName, about, setAbout }) => {
  // Вот тут будет функционал всего)))

  const character = new Character(name, about, {
    strength: 0,
    intelligence: 0,
    agility: 0,
    charisma: 0
  });

  return (
    <div className={styles.mainWrapper}>
      <Header
        name={name}
        setName={setName}
        about={about}
        setAbout={setAbout}
        character={character}
      />
      <Activities character={character} />
    </div>
  );
};

export default Main;
