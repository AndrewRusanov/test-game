export default class Character {
  constructor(name, about, { strength, intelligence, agility, charisma }) {
    this.name = name;
    this.about = about;
    this.strength = strength; //сила
    this.agility = agility; //ловкость
    this.intelligence = intelligence; //интеллектэнергичность
    this.charisma = charisma; //харизма
    this.vitality = this.strength + 3; //жизненная сила
    this.evasion = this.agility + 10; //уклонениеэнергичность
    this.vigor = this.agility + this.intelligence; //энергичность

    this.skills = {
      attack: 0,
      archery: 0,
      stealth: 0,
      learning: 0,
      survival: 0,
      medicine: 0,
      intimidation: 0,
      insight: 0,
      appearance: 0,
      manipulation: 0
    };
  }

  setCharacter(name, { strength, intelligence, agility, charisma }, skills) {
    this.name = name;
    this.strength = strength;
    this.intelligence = intelligence;
    this.agility = agility;
    this.charisma = charisma;
    this.skills = { ...skills };
  }

  setName(name) {
    this.name = name;
  }

  setStrength(strength) {
    this.strength = strength;
  }

  setAgility(agility) {
    this.agility = agility;
  }

  setIntelligence(intelligence) {
    this.intelligence = intelligence;
  }

  setCharisma(charisma) {
    this.charisma = charisma;
  }

  kick() {
    if (this.vitality) {
      this.vitality = this.vitality - 1;
    }
  }

  trainAttack() {
    if (this.skills.attack < this.strength) {
      this.skills.attack = this.skills.attack + 1;
    }
  }

  trainStealth() {
    if (this.skills.stealth < this.agility) {
      this.skills.stealth++;
    }
  }

  trainArchery() {
    if (this.skills.archery < this.agility) {
      this.skills.archery++;
    }
  }

  trainLearning() {
    if (this.skills.learning < this.intelligence) {
      this.skills.learning++;
    }
  }

  trainSurvival() {
    if (this.skills.survival < this.intelligence) {
      this.skills.survival++;
    }
  }

  trainMedicine() {
    if (this.skills.medicine < this.intelligence) {
      this.skills.medicine++;
    }
  }

  trainIntimidation() {
    if (this.skills.intimidation < this.charisma) {
      this.skills.intimidation++;
    }
  }

  trainInsight() {
    if (this.skills.insight < this.charisma) {
      this.skills.insight++;
    }
  }

  trainAppearance() {
    if (this.skills.appearance < this.charisma) {
      this.skills.appearance++;
    }
  }

  trainManipulation() {
    if (this.skills.manipulation < this.charisma) {
      this.skills.manipulation++;
    }
  }
}
