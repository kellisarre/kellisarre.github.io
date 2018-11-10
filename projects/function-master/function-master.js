//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    let arr = [];
    //return Object.values(object);
    for (var key in object) {
        arr.push(object[key]);
    }
    return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    let arr = [];
    for (var key in object) {
        arr.push(key);
    }
    //console.log(arr);
    return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let arr = [];
    for (var key in object) {
        if (typeof object[key] === "string") {
            arr.push(object[key]);
        }
    }
    //console.log(arr);
    return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return "array";
    } else {
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1, string.length);
}
//console.log(capitalizeWord("blegh"));

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // this container splits the string arg into an array
    let arr = string.split(" ")
    //console.log(arr);
    
    let arr2 = [];
    
    // this loop will capitalize the first letter and then write the word to arr2
    for (let i = 0; i < arr.length; i++) {
        arr2.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1, arr[i].length));
    }
    
    //console.log(arr2);
    // Returns a string with all the words, capitalized
    return arr2.join(" ");
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return "Welcome " + object.name.charAt(0).toUpperCase() + object.name.slice(1) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return object.name.charAt(0).toUpperCase() + object.name.slice(1) 
    + " is a " 
    + object.species.charAt(0).toUpperCase() + object.species.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* Should take an object, if this object has a noises array return them 
as a string separated by a space, if there are no noises return 'there 
are no noises */

function maybeNoises(object) {
    let msg = "there are no noises";
    if (!object.noises) {return msg;}
    if (object.noises.length > 0) {
        return object.noises.join(" ");
    } else {
        return msg; 
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    let arr = string.split(" ")
    //console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (word === arr[i]) {
            return true;
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* Should take a name and an object and add the name to the object's 
friends array then return the object */

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* Should take a name and an object and return true if <name> is a friend 
of <object> and false otherwise */

function isFriend(name, object) {
    // look for the friend, return true if found
    if (object.friends) {
        for (let i = 0; i < object.friends.length; i++) {
            if (name === object.friends[i]) {
                return true;
            }
        }
    }
    // return false if friend isn't found
    return false;   
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* Should take a name and a list of people, and return a list of all the
names that <name> is not friends with */

function nonFriends(name, array) {
    var notFriends = [];
    for (let i = 0; i < array.length; i++) {
       if (!isFriend(name, array[i]) && name !== array[i].name){
           notFriends.push(array[i].name);
       }
    }
    return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* Should take an object, a key and a value. Should update the property 
<key> on <object> with new <value>. If <key> does not exist on <object>
create it. */

function updateObject(object, key, value) {
        object[key] = value;
        return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* Should take an object and an array of strings. Should remove 
any properties on <object> that are listed in <array> */

function removeProperties(object, array) {
    // loop through array. if object.hasOwnProperty(array[i]), delete it.
    for(let i = 0; i < array.length; i++) {
        if (object.hasOwnProperty(array[i])) {
            delete object[array[i]];
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* Should take an array and return an array with all the duplicates 
removed */

function dedup(array) {
    let seen = [];
    //console.log(array);
    /* if seen array does not include the current <array> index, push 
    value into seen array. if the current <array> index exists already in
    seen, it proceeds to next index. */
    for (let i = 0; i < array.length; i++) {
        if (!seen.includes(array[i])) {
            seen.push(array[i]);
        }
    }
    //console.log(seen);
    return seen;

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}