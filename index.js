//Function #1: Array Slice
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
modifiedFood = (start,end) =>{
    foods.slice(start,end)
    console.log(foods);
}

//Function #2: Array Splice
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
modifiedFood = () =>{
 foods.splice(2,0,"noodels","icecream")
 console.log(foods);
}

//Function #3: Filter
const numberArray = [12,324,213,4,2,3,45,4234];
numberArray.filter(isEven);
numberArray.filter(isPrime);
function isEven(number){
    return number/2==0;
    console.log(numberArray);
}
function isPrime(number){
    for(i=2;i<number;i++)
    return number/i!=0;
}
//Function #4: Reject
function nonPrime(number){
    for(i=2;i<number;i++)
    return number/i==0;
}
//Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
const newArr = myArray.map(findSquareOfNumbers =(num) =>{return num*num;});

//or
// function findSquareOfNumbers(num) {
//   return num * num;
// }

//Function #7: Reduce
const myArray = [2, 3, 5, 10];
myArray.reduce(multiply = (total,num) => {return total*num});
