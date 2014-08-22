/**
 * Created by Doshea on 8/18/2014.
 * skill POCO
 */
"use strict";

function AdvancedSkill(name, attribute1, attribute2, desc)
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

    Object.defineProperty(this, "desc", {
        get: function() {
            return desc
        },
        enumerable: true,
        writable: false
    });
}