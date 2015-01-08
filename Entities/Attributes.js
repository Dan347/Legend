/**
 * Created by Doshea on 8/24/2014.
 */
//this is a POCO, a basic viewModel, for attributes

"use strict";

function Attributes(strength, dexterity, constitution, size, intelligence, power, charisma) {

    var attribute = new Object();

    attribute.defineProperty(this, "str", {
        get: function () {
            return getAttributeOrDefault(strength);
        },
        enumerable: true,
        writable: false
    });

    attribute.defineProperty(this, "dex", {
        get: function () {
            return getAttributeOrDefault(dexterity);
        },
        enumerable: true,
        writable: false
    });

    attribute.defineProperty(this, "con", {
        get: function () {
            return getAttributeOrDefault(constitution);
        },
        enumerable: true,
        writable: false
    });

    attribute.defineProperty(this, "siz", {
        get: function () {
            return getAttributeOrDefault(size);
        },
        enumerable: true,
        writable: false
    });

    attribute.defineProperty(this, "int", {
        get: function () {
            return getAttributeOrDefault(intelligence);
        },
        enumerable: true,
        writable: false
    });

    attribute.defineProperty(this, "pow", {
        get: function () {
            return getAttributeOrDefault(power);
        },
        enumerable: true,
        writable: false
    });

    attribute.defineProperty(this, "cha", {
        get: function () {
            return getAttributeOrDefault(charisma);
        },
        enumerable: true,
        writable: false
    });

    return attribute;


    function getAttributeOrDefault(attribute) {
        var defaultValue = 12;
        if (isNaN(attribute)) {
            return defaultValue;
        }
        return attribute;
    }
}
