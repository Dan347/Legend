/**
 * Created by Doshea on 7/20/2014.
 */
//This is the base class of every character.
//this is also a POCO, a basic viewModel. Remember Dylan's instructions

"use strict";

function Character(name, attributes)
{
    var dedpow = 0;
    var stats = attributes;
    var advancedSkills = [];
    var basicSkills = [];
    Object.defineProperty(this, "charName", {
       get: function() {
           return name;
       },
        enumerable: true,
        writable: false
    });

    Object.defineProperty(this, "Stats", {
       get: function() {
           return att;
       },
       set: function(value){
           att = value;
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



    Object.defineProperty(this, "Actions", {
        get: function()
        {
            return getActions(this.Stats.int, this.Stats.dex);
        },

        enumerable: true,
        writable: false
});


    Object.defineProperty(this, "mp", {
        get: function()
        {
            return this.Stats.pow;
        },
        enumerable: true,
        writable: false
    });

    Object.defineProperty(this, "enc", {
        get: function()
        {
            return this.Stats.str + this.Stats.size;
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
            return getHp(this.Stats.Size, this.Stats.Con);
        },
        enumerable: true,
        writable: false
    });

  Object.defineProperty(this, "AdvancedSkills", {
  get function() {
    return advancedSkills[];
  },
        enumerable: true,
        writable: false
  });

  Object.defineProperty(this, "BasicSkills", {
  get function() {
        return basicSkills[];
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





