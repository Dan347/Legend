/**
 * Created by Doshea on 8/24/2014.
 */
//this is a POCO, a basic viewModel, for attributes

"use strict";

function Attribute(strength, dexterity, constitution, size, intelligence, power, charisma) {


  this.attribute = new function() {

    var _str;
    var _dex;
    var _con;
    var _siz;
    var _int;
    var _pow;
    var _cha;

    Object.defineProperty(this, "Str", {
        get: function () {
            return _str;
        },
      set: function(value) {_str = getAttributeOrDefault(value);},
        enumerable: true
    });

    Object.defineProperty(this, "Dex", {
        get: function () {
            return _dex;
        },
      set:function(value) {_dex = getAttributeOrDefault(value);},
        enumerable: true
    });

    Object.defineProperty(this, "Con", {
        get: function () {
            return _con;
        },
      set:function(value) {_con = getAttributeOrDefault(value);},
        enumerable: true
    });

    Object.defineProperty(this, "Siz", {
        get: function () {
            return _siz;
        },
      set:function(value) {_siz = getAttributeOrDefault(value);},
        enumerable: true
    });

    Object.defineProperty(this, "Int", {
        get: function () {
            return _int;
        },
      set:function(value) {_int = getAttributeOrDefault(value);},
        enumerable: true
    });

    Object.defineProperty(this, "Pow", {
        get: function () {
            return _pow;
        },
      set: function(value) {_pow = getAttributeOrDefault(value);},
        enumerable: true
    });

    Object.defineProperty(this, "Cha", {
        get: function () {
            return _cha;
        },
      set: function(value) {_cha = getAttributeOrDefault(value);},
        enumerable: true
    });

    function getAttributeOrDefault(attribute) {
        var defaultValue = 12;
        if (isNaN(attribute)) {
            return defaultValue;
        }
    }

    return this;
  }

  this.attribute.Str = strength;
  this.attribute.Dex = dexterity;
  this.attribute.Con = constitution;
  this.attribute.Int = intelligence;
  this.attribute.Siz = size;
  this.attribute.Pow = power;
  this.attribute.Cha = charisma;

  return this.attribute;
}
