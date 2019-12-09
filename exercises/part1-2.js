// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Add the 5 variables here
var spaceCraftName = 'Determination';
var speedMPH = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Code part 2 here:
var milesToMars = (kilometersToMars * milesPerKilometer);
var hoursToMars = (milesToMars / speedMPH);
var daysToMars = (hoursToMars / 24);
console.log(spaceCraftName + " will take " + daysToMars + " to reach Mars.");
// Code the output statement here (use a template literal):
