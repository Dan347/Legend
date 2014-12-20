/**
 * Created by Doshea on 8/2/2014.
 * This is the base class of every skill.
 * this is also a POCO, a basic viewModel. Remember Dylan's instructions
 */


"use strict";

function Skill(name, attribute1, attribute2)
{
    Object.defineProperty(this, "name", {
        get: function() {
            return name;
        },
        enumerable: true,
        writable: false
    });

    Object.defineProperty(this, "attribute1", {
        get: function() {
            return attribute1;
        },
        enumerable: true,
        writable: false
    });

    Object.defineProperty(this, "attribute2", {
        get: function() {
            return attribute2;
        },
        enumerable: true,
        writable: false
    });

    return this;
}
