// for (i = 0; i <10;i++){
//     console.log(i)
// }

// for (i = 9; i > -1;  i--){
//     console.log(i)
// }

// let favouriteDrinks = ["vimto", "water", "coke"];

// console.log (favouriteDrinks[0]);
// console.log (favouriteDrinks[1]);
// console.log (favouriteDrinks[2]);



// let favMovies = ["City of god", 
// "State property", 
// "audition", 
// "old boy", 
// "hard boiled"];
// favMovies.unshift("The Raid");
// favMovies.unshift("ongbak")

// for (filmIndex = 0; filmIndex<favMovies.length; filmIndex++){
//     console.log (favMovies[filmIndex])
// }

// const filmCheck = () =>{
//     if (filmIndex [2] != "ghostbusters"){
//     console.log ("boo, we want ghostbusters");
// }
// else {
//     console.log ("yay, we want ghostbusters")
// }
// }
// filmCheck()

let number = 50;
let currentNumber = 1;
while (currentNumber != number){
    console.log(currentNumber);
    currentNumber = (Math.floor(Math.random()*50)+1);
}
console.log(currentNumber);