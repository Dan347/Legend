/*
This builds a character object.
I need factories inside of here.
1. Build Character
2. Assign Skill
3. ????
4. Profit
*/
"use strict";


//first build attributes
//then build character
function CharacterBuilder()
{
  return this;

}



function buildCharacter(name, strength, dexterity, constitution, size, intelligence, power, charisma, advancedSkills, basicSkills)
{
  var attributes = new Attributes(strength, dexterity, constitution, size, intelligence, power, charisma);
  var basicSkills = setBasicSkills(attributes);
  var advancedSkills = setAdvancedSkills(advancedSkillNames, attributes)
  var char = new Character(name, attributes, advancedSkills, basicSkills);

  return char;
}

function setBasicSkills(attributes)
{
}

function buildAdvancedSkills(character, attributes)
{

}
