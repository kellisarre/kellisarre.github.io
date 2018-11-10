/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals, name) {
    // param animals represents an Array of animals
    // param name represents a String, the name of an animal on which to perform search
    // loop through animals array
        // match animal's name property to name parameter
    for (let i = 0; i < animals.length; i++) {
        if (name.toLowerCase() === animals[i].name.toLowerCase()) {
            console.log(animals[i]);
            return animals[i];
        }
    }
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement) {
    // param animals is an array
    // param name is the animal's name to search for
    // param replacement is an object to replace the search-matched animal

    // loop through animals array
    for (let i = 0; i < animals.length; i++) {
        // if animal with that name exists within the animals array
        if (name.toLowerCase() === animals[i].name.toLowerCase()) {
            // replace its entire Object with the replacement object 
            animals.splice(i, 1, replacement);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) {
    // loop through animals array
    for (let i = 0; i < animals.length; i++) {
        // if animal with that name exists within the animals array
        if (name.toLowerCase() === animals[i].name.toLowerCase()) {
            // delete it 
            animals.splice(i, 1);
        }
    }        
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal) {
// takes an array of animals and an object representing a new animal
    // checks that the param animal Object has a name prop with a length > 0 && species prop with a length > 0
    // checks that the new animal has a UNIQUE name that doesn't already exist in the animals array
   
   // if user types something into the fields
    if (animal.name.length > 0 && animal.species.length > 0) {
        // loop to check to see if the name exists  
        for (let i = 0; i < animals.length; i++) {
            if (animal.name === animals[i].name) {
                console.log ("that animal exists");
                return;
            } 
        }
    animals.push(animal);
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
