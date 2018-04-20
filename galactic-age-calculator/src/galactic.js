export class Birthdate {
  constructor () {
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
    let jupiterAge = (Math.floor(age/1.88));
    return jupiterAge;
  }
}
