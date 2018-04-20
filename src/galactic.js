export class Birthdate {
  constructor(age) {
    this.age = age;
  }
  secondsAge(age){
    let yearSeconds = (age * 31536000);
    return yearSeconds;
  }
  ageMecury(age){
    let mecuryAge = (Math.floor(age/0.24));
    return mecuryAge;
  }
  ageVenus(age){
    let venusAge = (Math.floor(age/0.62));
    return venusAge;
  }
  ageMars(age){
    let marsAge = (Math.floor(age/1.88));
    return marsAge;
  }
  ageJupiter(age){
    let jupiterAge = (Math.floor(age/11.86));
    return jupiterAge;
  }
  differenDate(current, random){
    let currentTime = new Date(current).getTime();
    let randomDate = new Date(random).getTime();
    let diffDate = (currentTime - randomDate);
    return diffDate;
  }
  expectancyMan(age){
    let manAge = (78);
    return manAge;
  }
  expectancyWoman(age){
    let womanAge = (81);
    return womanAge;
  }
  lifeMan(age){
    let leftoverMan = (78 - age);
    return leftoverMan;
  }
  lifeWoman(age){
    let leftoverWoman = (81 - age);
    return leftoverWoman;
  }
}
