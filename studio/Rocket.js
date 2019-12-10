"use strict";
exports.__esModule = true;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        //returns the sum of all items using each item's massKg property
        var sum = 0;
        for (var i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        //uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        var combinedMass;
        combinedMass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return combinedMass;
    };
    Rocket.prototype.canAdd = function (item) {
        //returns true if this.currentMassKg() + item.masskg <= this.totalCapacityKg
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        //uses this.canAdd() to see if another item can be added. if true, adds cargo to this.cargoItems and returns true. If false, returns false.
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        //uses this.canAdd() to see if another astronaut can be added. If true, adds astronaut to this.astronauts and returns true. If false, returns false. 
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
