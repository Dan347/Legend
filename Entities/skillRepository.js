/**
 * Created by Doshea on 8/18/2014.
 */

function Skills()
{
    "use Strict";

    Object.defineProperty(this, "basicSkills", {
        get: function() {
            return getBasicSkills;
        },
        enumerable: true
    });

    Object.defineProperty(this, "advancedSkills",
        {
            get: function() {
                return getAdvancedSkills;
            },
            enumerable: true
        });
}


function skillRepository() {

    "use Strict";

    function getBasicSkills() {
        var skillSet = [];

        skillSet.add(new Skill("Athletics", "Str", "Dex"));
        skillSet.add(new Skill("Brawn", "Str", "Siz"));
        skillSet.add(new Skill("Common Magic", "Pow", "Cha"));
        skillSet.add(new Skill("Culture", "Int", "Int"));
        skillSet.add(new Skill("Dance", "Dex", "Cha"));
        skillSet.add(new Skill("Drive", "Dex", "Pow"));
        skillSet.add(new Skill("Evade", "Dex", "Dex"));
        skillSet.add(new Skill("Evaluate", "Int", "Cha"));
        skillSet.add(new Skill("First Aid", "Dex", "Int"));
        skillSet.add(new Skill("Influence", "Cha", "Cha"));
        skillSet.add(new Skill("Insight", "Int", "Pow"));
        skillSet.add(new Skill("Lore", "Int", "Int"));
        skillSet.add(new Skill("Perception", "Int", "Pow"));
        skillSet.add(new Skill("Persistence", "Pow", "Pow"));
        skillSet.add(new Skill("Resilience", "Con", "Con"));
        skillSet.add(new Skill("Ride", "Dex", "Pow"));
        skillSet.add(new Skill("Sing", "Pow", "Cha"));
        skillSet.add(new Skill("Sleight", "Dex", "Cha"));
        skillSet.add(new Skill("Stealth", "Dex", "Int"));
        skillSet.add(new Skill("Swim", "Str", "Con"));
        skillSet.add(new Skill("Unarmed", "Str", "Dex"));

        return skillSet;
    }

    function getAdvancedSkills() {
        var advancedSkillSet = [];

        advancedSkillSet.add(new AdvancedSkill("Acrobatics", "Str", "Dex"));
        advancedSkillSet.add(new AdvancedSkill("Art", "Pow", "Cha"));
        advancedSkillSet.add(new AdvancedSkill("Boating", "Str", "Con"));
        advancedSkillSet.add(new AdvancedSkill("Commerce", "Int", "Cha"));
        advancedSkillSet.add(new AdvancedSkill("Courtesy", "Int", "Cha"));
        advancedSkillSet.add(new AdvancedSkill("Craft", "Dex", "Int"));
        advancedSkillSet.add(new AdvancedSkill("Culture", "Int", "Int"));
        advancedSkillSet.add(new AdvancedSkill("Disguise", "Int", "Cha"));
        advancedSkillSet.add(new AdvancedSkill("Engineering", "Int", "Int"));
        advancedSkillSet.add(new AdvancedSkill("Gambling", "Int", "Pow"));
        advancedSkillSet.add(new AdvancedSkill("Healing", "Int", "Pow"));
        advancedSkillSet.add(new AdvancedSkill("Language", "Int", "Cha"));
        advancedSkillSet.add(new AdvancedSkill("Lore", "Int", "Int"));
        advancedSkillSet.add(new AdvancedSkill("MeChanisms", "Dex", "Int"));
        advancedSkillSet.add(new AdvancedSkill("Meditation", "Pow", "Pow"));
        advancedSkillSet.add(new AdvancedSkill("Oratory", "Pow", "Cha"));
        advancedSkillSet.add(new AdvancedSkill("Play InStrument", "Dex", "Cha"));
        advancedSkillSet.add(new AdvancedSkill("Seduction", "Int", "Cha"));
        advancedSkillSet.add(new AdvancedSkill("Shiphandling", "Int", "Con"));
        advancedSkillSet.add(new AdvancedSkill("Streetwise", "Pow", "Cha"));
        advancedSkillSet.add(new AdvancedSkill("Survival", "Pow", "Con"));
        advancedSkillSet.add(new AdvancedSkill("Teaching", "Int", "Cha"));
        advancedSkillSet.add(new AdvancedSkill("Track", "Int", "Con"));
        advancedSkillSet.add(new AdvancedSkill("Lore", "Int", "Pow", "THEOLOGY"));
        advancedSkillSet.add(new AdvancedSkill("Pact", "Cha", "DedPow"));
        advancedSkillSet.add(new AdvancedSkill("Sorcery", "Int", "Int"));
        advancedSkillSet.add(new AdvancedSkill("Manipulation", "Int", "Pow"));

        return advancedSkillSet;

    }

    return this;
}
