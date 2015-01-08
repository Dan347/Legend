/**
 * Created by Doshea on 7/20/2014.
 */
//This is the base class of every character.
//this is also a POCO, a basic viewModel. Remember Dylan's instructions

function Character(name, attributes) {
    "use strict";

    var _dedpow = 0;
    var _stats = attributes;
    var _advancedSkills = [];
    var _basicSkills = [];

    var character = new Object();
    character.defineProperty(this, "charName", {
        get: function () {
            return name;
        },
        enumerable: true,
        writable: false
    });

    character.defineProperty(this, "Stats", {
        get: function () {
            return _stats;
        },
        set: function (value) {
            _stats = value;
        },
        enumerable: true
    });

    character.defineProperty(this, "DEDPOW", {
        get: function () {
            return 0;
        },
        set: function (value) {
            _dedpow = value;
        },
        enumerable: true
    });


    character.defineProperty(this, "Actions", {
        get: function () {
            return getActions(_stats.int, _stats.dex);
        },

        enumerable: true,
        writable: false
    });


    character.defineProperty(this, "mp", {
        get: function () {
            return _stats.pow;
        },
        enumerable: true,
        writable: false
    });

    character.defineProperty(this, "enc", {
        get: function () {
            return _stats.str + _stats.size;
        },
        enumerable: true,
        writable: false
    });

    character.defineProperty(this, "move", {
        get: function () {
            return 5;
        },
        enumerable: true,
        writable: false
    });

    character.defineProperty(this, "HP", {
        get: function () {
            return getHp(_stats.Size, _stats.Con);
        },
        enumerable: true,
        writable: false
    });

    character.defineProperty(this, "AdvancedSkills", {
        get function () {
            return _advancedSkills;
        },
        enumerable: true,
        writable: false
    });

    character.defineProperty(this, "BasicSkills", {
        get function () {
            return _basicSkills;
        },
        enumerable: true,
        writable: false
    });

    character.equipment = [];

    //Damage Modifiers: use table, or dictionary, etc.. Use a setup method, then put one value here.
    //how heavily encumbered = new enum, since levels of encumberance

    function getActions(int, dex) {
        var actions = (int + dex) / 2;
        actions = Math.Floor(actions);
        if (actions < 1) {
            actions = 1;
        }
        return actions;
    }

    function getHp(size, con) {
        //the rules allow for locations with HP values. I am not CURRENTLY doing that for this engine.
        return math.floor((size * con / 5)) * 8;
    }

    Object.seal(character);

    return character;
}
