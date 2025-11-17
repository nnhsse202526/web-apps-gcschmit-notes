"use strict"; // enable modern Javascript modifications

/**********************************************************
 * Objects
 **********************************************************/

/**
 * Object construction
 *  objects can be constructed in a few ways
 *  properties can be added to objects after construction
 */

// create an empty object with object constructor syntax
let journalEntry = new Object();

// create an empty object with object literal syntax
journalEntry = {};

// create an object with properties (key-value pairs) in JSON format
//  objects may contain methods
journalEntry = {
  date: "2025-11-17",
  competency: "Adaptability",
  content:
    "I'm very familiar with Java, but I'm approaching Javascript " +
    "with an open mind.",
};

console.log(journalEntry);
console.log(typeof journalEntry);

/**
 * Accessing properties
 *  use the dot notation, like in Java
 * non-existent properties return undefined
 */
console.log(journalEntry.date);
console.log(journalEntry.studentName);

// properties can be added to objects after construction
journalEntry.studentName = "Schmit";
console.log(journalEntry.studentName);

/**
 * Object reference
 *  variables of type Object have a value that is a reference to the object,
 *    like in Java
 *  copying an object reference is not the same as copying the object,
 *    like in Java
 *  can use Object.assign and structuredClone to clone objects
 */
const newJournalEntry = journalEntry;
newJournalEntry.date = "2024-11-19";
console.log(journalEntry.date); // 2024-11-19
