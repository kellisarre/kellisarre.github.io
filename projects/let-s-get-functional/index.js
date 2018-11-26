// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-kellisarre');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    return _.filter(array, function(customer) {
        return customer.gender === 'male';
    }).length;
};

var femaleCount = function(array) {
    return _.reduce(array, function(seed, customer, i){
        if(customer["gender"] === "female"){
            // increment female count
            seed++;
        }
        return seed;
    }, 0);
    // return _.reduce(array, function(count, customer, i) {
    //     // count = 0;
    //     // if (customer[i].gender === 'female') {
    //     //     return count++;}
    //     return 4;
    // }, 0);
};

var oldestCustomer = function(array) {
    // creates an array, sorts it oldest to youngest
    let sortedAges = array.sort(function(young, old){
        // returns the descending order, ordered oldest to youngest
        return old.age - young.age;
    })
    // return the first index at sortedAges array
    return sortedAges[0].name;
};

var youngestCustomer = function(array) {
    // creates an array, sorts it
    let sortedAges = array.sort(function(young, old){
        // returns the ascending order, ordered youngest to oldest
        return old.age - young.age;
    })
    // return the first index at sortedAges array
    return sortedAges[array.length - 1].name;
};

var averageBalance = function(customers) {
    // collect the balances into an array
    let stringBalances = _.map(customers, (customerObject) => {
        return customerObject.balance;
    })
    
    // removing useless characters from the string and converting to number
    let balances = _.map(stringBalances, (stringBalance) => {
        // remove $ and , character
        let noDollaSign = stringBalance.replace("$", "");
        let noComma = noDollaSign.replace(",", "");
        return parseFloat(noComma);
    });
    
    // reduce balances to an average balance of all customers
    return balances.reduce(function(total, currentCustomer, i){  //console.log(total);
        return total += currentCustomer;
  }) / customers.length;
};

// Find out how many customer's names begin with a given letter
var firstLetterCount = function(customers, letter) {
    // collect customer names into array
    let customerNames = _.map(customers, (customer) => {
        return customer.name;
    });
    
    // filter the array according to if first letter of element is <letter>
    return _.filter(customerNames, (name, i) => {
        return name[0].toLowerCase() === letter.toLowerCase() ? true : false;
    }).length
    // ^ return the number of names that meet the criteria
}

// find how many friends of given customer have a name that starts with <letter>
var friendFirstLetterCount = function(customers, customer, letter) {
    let friendNamesWithLetter = [];
    // get to the friends array of the <customer>, access their friends
    for(let i = 0; i < customers.length; i++) {
        // if the current customer's name is equal to <customer> argument, loop over their friends
        if (customers[i].name === customer) {
            // console.log(customers[i].friends);  
            let custFriends = customers[i].friends;
            // compare the first letter of every friends' name to the <letter> arg
            _.each(custFriends, (value, i) => {
                let thisFriendName = custFriends[i].name
                // if the first letter of the name is <letter>, push it into array <friendNamesWithLetter>
                if (thisFriendName.charAt(0) === letter.toUpperCase()) {
                    friendNamesWithLetter.push(thisFriendName);
                 }
            })
        }
    }
    
    // return the length of <friendNamesWithLetter> for the number of customers
    return friendNamesWithLetter.length;
}    

var friendsCount = function(customers, friendNameToFind) {
    let hasTheFriend = [];
    // for every customer object in data file, access friends
        // see if the friend is in the customer's friends array
            // if true, push the customer's name into the array
    
    // each to iterate over customer objects in data 
    _.each(customers, (customer) => {
        _.each(customer.friends, (friend) => {
            if (friend.name === friendNameToFind) {
                hasTheFriend.push(customer.name);
            }
        });
    });
    
    return hasTheFriend;
    
    
    // _.filter(customers, (customer, i, customers) => {
    //     // if friend is in customer's friends array
    //     if (friendNameToFind === customer.friends){
            
    //     }
    // });
}

var topThreeTags = function(customers) {
    // collect all of the tags into an array
    let allTheTags = _.pluck(customers, "tags");
    let allTheTagsInOneArray = [];
    _.each(allTheTags, (currentArray, i, allTheTags) => {
        // loop through currentArray
        _.each(currentArray, (currentArrayElement, i, currentArray) => {
            // this loops inside each subArray
            // let's turn all the subArrays into one giant array
            allTheTagsInOneArray.push(currentArrayElement);
        })
    });
    
    let appearanceCounter = {};
    
    _.each(allTheTagsInOneArray, function(tag, i, allTheTagsInOneArray) {
        // create an object that keeps track of each time a value occurs in the superArray.
        // if the element isn't inside of appearanceCounter, add it with a value of 1
        if (!appearanceCounter[tag]) {
            appearanceCounter[tag] = 1;
        } else { 
            appearanceCounter[tag]++ 
        }
    });
    //console.log(appearanceCounter);
    
    // then look for keys with highest number of occurances
    let topThree = [];
    // loop over appearanceCounter, populate array up to topThree.length === 3
    
    // whittle appearanceCounter down to the props with highest number
    /* function to find highest number stored at keys */ 
    let highestNum = 0;
    let findHighestNum = _.each(appearanceCounter, (num, tag, appearanceCounter) => {
        if (num > highestNum) {highestNum++;}
    });
    //console.log (highestNum);
    
    for (var tag in appearanceCounter) {
        if (appearanceCounter[tag] === highestNum) {
            topThree.push(tag);
        }
    }
    
    return _.first(topThree, 3);
    
}

var genderCount = function(array) {
// use reduce to make a factory object that has a counter for each time the prop appears
    
    return _.reduce(array, (seedGenderCounter, customer, i) => {
        //console.log(customer.gender + " " + customer.name);
        if (customer.gender === "male") {seedGenderCounter.male++}
        else if (customer.gender === "female") {seedGenderCounter.female++}
        else if (customer.gender === "transgender") {seedGenderCounter.transgender++}
        return seedGenderCounter;
    }, {
        female: 0,
        male: 0,
        transgender: 0
    });
    
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
