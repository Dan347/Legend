/**
 * Created by Doshea on 7/20/2014.
 */
//This is the base class of every character.
//this is also a POCO, a basic viewModel. Remember Dylan's instructions

"use strict";

function Character(name, str, dex, con, size, int, pow, cha)
{
    str = getAttributeOrDefault(str);
    dex = getAttributeOrDefault(dex);
    con = getAttributeOrDefault(con);
    size = getAttributeOrDefault(size);
    int = getAttributeOrDefault(int);
    pow = getAttributeOrDefault(pow);
    cha = getAttributeOrDefault(cha);
    var dedpow = 0;

    Object.defineProperty(this, "charName", {
       get: function() {
           return name;
       },
        enumerable: true,
        writable: false
    });

    Object.defineProperty(this, "Str", {
       get: function() {
           return str;
       },
       set: function(value){
           str = value;
       },
        enumerable: true
    });

    Object.defineProperty(this, "Dex", {
        get: function() {
            return dex;
        },
        set: function(value){
            dex = value;
        },
        enumerable: true
    });

    Object.defineProperty(this, "Con", {
        get: function() {
            return con;
        },
        set: function(value){
            con = value;
        },
        enumerable: true
    });

    Object.defineProperty(this, "Size", {
        get: function() {
            return size;
        },
        set: function(value){
            size = value;
        },
        enumerable: true
    });

    Object.defineProperty(this, "Int", {
        get: function() {
            return int;
        },
        set: function(value){
            int = value;
        },
        enumerable: true
    });

    Object.defineProperty(this, "Pow", {
        get: function() {
            return pow;
        },
        set: function(value){
            pow = value;
        },
        enumerable: true
    });

    Object.defineProperty(this, "DEDPOW", {
        get: function() {
            return 0;
        },
        set: function(value){
            dedpow = value;
        },
        enumerable: true
    });

    Object.defineProperty(this, "Cha", {
        get: function() {
            return cha;
        },
        set: function(value){
            cha = value;
        },
        enumerable: true
    });


    Object.defineProperty(this, "Actions", {
        get: function()
        {
            return getActions(Int, Dex);
        },

        enumerable: true,
        writable: false
});


    Object.defineProperty(this, "mp", {
        get: function()
        {
            return Pow;
        },
        enumerable: true,
        writable: false
    });

    Object.defineProperty(this, "enc", {
        get: function()
        {
            return Str + Size;
        },
        enumerable: true,
        writable: false
    });

    Object.defineProperty(this, "move", {
        get: function() {
            return 5;
        },
        enumerable: true,
        writable: false
    });

    Object.defineProperty(this, "HP", {
        get: function() {
            return getHp(Size, Con);
        },
        enumerable: true,
        writable: false
    });

    this.skills = []; //create separate skills objects. Populate this after skills objects are created
    this.equipment = [];

    //Damage Modifiers: use table, or dictionary, etc.. Use a setup method, then put one value here.
    //how heavily encumbered = new enum, since levels of encumberance

    Object.seal(this);
}

function getActions(int, dex)
{
    var actions = (int + dex) / 2;
    actions = Math.Floor(this.actions);
    if(actions < 1) { actions = 1; }
    return actions;
}

function getHp(size, con)
{
    //the rules allow for locations with HP values. I am not CURRENTLY doing that for this engine.
    return math.floor((size * con / 5)) * 8;
}

function getAttributeOrDefault(attribute)
{
    var defaultValue = 12;
    if(isNaN(attribute))
    {
        return defaultValue;
    }
    return attribute;
}



