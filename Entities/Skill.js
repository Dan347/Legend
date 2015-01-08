function Skill(name, attribute1, attribute2, value)
{
  "use strict";

  this.skill = new function() {
    var _attribute1;
    var _attribute2;
    var _name;
    var _value;
    Object.defineProperty(this, "Name", {
        get: function() {
            return _name;
        },
      set: function(value) {_name = value;},
        enumerable: true
    });

    Object.defineProperty(this, "Attribute1", {
        get: function() {
            return _attribute1;
        },
      set: function(value) {_attribute1 = value;},
        enumerable: true
    });

    Object.defineProperty(this, "Attribute2", {
        get: function() {
            return _attribute2;
        },
      set: function(value) { _attribute2 = value;},
        enumerable: true
    });

    Object.defineProperty(this, "Value", {
      get: function() {
        return _value;
      },
      set: function(value) { _value = value;},
      enumerable: true
    });

    return this;
  };

  this.skill.Name = name;
  this.skill.Attribute1 = attribute1;
  this.skill.Attribute2 = attribute2;
  this.skill.Value = value;
  return this.skill;
}
