let person = {
    firstName: 'Chandler',
    lastName:  'Bong' ,
    age :       34
}
// console.log(person.firstName)

let meal = {
    appetizer: 'chips & salsa',
    entree:    'all pastor burrito',
    dessert:    'churros',
    drink:     'Dr. Pepper',
}

const {dessert} = meal

//console.log(dessert)

const {appetizer, entree} = meal 

//console.log(appetizer)
//console.log( entree)

const {drink:bestSodaEver} = meal

//console.log(bestSodaEver)

//const myAppetizer = meal.appetizer
//const myEntree = meal.entree
//const myDessert = meal.dessert
//const myDrink = meal.drink

const{appetizer: myAppetizer, entree: myEntree, dessert: myDessert, drink: myDrink}
=meal

//console.log (bestSodaEver)
//console.log (myDrink)

//for (key in person){
 //   console.log(key)
//}

//for (key in person){
 //   console.log(person[key])
//}

person.job ="Statistical Analasys and Data Reconfiguration"

person["pets"] = ['Chicken', "Duck"]

//for (key in person){
 //   console.log(key)
//}

let teams = {
    teamOne : ['ryan', 'alex'],
    teamTwo : ['henry', 'charlie'],
    teamThree: ['porter', 'blake'],
    teamFour: ['monique', 'mariko'],
    teamFive: ['shania' , 'deepta']
}

delete teams.teamTwo

//for (let team in teams) {
  ///  console.log(team)
//}

class Dog {
    constructor(name, breed, age){
        this.name = name
        this.breed = breed
        this.age = age 
    }

    greeting() {
        console.log( `Hi, my name is ${this.name} and I am an ${this.breed}`)
    }
}

let lassie = new Dog ('Lassie', 'Collie', 18)

//console.log(lassie.name)

let beethoven = new Dog ( 'Beethoven', 'St. Bernard', 12)

//console.log(beethoven.breed)

lassie.greeting()

for (key in lassie){
    console.log(lassie[key])
}

