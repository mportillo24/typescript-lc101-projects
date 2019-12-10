import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[]): number {
        //returns the sum of all items using each item's massKg property
        let sum: number = 0;
        for(let i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    }
    currentMassKg(): number {
        //uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        let combinedMass: number;
        combinedMass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return combinedMass;
    }
    canAdd(item: Payload): boolean {
        //returns true if this.currentMassKg() + item.masskg <= this.totalCapacityKg
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
    }
    addCargo(cargo: Cargo) {
        //uses this.canAdd() to see if another item can be added. if true, adds cargo to this.cargoItems and returns true. If false, returns false.
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut) {
        //uses this.canAdd() to see if another astronaut can be added. If true, adds astronaut to this.astronauts and returns true. If false, returns false. 
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}