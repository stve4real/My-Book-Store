function myFirstFunction(){
    console.log("my first world")
}
myFirstFunction();

var myArray =[["mike",4] ,["banana",5]];

  myArray.pop("mango")
  console.log(myArray);

  //local Scopes
  function myLocalScopes(){
    var myVar = 5;
    console.log(myVar)
  }
  myLocalScopes();

  //Global vs. Local Scopes In Functions 1:02
  /*var ourterWear = "T-Shit";                 

  function myOutfit(){
    var outerWear = "sweater";
    return outerWear;
  }
  console.log(outerWear());
  console.log(outerWear);*/

  //Return a Value From a Function With Return
  function minusSeven(num){
    return num -7;
  }
console.log(minusSeven(10));

function multiplyTen(num){
    return num * 10;
}
console.log(multiplyTen(5))

//understanding Undefined Value Returning from a Function
  var sum = 5;
  function addThree(){
    sum += 3
  }
  console.log(addThree);

  // Assignment with a Return Value
// it is simple to return a resign value to a variable
function change(num){
    return (num + 5)/3
}
 // changed = changed(10)

 //Stand in Line
  //A cue is an abstract data structure where items are kept in order
  function nextInline(arr, item){

    arr.shift(1)
    return item  

  }

  var testArr = [1,2,3,4,5];

  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInline(testArr,6));
  console.log("After: " + JSON.stringify(testArr));

  function moreInline(arr,items){
    arr.push(items)
     return arr;
  }

  var moreArr = [1,2,3,4,5];
  console.log(moreInline(moreArr, 6))

  //Booleans

  //IF STATEMENT IT IS USE TO MAKE DECISION IN CODE

  function ourTrueOrFalse(isItTrue){
    if (isItTrue) {
        return "Yes, it is true";
    }
    return "No, it is not";
  }

  function trueOrFalse(wasThatTrue){
    if ("thatWasTrue") {
        return "yes, that was true"
    }
    return "No, that was false"
  };

   console.log(trueOrFalse(true));
   
   //Assignment with a Return Value

   //Use Conditional Logic With If Statement
   //function myFirstLogic(){
   // if (myFirstLogicisTrue)
   //}

   //Comparison with the Equality Operator
   //set up;
   function testEqual(val){
     if (val == 12){
      return "Equal"
     }
    return " Not Equal"

   }

   console.log(testEqual(10))

   function testWeapon (val){
    if (val == '50'){
      return "yes weapon";
    }
    return "No weapon";
   }
   console.log(testWeapon(55))

   //Comparison with the strict Equality Operator
   /* 3 === 3
   3 === "3" */
  // the double equal sign attempt to convert both values being compared to a common type 
  function testStrict(val){
    if (val === 40 ) {
     return "true"
    } 
  return "Not True"
  }
  console.log(testStrict(40))

  //practice Comparing Different Values

  function compareValue(a,b){
    if (a == b){
      return "true"
    }
    return "not True"
  }
  console.log(compareValue(10, "10"));

  //Comparison with the Inequality

  function notEqualTo(val){
    if( val != 8) { 
      return "true"
    }
    return "not true"
  }
  console.log(notEqualTo(8))
  
  //Comparsion With the Strict Inequality Operator
    function notEqualTo(val){
    if( val !== 8) { 
      return "true"
    }
    return "not true"
  }
  console.log(notEqualTo(10))

  //Comparsion with the Logic And Opertor
    function testGreaterThan(val){
    if( val > 100 ) { 
      return "Over 100";
    }
    if (val > 10) { 
    return "Over 10";
    }
    return "10 or under"
  }
  console.log(testGreaterThan(10))

  //Comparison with the Geater Than or Equal to Operator
    function testGreaterorEqual(val){
    if( val >= 20) { 
      return "20 or Over"
    }
    if (val >= 10){ 
    return "10 or over"
    }
    return " 10 or over"
  }
  console.log(testGreaterorEqual(8))

  // Comparison with the Less Than Operator 
  function lessThanOperator(val){
    if (val < 20){
      return "  Under 20"
    }
    if (val < 55){
      return "Under 55";
    }
    return "55 or Over";
  }
  console.log(lessThanOperator(10));
  
  //
  function testLessOrEqual(val){
    if (val <= 12) {
      return "smaller Than or Equal to 12"
    }
    if (val <=24) {
      return "smaller Than or Equal to 24"
    }
    return "More than 24"
  }
  console.log(testLessOrEqual(20))

  //Cpmarison with the Logical And Operator
  //checking if the value is less than or equal to 50
  function testLogicalAnd(val){
    
    if(val <= 50 && val >= 25 ){
      
        return "Yes"
      
    }
    //only change code above this line
    return "No";
  }

  // Comparison with the Logical Or Operator
  // we are checking if the value is not between to and 20 
  function testLogicalOr(val){
    if (val <= 10 || val > 20){

      return "outside";
    }
    return "inside";
  } console.log(testLogicalOr(18))

  //else Statement 
  //if an if statement is true the block code right before it will be excecuted 
  function testElse(val){
    var result = "";
  
    if (val >5){
      result = "Bigger than 5";
    }else{
        result = "5 or Smaller"
      }
      return result;
    }
    console.log(testElse())

    //if you need multiple thing that need to be address you need and f staement
    function testElseif(val){
      if(val < 10) {
        return "less than 10";
      }else if(val < 5)  {
         return "less than 5";
    
      }else {
        return "Greater than or equal to 10";
      }
    };
    console.log(testElseif(5));
    //Logical Order in if Else Statement

    //Chaining If Else Statement
    // write if/else if statement to fulfil the following condition
    // num <5 - return "Tiny"
    //num < 10 - return "small"
    //num < 15 - return "Large"
    //num >= 20 - return " Huge"

    function tinyElse (num){
      if(num < 5) {
        return "Tiny"
      }else if( num <10){
        return "small"
      }else if(num < 15){
        return "Mediun"
      }else if( num < 20){
        return "Large"
      }else {
        return "Huge"
      }
    }
    console.log(tinyElse(4));

    // Boolean Values
   // function welcomeToBooleans(){
      //if(val === 5){
      //  return "this is true"
      //}else{  
       //return " this is false"
      //}  
    //}
    
  //console.log(welcomeToBoleans(4))
  //console.log(welcomeToBoleans(10))

  //Use Conditional Logic With If Statement
  function testLessThan(val){
    if (val < 25){
      return "Under 25"
    }else if (val < 55){
     return "Over 55"
    }
    return "55 or Over"
  }
  console.log(testLessThan(55))

  function useTheElseIf(val){
    val = 10;
    if ( val < 10){
      return " less than 10"
    }else if (val < 20){
      return "return greater than  10 "
    }else{
      return " 10 and 20"
    }

  }
  console.log(useTheElseIf(5))

  //Golf Code
  var names = ["Hold-in-one", "Eagle", "Birdie", " Bogey", "Double Bogey"]
   function golfScore(par, strokes){
    if (strokes == 1){
      return names [0];
    }else if(strokes <= par -2){ 
      return names[1];
    }else if(strokes == par-1){
      return names[2];
    }else if (strokes == par){
      return names[3];
    }else if(strokes == par + 1){
      return names [4]
    }else if(strokes == par + 2){
      return names[5];
    }else if( strokes >= + 3){
      return names[6];
    };
   };

   console.log(golfScore (5,4));

   //Switch Statement
   // A switch statement tests a value and can have many case statement
   //which define various possible values

    /*
    write a switch statement which tests val and sets answer for the following conditions
     1 - "alpha"
      2 - "beta"
     3 - "gamma"
     4 - "delta"
     */
   function caseInSwitch(val){
    var answer = "val";
    switch(val){
      case 1:
      answer = "alpha";
      break;
      case 2: 
      answer = "beta";
      break;
      case 3:
        answer = "gamma";
        case 4:
          answer = "delta";
          break;
    }
    return answer;
   }
   console.log(caseInSwitch(4))

   //Default Option in SWitch Statement
   // is like an if in else if statement

      function caseInSwitch(val){
    var answer = "";
    switch(val){
      case "a":
      answer = "alpha";
      break;
      case "b": 
      answer = "beta";
      break;
      case "c":
        answer = "gamma";
        case "d":
          answer = "delta";
          break;
          default:
            answer = "stuff";
            break;
    }
    return answer;
   }
   console.log(caseInSwitch("2"))

   //Multiple Identical Options in Switch Statement
   function switchOfStuff(val){
    var answer = "";
      switch(val){
       case "a":
        answer = "apple";
        break;
        case "b":
          answer = "bird";
          case "c":
            answer = "cat";
            break;
      };
    };
   //sequential sizes
   function sequentialSizes(val){
    var answer = "";
    switch (val){
     case 1:
      case 2:
        case 3:
          answer = "low";
          break;

           case 4:
      case 5:
        case 6:
          answer = "mid";
          break;

           case 7:
      case 8:
        case 9:
          answer = "high";
          break;
    }
    return answer;
   }
   console.log(sequentialSizes(9))

   //Replacing if else chains with switch
   function chainSwitch(val){
    var answer = "";

    if(val == "bob"){
      answer = "Maryley"
    }else if(val == 1){
      answer = "the answer"
    }
   }

   //turn to Switch Statement
   function chainSwitch(val){
    var answer = ""

    switch (val){ 
      case  "bob":
      answer = "Marley";
      break;
      case 24:
        answer = "The Answer";
        break;
        case 1:
        answer = "There is no #1";
        break;
        case 99:
          answer = "Missed me by this Much";
          break;

          case 7:
            answer ="Ate nine"
            break;

      }
      return answer;
    }
    console.log(chainSwitch(1))

    //Returning Boolean Values From Function

    //Returning  Early Pattern from Functions
    // you can return early function with a return statement
    function abTest(a,b){

     if (a < 0 || b < 0){
      return "undefined"
     }
       
      return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2 ));
    }
console.log(abTest(-2,2))

//counting  card
//creat  a black card counting function 

var count = 0;

function cc(card){
  switch(card){
    case 2:
      case3:
      case4:
      case5:
      case6:
      count ++;
      break;
      case 10:
      case "J":
        case "Q":
          case "A":
            case "K":
              count --;
              break;
    }
 var holdbet = 'Hold'
 if (count > 0){
  holdbet = 'bet'
 }
  return count + " " +  holdbet;
}

cc(2); cc('Q'); cc(10); cc('K'); cc('A');

//Build JavaScript Objects
var ourDog ={
  "name": "Camper",
  "legs" : 4,
  "tails": 1,
  "friends": ["everything!"]
};

var myDog = {
  "name": "Quincy",
   "tails": 1,
   "leg": 3,
   "friends": []
}

//Accessing Object Properties with Dot Notation
var testObj = {
  " my hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

//Accessing Object throught bracket Notation
var testObj = {
  "an entree": "ballcap",
  "my side": "veggies",
  "the drink": "water"
};

var hatValue = testObj[ "an entree"];
var shirtValue = testObj.shirt;

//Accessing Object properties Variable
var testObj = {
 12: "Namath",
 16: "Montana",
 19: "Unitas"
};

var playNumber = 16;
var player = testObj[playNumber];

//Updating object Properties
//we can use dot notation  to update properties

var myDog = {
  "name":  "copper",
  "legs": "4",
  "tails": "2",
    "freinds": ["everything!"]
}

myDog.name = " happer copper";

//Add New Properties to an Object using bracker
var myDog = {
  "name":  "copper",
  "legs": "4",
  "tails": "2",
    "freinds": ["everything!"]
}

myDog["bark"] = "woof"
//console.log(myDog);

//Delect Properties From an Object
var myDog = {
  "name":  "Camper",
  "legs": "4",
  "tails": "2",
    "freinds": ["everything!"],
    "bark": "bow-wow"
};
  delete myDog. bark;

  //console.log("myDog");

  //Using Objects of Lookups
  //Object can be thought of as a key value storage
  /*function phoneticLookup(val){
    var result = "";

    switch(val){
      case  "alpha":
      result = "Adams";
      break;

      case  "alpha":
      result = "Adams";
      break;

      case"bravo":
      result = "Boston";
      break;

      case"charlie":
      result = "Chicago";
      break;

      case "delta":
      result = "Denver";
      break;

      case "echo":
      result = "Easy";
      break;
      case  "foxtrot":
      result = "Frank";
      break;
    }
    result = lookup[val];
  }
  console.log(alpha(val))*/

  function phoneticlookup(val){
    var result = "";

    var lookup = {
      "alpha": "Adams",
      "charlie": "chicago",
      "delta": "Easy",
      "foxtrot" : "frank"   
     };
     result = lookup[val];
     return result;
  }

  console.log(phoneticlookup("charlie"));

  //Testing Object For Properties
  //you can check id an object has a property with the has own property method
   
  /*var myObj = {
 gift: "pony",
 pet: "kitten",
 bed: "slight"
  };

  function checkObj(checkProp){
 
   /* if (myObj.hasownproperty(checkprop)){
      return myObj[checkprop];
      }else{
        return "Not Found"
      }
  }
  console.log(checkObj("gift"));*/

  /*r myMusic ={
    "name": "Billy joel",
    "title": "piano man",
    "release_year": 1973,
    "formats": ["CD", "LP"]
  }
  myMusic.release_year =  "october 1947"
  console.log(myMusic.release_year);

  //delect properties from an objext
  var myMusic = {
    "name": "billy joel",
    "title": "piano man",
    "release_year": 1973,
    "formats": ["CD", "LP"]
  }
  delete myMusic.release_year[1973];
  console.log(myMusic.release_year);

  //using Objects for Lookups
  function phoneticlookup(val){
    var result = "";
  
  var mymusic={
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
  result = mymusic[val];
  return result;
}
console.log(phoneticlookup("bravo"));
 
var myStorage = {
  gift: "pony",
  pet: "kitten",
  bed: "slight"
}

function checkObj(checkProp){
  if (myStorage.hasownProperty(checkProp))
    return myStorage[checkProp];
  else
    return "Not Found";
}
console.log(checkObj("gift"));

//Manipulating Complex Objects
 var myMusic = [
  {
   
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year":1975,
    "formats":["cd", "8T", "LP"

    ],
    "gold": true
  }
   
  //Add a new record to the myMusic array
  ,{
    "artist": "Beau Carnes",
    "title": "Coding Music",
    "release_year": 2018,
    "formats": ["cd", "8T", "LP"],
    "gold": false
  }
 ]*/

 //Acessing Nested Objects
 var myStorage = {
  "car":{
    "inside": {
      "glove box": "map",
      "passenger seat":"crumbs"
    },
    "outside":{
      "trunk": "jack",
    }
    }
  }
   var gloveBoxContents = myStorage.car.inside["glove box"];
   console.log(gloveBoxContents);

   //aessing Nested Arrays
   var myPlants = [
     {
      type: "flowers",
      list:[
        "rose",
        "tulip",
        "dandeloion",
      ]
     },

     {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch",
      ]
     }
   ];
   var secondTree = myPlants[0].list[0];
   console.log(secondTree);

   //Record Collection
   var collection = {
    "2548":{
      "album":"slippery when wet",
      "artist": "Bon Jovi",
      "tracks":[
        "let it rock",
        "you give love a bad name"
      ]
    },
    "2468":{
      "album":"1999",
      "artist": "Prince",
      "tracks":[
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245":{
      "artist": "Robert Palmer",
      "tracks":[
        "Addictrd to love",
        "Sugar",

      ]
    },
    "5439":{
      "album": "ABBA Gold",
      "artist": "ABBA",
      "tracks":[
        "Take a Chance on Me",
        "Danceing Queen",
      ]
    }
   }

   var collectionCopy = JSON.parse(JSON.stringify(collection));

   function updateRecords(id,prop,value){
    if(value === ""){
      delete collection[id][prop];
    } else {
      collectionCopy[id][prop] = value;
    }
    return collection;
   }
   updateRecords(5439, "winner", "champion");
  console.log(updateRecords(5439, "artist", "ABBA"));

  //Iterate with JavaScripts While loops
  var myArray = [];
  var i = 0;
  while(i < 5){
    console.log(i);
    myArray.push(i);
    i++;
  }
  console.log(myArray);

  //Iterate with JavaScript for Loops
  var myArray = [];
  for (var i = 0; i < 5; i++){
    myArray.push(i);

  }
  console.log(myArray);

  
   var myArray = [];
   for( var i =0; i < 10;  i +=2){
     myArray.push(i);
   }
   console.log(myArray);

   //Iterate Odd Numbers with a For Loop
   var myArray = [];
    for (var i = 1; i < 10; i +=2){
      myArray.push(i);
    }
    console.log(myArray);

    //counting Backwards with a For loop
    var myArray = [];
    for (var i = 9; i > 0; i -=2){
      myArray.push(i);
    }
    console.log(myArray);

   // Iterate Throught an Array with  a for loop
    var ourArr = [9,10,8,7,6];
    var ourTotal = 0;
    for (var i = 0; i < ourArr.length; i++){
      ourTotal += ourArr[i];

    }
   console.log(ourTotal);

   //Nesting For Loops
    function multiplyAll(arr){
      var product = 1;

      for (var i =0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
          product *= arr[i][j];
        }
      }
      return product;

    }
    multiplyAll([[1,2],[3,4],[5,6]]);
    console.log(multiplyAll([[1,2,3],[4,5,6],[7,8,9]]))

    //Iterate with Do ... While Loops
    var myArray = [];
    var i = 10;
    do{
      myArray.push(i);
      i++;
    } while(i < 10);
    console.log(myArray);

    //profile lookup
    //coding challanges
    var contacts = [
      {
        "firstName": "Akira",
        "lastName" : "Laine",
        "number": "0543236543",
        "likes":[ "pizza", "coding", "brownie points"]

      },
      {
       "firstName": "Harry",
        "lastName" : "Potter",
        "number": "0994372684",
        "likes":[ "JavaScripts", "Gaming", "Hogwarts"]

      },
      {
        "firstName" : "Sherlock",
        "lastName" : "Holmes",
        "number": "0219374654",
        "likes":[ "detective work", "violin", "baking"]
      },
      {
        "firstName": "Kristain",
        "lastName" : "vos",
        "number": "0487345643",
        "likes":[ "piano", "magic", "brownie points"]
      },
    ]

    function lookUpProfile(name, prop){
      for (var i = 0; i < contacts.length; i++){
        if (contacts[i].firstName === name){
          return contacts[i][prop]|| "No such property";

        }
      }
      return "No such contact";
    }
    var data = lookUpProfile("Akira", "likes");
    console.log(data);
//generate random fraction
function randomFraction(){

}

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum(){

  return Math.floor(Math.random() * 10);
}
console.log(randomNumberBetween0and19);


var objSector ={
  "a" : 1,
  "b" :2,
  "c" :3
}

function checkObj(checkProp){
  if (objSector. hasOwnProperty(checkProp)){
    return objSector[checkProp];
  }
}

console.log(checkObj("c"));


var myArray = [];
for (var i =9; i > 1; i -=2){
  myArray.push(i);
}
console.log(myArray);

var myForLoop =[];
 total = 0;
 for (var i =0; i < 10; i++){
  total += i;
  myForLoop.push(total);
 }
 console.log(myForLoop);

 //Generate Random Whole Number JavaScript

 /*function ourRandomRange(ourMin, ourMax){
  returnMath.floor(Math.random() * (ourMax - ourMin + 1) + ourMin);

 }
 ourRandomRange(1,9);
 console.log(ourRandomRange(1,9));*/

 function randomRange(myMin, myMax){
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
 }
 var myRandom = randomRange(5,15);
 console.log(myRandom);

 //parseint functions
 function convertToInteger(str){
  return parseInt(str);
 }
 console.log(convertToInteger("10"));

//use the parseInt Functon with a Radix
function convertToInteger(str){
  return parseInt(str, 2);
}
console.log(convertToInteger("10011"));

//Use The Conditional (Ternary) Operator
function checkEqual(a,b){
  return a === b ? true : false;

}
console.log(checkEqual(1,2));

// Use Multiples Conditional (Ternary) Operators
function checkSign(num){
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";

}
console.log(checkSign(-5));

// Differences Between the var and Let Keywords
var  catName = "Quincy";
var quote;

catName = "Beau";

function catTalk(){
  "use strict";

  catName = "Beau";
  quote = catName + "says Meow!";

}
console.log(catTalk());

//compare Scopes of the var and let Keywords
function checkScope(){
  "use strict";
  let i = "function scope";
  if (true){
    let i = "block scope";
    console.log("block scope: " + i);
  }
  console.log("function scope: " + i);
  return i;
}
console.log(checkScope());

//Declear  Read-only Variables with the const Keyword
function printManyTimes(str){
  "use strict";
  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i +=2){
    console.log(SENTENCE);
  }
}
 printManyTimes("freeCodeCamo")

 //Mutate an Array declared with const
 const s = [5,7,2];
 function editInPlaces(){
  "use strict";
  s[0] = 2;
  s[1] = 1;
  s[2] = 3;
 }
 editInPlaces();
 console.log(s);

 //prevent Object Mutation
 /*function freezeObj(){
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);

  try{
  MATH_CONSTANTS.PI = 99;
 }
 catch(ex){
  console.log(ex);
 }
 return MATH_CONSTANTS.PI;
 }
  const PI = freezeObj();

//console.log(PI);

//Use Arrow Function to Wrote Concise Anonymous Functions
//const magic = () => new Date();

//Write Arrow Function With Parameters
const myConcat = (arr1, arr2) => arr1.myConcat(arr2);
console.log(myConcat([1,2],[3,4,5,6]));


//wirte Higher Order Arrow Function
//const higherOrder = () =>

  //mutate and Array declear with const
  const arr = [1,2,3,4,5];*/
  

    /*function checkSign(num){
      return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
    }
  console.log(checkSign(10))

  function checkScope(){
    "use strict";
    let i = "function scope"
    if (true){
      let i = "block scope"
     console.log("Block scope i is:  ", i)

    }
  }

  //Declear a Read-Only Variable with the const Keyword
   /*function  printManyTimes(str){
   "use strict"
    const SENTENCE = str + "is cool";
      
    //SENTENCE = str + " is amazing"

    for( let  i = 0; i < str.length; i+=2){
      console.log(SENTENCE);
    }
   }
   printManyTimes("freecodecamp")*/
   
   //Using arrow function to write a conscise function
    const magic = () =>  new Date();
   
   //Write arrow Function with parameter
// you can pass argument to arrow function
   const myPath = (arr1,arr2) => arr1.concat(arr1,arr2);
   console.log(myPath([1,2],[3,4]))

   //Writing Higher arrow Function 
   //Arrow function works best Higher Function
//maps,filters and reduce

/*const realNumberArray = [4,5.6,-9.8, 3.14, 42, 6, 8.34, -12];
 
  const squareList =(arr) => {
    const squareIntegers = arr.filter(num => Number.isInteger(num) &&  num > 0).map(x => x * x);
      return squareIntegers;
  };

  const squaredIntegers = squareList(realNumberArray);

  const increment = (function(){
    return function increment (numnber,value = 1){
      return number + value;
    };
  })();
  console.log(increment(7,9));
  console.log(increment(5));*/

  //using the rest operator
  /*const sum = (function() {
      return function sum (...args){ 
      return args.reduce((a,b) => a + b + 0);
      };
  })();
  console.log(sum(1,2,3));*/


  //using the Spread Operator to Evaluate Arrays In-Place
  const arr1 = ["JAN", "FRB", " MAR", "APR", "MAY"];
   let arr2;
   (function(){
    arr2 = [...arr1];
    arr1[0] = 'potato'
   })();
   console.log(arr2);

   //using Destructive Assignment to Assign Vaiables from Obj
   const AVG_TEMPERATURE = {
    today: 77.5,
    tomorrow: 79
   };

   function getTempOfTmrw(avgTemperature){
     "use strict";

     const { tomorrow : tempOfTomorrow} = avgTemperature;

     return tempOfTomorrow;
   }
   console.log(getTempOfTmrw(AVG_TEMPERATURE))

   //Destructing Assignment with Nested Object


   //we con use destructive assignment to assin variable from array
   const [x, y, ,e] = [1,2,3,4,5,6];
   console.log(x, y ,e)

   let a = 8, b = 6;
   (() => {
    "use strict"
    [b,a] = [a,b]
   })()
  console.log(a);
  console.log(b);

  //Use Destructing Assignment With the Rest Operator
  // we cna use destructing assignment eith the rest operator to reassign array element
  const source = [1,2,3,4,5,6,7,8,9,10];
  function removeFirstTwo(list){
     const [, , ...arr] = list
     return arr;
  }

  const arr = removeFirstTwo(source)
  console.log(arr);
  console.log(source)

  //Using Destructive Assignment to Pass an Object as a Function Parameters

  //Create String Using Tapmlate Literals-- are special type of string that makes creating complex strings easier
  const person = {
    name: "mayowa harbrus",
    age: 56
  };

  const greeting = `Hello, my name is ${person.name} an i am ${person.age}years old` 
   //console.log(greeting);

   const createPerson = ({name,age,gender}) =>{
    return {
      name: "steven",
      age: 45,
      gender: "female"
    }
   }
   console.log(createPerson("name", "age", "male"))

   //write concise Declaration Function

   //Use class syntax to Define a constructor Function

   //use getters and setters to control Access to an object
   // with the class object you often want to obtain values from the object


   //Write Concise Object Literal Declearation Using Simple Fields
   // object can contain  a FUNCTION

   //the rest operator 
   function sum(discount, ...prices){
      const total = prices.reduce((a,b) => a + b,0);
       return total * (1 - discount);
   }
 //console.log(sum(0.1,30,50));
   
 //Default Parameter
 function intrest (principal, rate = 3.5, years = 5){
  return principal * rate / 100 * years;
 }
  console.log(intrest(1000,5,8));


  //getter & setters
  const persons  = {
    firstName: "Mary",
    lastName:"Hamadani",
     get fullName(){
       return `${persons.firstName} ${persons.lastName}`
    },

  /*  set fullName(value) {
      const parts = value.split(' ');
      this.firstName = parts[0];
      this.lastName = parts[1]
    }*/

  };
//  persons.fullName = 'john Smith';

  //console.log(persons);

 function start(){
    for (let i = 0; i < 10; i++);{
      if(true){
        let color = "red";
      }

    };
  console.log(color);
 }

  const  video = {
    title:"a",
    play() {
      console.log(this);
    },
  }
  video.stop = function(){
    console.log(this)
  },
   function playVideo (){
    console.log(this)
   }
  PlayVideo();

  //Exercise
  
   