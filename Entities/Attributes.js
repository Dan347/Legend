/**
 * Created by Doshea on 8/24/2014.
 */
//this is a POCO, a basic viewModel, for attributes

"use strict";

function Attributes(strength, dexterity, constitution, size, intelligence, power, charisma) {
    Object.defineProperty(this, "str", {
        get: function () {
            return getAttributeOrDefault(strength);
        },
        enumerable: true,
        writable: false
    });

    Object.defineProperty(this, "dex", {
        get: function () {
            return getAttributeOrDefault(dexterity);
        },
        enumerable: true,
        writable: false
    });

    Object.defineProperty(this, "con", {
        get: function () {
            return getAttributeOrDefault(constitution);
        },
        enumerable: true,
        writable: false
    });

    Object.defineProperty(this, "siz", {
        get: function () {
            return getAttributeOrDefault(size);
        },
        enumerable: true,
        writable: false
    });

    Object.defineProperty(this, "int", {
        get: function () {
            return getAttributeOrDefault(intelligence);
        },
        enumerable: true,
        writable: false
    });

    Object.defineProperty(this, "pow", {
        get: function () {
            return getAttributeOrDefault(power);
        },
        enumerable: true,
        writable: false
    });

    Object.defineProperty(this, "cha", {
        get: function () {
            return getAttributeOrDefault(charisma);
        },
        enumerable: true,
        writable: false
    });

    return this;


    function getAttributeOrDefault(attribute) {
        var defaultValue = 12;
        if (isNaN(attribute)) {
            return defaultValue;
        }
        return attribute;
    }
}
