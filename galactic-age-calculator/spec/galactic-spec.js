import { Birthdate } from './../src/galactic.js';

describe('Birthdate'), function(){
  it('should calculate the age of someone into seconds', function(){
    let birthdate = new Birthdate();
    expect(Birthdate.secondsAge(10)).toEqual(315360000);
  });

};
