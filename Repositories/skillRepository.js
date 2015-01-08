/**
 * Created by Doshea on 8/18/2014.
 */

function getBasicSkills() {
        this.skillSet = [];

        this.skillSet.add(new Skill("Athletics", "Str", "Dex"));
        this.skillSet.add(new Skill("Brawn", "Str", "Siz"));
        this.skillSet.add(new Skill("Common Magic", "Pow", "Cha"));
        this.skillSet.add(new Skill("Culture", "Int", "Int"));
        this.skillSet.add(new Skill("Dance", "Dex", "Cha"));
        this.skillSet.add(new Skill("Drive", "Dex", "Pow"));
        this.skillSet.add(new Skill("Evade", "Dex", "Dex"));
        this.skillSet.add(new Skill("Evaluate", "Int", "Cha"));
        this.skillSet.add(new Skill("First Aid", "Dex", "Int"));
        this.skillSet.add(new Skill("Influence", "Cha", "Cha"));
        this.skillSet.add(new Skill("Insight", "Int", "Pow"));
        this.skillSet.add(new Skill("Lore", "Int", "Int"));
        this.skillSet.add(new Skill("Perception", "Int", "Pow"));
        this.skillSet.add(new Skill("Persistence", "Pow", "Pow"));
        this.skillSet.add(new Skill("Resilience", "Con", "Con"));
        this.skillSet.add(new Skill("Ride", "Dex", "Pow"));
        this.skillSet.add(new Skill("Sing", "Pow", "Cha"));
        this.skillSet.add(new Skill("Sleight", "Dex", "Cha"));
        this.skillSet.add(new Skill("Stealth", "Dex", "Int"));
        this.skillSet.add(new Skill("Swim", "Str", "Con"));
        this.skillSet.add(new Skill("Unarmed", "Str", "Dex"));

        return this;
    }

function skillRepository() {

    "use Strict";




    function getAdvancedSkills() {
        this.advancedSkillSet = [];

        this.advancedSkillSet.add(new AdvancedSkill("Acrobatics", "Str", "Dex"));
        this.advancedSkillSet.add(new AdvancedSkill("Art", "Pow", "Cha"));
        this.advancedSkillSet.add(new AdvancedSkill("Boating", "Str", "Con"));
        this.advancedSkillSet.add(new AdvancedSkill("Commerce", "Int", "Cha"));
        this.advancedSkillSet.add(new AdvancedSkill("Courtesy", "Int", "Cha"));
        this.advancedSkillSet.add(new AdvancedSkill("Craft", "Dex", "Int"));
        this.advancedSkillSet.add(new AdvancedSkill("Culture", "Int", "Int"));
        this.advancedSkillSet.add(new AdvancedSkill("Disguise", "Int", "Cha"));
        this.advancedSkillSet.add(new AdvancedSkill("Engineering", "Int", "Int"));
        this.advancedSkillSet.add(new AdvancedSkill("Gambling", "Int", "Pow"));
        this.advancedSkillSet.add(new AdvancedSkill("Healing", "Int", "Pow"));
        this.advancedSkillSet.add(new AdvancedSkill("Language", "Int", "Cha"));
        this.advancedSkillSet.add(new AdvancedSkill("Lore", "Int", "Int"));
        this.advancedSkillSet.add(new AdvancedSkill("MeChanisms", "Dex", "Int"));
        this.advancedSkillSet.add(new AdvancedSkill("Meditation", "Pow", "Pow"));
        this.advancedSkillSet.add(new AdvancedSkill("Oratory", "Pow", "Cha"));
        this.advancedSkillSet.add(new AdvancedSkill("Play InStrument", "Dex", "Cha"));
        this.advancedSkillSet.add(new AdvancedSkill("Seduction", "Int", "Cha"));
        this.advancedSkillSet.add(new AdvancedSkill("Shiphandling", "Int", "Con"));
        this.advancedSkillSet.add(new AdvancedSkill("Streetwise", "Pow", "Cha"));
        this.advancedSkillSet.add(new AdvancedSkill("Survival", "Pow", "Con"));
        this.advancedSkillSet.add(new AdvancedSkill("Teaching", "Int", "Cha"));
        this.advancedSkillSet.add(new AdvancedSkill("Track", "Int", "Con"));
        this.advancedSkillSet.add(new AdvancedSkill("Lore", "Int", "Pow", "THEOLOGY"));
        this.advancedSkillSet.add(new AdvancedSkill("Pact", "Cha", "DedPow"));
        this.advancedSkillSet.add(new AdvancedSkill("Sorcery", "Int", "Int"));
        this.advancedSkillSet.add(new AdvancedSkill("Manipulation", "Int", "Pow"));

        return this;

    }
  this.getBasicSkills = getBasicSkills();
  this.getAdvancedSkills = getAdvancedSkills();

    return this;
}

function Skills()
{
    "use Strict";

  var skillRepo = new skillRepository();
   var getBasicSkills = skillRepo.getBasicSkills();
   var getAdvancedSkills = skillRepo.getAdvancedSkills();

  return this;
}



var skills = new skillRepository().getBasicSkills();
//var basicSkills = skills.getBasicSkills();
//var something = skills.getBasicSkills();
