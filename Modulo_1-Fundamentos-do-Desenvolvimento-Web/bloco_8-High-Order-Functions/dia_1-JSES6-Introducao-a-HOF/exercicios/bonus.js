const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

function randomIntNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const dragonStg = dragon['strength'];

const dragonDmg = (dmgMax) => randomIntNum(15, dmgMax);

const warriorStg = warrior['strength'];
const warriorWeapongDmg = warrior['weaponDmg'];

const warriorDmg = (dmgMin, dmgMax) => randomIntNum(dmgMin, dmgMax);

let mageActualMana = mage['mana'];
const mageInt = mage['intelligence'];

const mageDmgAndMana = () => {

  if (mageActualMana < 15) { return 'Não possui mana suficiente' }
  const mageInfo = {
    turnDmg: randomIntNum(mageInt, mageInt * 2),
    manaUsed: 15,
  };
  return mageInfo;
}

console.log(mageDmgAndMana());