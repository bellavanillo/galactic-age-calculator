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
  // lifeExpectancy(age){
  //   let yearsLeftMan = (age/78 * 78);
  //   let yearsLeftWoman = (age/81 *81);
  //   if ("#gender" === "man") {
  //     return yearsLeftMan;
  //   } else if ("#gender" === "woman") {
  //     return yearsLeftWoman;
  //   }
  // }
}
