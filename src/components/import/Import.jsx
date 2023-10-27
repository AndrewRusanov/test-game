import { useNavigate } from 'react-router-dom';
import styles from './Import.module.css';

const Import = ({ setValues, setParams, setSkills }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.importWrapper}>
      <div className={styles.popupContainer}>
        <h1 className={styles.importTitle}>Загрузите персонажа</h1>
        <h2 className={styles.importSubtitle}>
          Персонажа можно загрузить из файла в формате .json
        </h2>
        <label className={styles.importBtnLink} htmlFor="startCharacterLoader">
          Загрузить персонажа
        </label>
        <input
          className={styles.importInput}
          type="file"
          id="startCharacterLoader"
          name="startCharacterLoader"
          onChange={event => {
            event.preventDefault();
            const file = event.target.files[0];
            let reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function () {
              let character = JSON.parse(reader.result);
              setValues({
                inputName: character.name,
                inputAbout: character.about
              });
              setParams({
                strength: character.parametres.strength,
                agility: character.parametres.agility,
                intelligence: character.parametres.intelligence,
                charisma: character.parametres.charisma,
                vitality: character.parametres.vitality,
                evasion: character.parametres.evasion,
                vigor: character.parametres.vigor
              });
              setSkills({
                attack: character.skills.attack,
                archery: character.skills.archery,
                stealth: character.skills.stealth,
                learning: character.skills.learning,
                survival: character.skills.survival,
                medicine: character.skills.medicine,
                intimidation: character.skills.intimidation,
                insight: character.skills.insight,
                appearance: character.skills.appearance,
                manipulation: character.skills.manipulation
              });
              navigate('/main');
            };

            reader.onerror = function () {
              console.log(reader.error);
            };
          }}
        />
      </div>
    </div>
  );
};

export default Import;
