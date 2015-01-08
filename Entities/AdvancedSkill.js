/**
 * Created by Doshea on 8/18/2014.
 * skill POCO
 */
"use strict";

function AdvancedSkill(name, attribute1, attribute2, desc)
{

  var advancedSkill = new Object();

 /* var _name = name;
  var _attribute1 = attribute1;
  var _attribute2 = attribute2;
  var _desc = desc;
*/
    advancedSkill.defineProperty(this, "Name", {
        get: function() {
            return name;
        },
        enumerable: true,
        writable: false
    });

    advancedSkill.defineProperty(this, "Attribute1", {
        get: function() {
            return attribute1;
        },
        enumerable: true,
        writable: false
    });

    advancedSkill.defineProperty(this, "Attribute2", {
        get: function() {
            return attribute2;
        },
        enumerable: true,
        writable: false
    });

    advancedSkill.defineProperty(this, "Desc", {
        get: function() {
            return desc
        },
        enumerable: true,
        writable: false
    });

    return advancedSkill;
}
