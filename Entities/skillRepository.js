/**
 * Created by Doshea on 8/18/2014.
 */
function Skills() {
    "use strict";
    Object.defineProperty(this, "basicSkills", {
        get: function () {
            return getBasicSkills;
        },
        enumerable: true
    });

    Object.defineProperty(this, "advancedSkills",
        {
            get: function () {
                return getAdvancedSkills;
            },
            enumerable: true
        });

    function getBasicSkills() {
        var skillSet = [];

        skillSet.add(new Skill("Athletics", "STR", "DEX"));
        skillSet.add(new Skill("Brawn", "STR", "SIZ"));
        skillSet.add(new Skill("Common Magic", "POW", "CHA"));
        skillSet.add(new Skill("Culture", "INT", "INT"));
        skillSet.add(new Skill("Dance", "DEX", "CHA"));
        skillSet.add(new Skill("Drive", "DEX", "POW"));
        skillSet.add(new Skill("Evade", "DEX", "DEX"));
        skillSet.add(new Skill("Evaluate", "INT", "CHA"));
        skillSet.add(new Skill("First Aid", "DEX", "INT"));
        skillSet.add(new Skill("Influence", "CHA", "CHA"));
        skillSet.add(new Skill("Insight", "INT", "POW"));
        skillSet.add(new Skill("Lore", "INT", "INT"));
        skillSet.add(new Skill("Perception", "INT", "POW"));
        skillSet.add(new Skill("Persistence", "POW", "POW"));
        skillSet.add(new Skill("Resilience", "CON", "CON"));
        skillSet.add(new Skill("Ride", "DEX", "POW"));
        skillSet.add(new Skill("Sing", "POW", "CHA"));
        skillSet.add(new Skill("Sleight", "DEX", "CHA"));
        skillSet.add(new Skill("Stealth", "DEX", "INT"));
        skillSet.add(new Skill("Swim", "STR", "CON"));
        skillSet.add(new Skill("Unarmed", "STR", "DEX"));

        return skillSet;
    }

    function getAdvancedSkills() {
        var advancedSkillSet = [];

        advancedSkillSet.add(new AdvancedSkill("Acrobatics", "STR", "DEX"));
        advancedSkillSet.add(new AdvancedSkill("Art", "POW", "CHA"));
        advancedSkillSet.add(new AdvancedSkill("Boating", "STR", "CON"));
        advancedSkillSet.add(new AdvancedSkill("Commerce", "INT", "CHA"));
        advancedSkillSet.add(new AdvancedSkill("Courtesy", "INT", "CHA"));
        advancedSkillSet.add(new AdvancedSkill("Craft", "DEX", "INT")); //multiples of this guy...good thing this repo is general!
        advancedSkillSet.add(new AdvancedSkill("Culture", "INT", "INT")); //this one has multiples too...choose specific culture!
        advancedSkillSet.add(new AdvancedSkill("Disguise", "INT", "CHA"));
        advancedSkillSet.add(new AdvancedSkill("Engineering", "INT", "INT"));
        advancedSkillSet.add(new AdvancedSkill("Gambling", "INT", "POW"));
        advancedSkillSet.add(new AdvancedSkill("Healing", "INT", "POW"));
        advancedSkillSet.add(new AdvancedSkill("Language", "INT", "CHA"));
        advancedSkillSet.add(new AdvancedSkill("Lore", "INT", "INT"));
        advancedSkillSet.add(new AdvancedSkill("Mechanisms", "DEX", "INT"));
        advancedSkillSet.add(new AdvancedSkill("Meditation", "POW", "POW"));
        advancedSkillSet.add(new AdvancedSkill("Oratory", "POW", "CHA"));
        advancedSkillSet.add(new AdvancedSkill("Play Instrument", "DEX", "CHA"));
        advancedSkillSet.add(new AdvancedSkill("Seduction", "INT", "CHA"));
        advancedSkillSet.add(new AdvancedSkill("Shiphandling", "INT", "CON"));
        advancedSkillSet.add(new AdvancedSkill("Streetwise", "POW", "CHA"));
        advancedSkillSet.add(new AdvancedSkill("Survival", "POW", "CON"));
        advancedSkillSet.add(new AdvancedSkill("Teaching", "INT", "CHA"));
        advancedSkillSet.add(new AdvancedSkill("Track", "INT", "CON"));
        advancedSkillSet.add(new AdvancedSkill("Lore", "INT", "POW", "THEOLOGY"));
        advancedSkillSet.add(new AdvancedSkill("Pact", "CHA", "DEDPOW"));
        advancedSkillSet.add(new AdvancedSkill("Sorcery", "INT", "INT"));
        advancedSkillSet.add(new AdvancedSkill("Manipulation", "INT", "POW"));

        return advancedSkillSet;

    }
}