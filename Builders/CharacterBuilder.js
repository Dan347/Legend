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
function CharacterBuilder() {

    "use strict";

    function buildCharacter(name, strength, dexterity, constitution, size, intelligence, power, charisma, advancedSkillSet, basicSkillSet, combatSkillSet) {

        var skillRepo = new SkillRepository();
        var attributes = new Attributes(strength, dexterity, constitution, size, intelligence, power, charisma);
        var basicSkills = setBasicSkills(attributes, skillRepo, basicSkillSet);
        var advancedSkills = setAdvancedSkills(attributes, advancedSkillSet, attributes, skillRepo);
        var combatSkills = setCombatSkills(skillRepo, attributes, combatSkillSet);
        return new Character(name, attributes, advancedSkills, basicSkills, combatSkills);
    }

    function setBasicSkills(attributes, skillRepo, basicSkillSet) {
        var basicSkills = skillRepo.getBasicSkills(attributes);

        //for each item in basicSkills: if it is in basicSkillSet, add the value to the skill.
        //Then: add attribute bonuses.
        basicSkills.map(function (x) {
            basicSkillSet.find(function (y) {
                if (y.name == x.name) {
                    x.value += y.value;
                }
            })
        });
        return basicSkills;
    }

    function getSkill(element, index, array) {

    }

    function setAdvancedSkills(attributes, advancedSkillSet) {
        //placeholder. I seriously doubt these will be used
        //Just replace with combat skills???
        return [];
    }

    function setCombatSkills(skillRepo, attributes, combatSkillSet) {
        var combatSkills = skillRepo.getCombatSkills(attributes);
        combatSkills.map(function (x) {
            combatSkillSet.find(function (y) {
                if (y.name == x.name) {
                    x.value += y.value;
                }
            });
        });
        //TODO
        //logic: for each skill in getCombatSkills
        // that matches combatSkillSet
        // combine states, and combatSkillValues.
        return combatSkills;
    }
}