import styles from './Main.module.css';
import Header from '../header/Header';
import Activities from '../activities/Activities';

const Main = ({ name, setName, about, setAbout }) => {
  return (
    <div className={styles.mainWrapper}>
      <Header name={name} setName={setName} about={about} setAbout={setAbout} />
      <Activities />
    </div>
  );
};

export default Main;
