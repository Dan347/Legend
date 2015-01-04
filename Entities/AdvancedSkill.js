/**
 * Created by Doshea on 8/18/2014.
 * skill POCO
 */
"use strict";

function AdvancedSkill(name, attribute1, attribute2, desc)
{

  var _name = name;
  var _attribute1 = attribute1;
  var _attribute2 = attribute2;
  var _desc = desc;
    Object.defineProperty(this, "Name", {
        get: function() {
            return _name;
        },
        enumerable: true,
        writable: false
    });

    Object.defineProperty(this, "Attribute1", {
        get: function() {
            return _attribute1;
        },
        enumerable: true,
        writable: false
    });

    Object.defineProperty(this, "Attribute2", {
        get: function() {
            return _attribute2;
        },
        enumerable: true,
        writable: false
    });

    Object.defineProperty(this, "Desc", {
        get: function() {
            return _desc
        },
        enumerable: true,
        writable: false
    });

    return this;
}
