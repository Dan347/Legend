/*
This builds a character object.
I need factories inside of here.
1. Build Character
2. Assign Skill
3. ????
4. Profit
*/


//first build attributes
//then build character
function CharacterBuilder(name, strength, dexterity, constitution, size, intelligence, power, charisma, advancedskillNames)
{
    "use strict";


    function buildCharacter(name, strength, dexterity, constitution, size, intelligence, power, charisma, advancedSkillNames)
    {
        var attributes = new Attributes(strength, dexterity, constitution, size, intelligence, power, charisma);
        var basicSkills = setBasicSkills(attributes);
        var advancedSkills = setAdvancedSkills(advancedSkillNames, attributes);
        var char = new Character(name, attributes, advancedSkills, basicSkills);

        return char;
    }

    function setBasicSkills(attributes) {
        var basicSkills = skillRepository().getBasicSkills().skillSet;
        skillSet.map(function (skill) {
            var value = attributes(skill.Attribute1) + attributes(skill.Attribute2) / 2;
            skill.Value += value;

            return skill;
        });
    }
    function buildAdvancedSkills(skillNames, attributes)
    {
      var advancedSkills = skillRepository().getAdvancedSkills().skillSet;
      skillSet.map(function(skill)
      {
        if(skillNames.indexOf(skill.Name) !== 0)
        {
          var value = attributes(skill.Attribute1) + attributes(skill.Attribute2) / 2;
          skill.Value += value;
          return skill;
        }
      });
    }

    return this;
}
