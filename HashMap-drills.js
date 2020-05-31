const { HashMap } = require("./HashMap");

HashMap.MAX_LOAD_RATIO = 0.5;
HashMap.SIZE_RATIO = 3;

function main() {
  const lotr = new HashMap();

  const data = [
    { Hobbit: "Bilbo" },
    { Hobbit: "Frodo" },
    { Wizard: "Gandalf" },
    { Human: "Aragorn" },
    { Elf: "Legolas" },
    { Maiar: "The Necromancer" },
    { Maiar: "Sauron" },
    { RingBearer: "Gollum" },
    { LadyOfLight: "Galadriel" },
    { HalfElven: "Arwen" },
    { Ent: "Treebeard" }
  ];

  data.forEach(obj => {
    const key = Object.keys(obj)[0];
    lotr.set(key, obj[key]);
  });

  console.log(lotr);

  console.log("Maiar = ", lotr.get("Maiar")); // Sauron
  console.log("Hobbit = ", lotr.get("Hobbit")); // Frodo

  console.log(lotr._capacity); // 24,  Since we have gone over the max capacity, it began to multiply by our size ratio which is how we got 24.
}

// main()

// 2. WhatDoesThisDo
// DO NOT run the following code before solving the problem.

// What is the output of the following code? explain your answer.

const WhatDoesThisDo = function() {
  let str1 = "Hello World.";
  let str2 = "Hello World.";
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};

// since there are keys that are taking place of others, it will cause a collision.

// 3. Demonstrate understanding of Hash maps
// *You don't need to write code for the following two drills. use any drawing app or simple pen and paper *

// 1) Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of length 11
// using open addressing and a hash function k mod m, where k is the key and m is the length.

// 2) Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash
// map with collisions resolved by separate chaining. Let the hash table have a length m = 9, and let the hash
//  function be k mod m.

// will ask mentor for clarification on these

function removeDuplicates(str) {
  const map = new Map();
  let newStr = "";

  str.split("").forEach(letter => {
    if (!map.has(letter)) {
      map.set(letter, "");
      newStr += letter;
    }
  });
  return newStr;
}

// console.log(removeDuplicates("google"));
// console.log(removeDuplicates("google all that you think can think of"));

const palindrome = string => {
  const result = new Map();

  for (let i = 0; i < string.length; i++){
    if(!result.delete(string[i])) {
      result.set(string[i], 1);
    }
  }
  if (result.size <= 1) {
    return true;
  } 
  else {
    return false;
  }
}

// console.log(palindrome('acecarr'));
// console.log(palindrome('north'));

// 6. Anagram grouping
// Write an algorithm to group a list of words into anagrams. For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].

// 7. Separate Chaining
// Write another hash map implementation as above, but use separate chaining as the collision resolution mechanism.

// Test your hash map with the same values from the lotr hash map.

// will consult with mentor for last two problems 