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



function buildCharacter(name, attributes, advancedSkills, basicSkills)
{
  var basicSkills = setBasicSkills(attributes);
  var advancedSkills = setAdvancedSkills(advancedSkillNames, attributes)
  var char = new Character(name, attributes, advancedSkills, basicSkills);


}

function buildCharacterAndAttributes(name, strength, dexterity, constitution, size, intelligence, power, charisma)
{

}

function setBasicSkills(attributes)
{
}

function buildAdvancedSkills(character, attributes)
{

}
