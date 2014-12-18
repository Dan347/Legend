/**
 * Created by Doshea on 8/2/2014.
 * This is the base class of every skill.
 * this is also a POCO, a basic viewModel. Remember Dylan's instructions
 */

function Skill(name, attribute1, attribute2, value)
{
    "use strict";

    var _name = name;
    var _attribute1 = attribute1;
    var _attribute2 = attribute2;
    var _value = value;
    Object.defineProperty(this, "name", {
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

    Object.defineProperty(this, "value", {
       get: function() {
           return _value;
       }


    });

}
