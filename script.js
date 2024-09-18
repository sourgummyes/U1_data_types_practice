/*
 * Prompt 1:
 *
 * Declare a variable called myFavoriteSong on one line and console.log the value
 * Then, using your Literals, console.log "my favorite song is..." with the song's value
 */
 let myFavouriteSong = 'Ten-Faced'
 console.log(`My favourite song is ${myFavouriteSong}...`)


console.log(`Prompt 1 End`)
console.log(` `)
/*
 * Prompt 2:
 *
 * Create 3 variables using let and const, then console.log each of them, using a string literal (` ${} `} in the log
 */
let var1 = 'Var1'
const const1 = 'const1'
let var2 = 'var2'

console.log(`variable 1: ${var1}, Variable 2: ${const1}, Variable 3: ${var2}`)

console.log(`Prompt 2 End`)
console.log(` `)
/*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each, using console.log:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */

let numVar = 8

console.log(numVar)
console.log(numVar + 3)
console.log(numVar - 3)
console.log(numVar * 3)
console.log(numVar / 7)
console.log(numVar % 2)
console.log(`Prompt 3 End`)
console.log(` `)

/*
 * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 * Run a console.log that says 'hello my name is..." with your fullName. 
 */

let firstName = 'Jane'
let lastName = 'Doe'

let fullName = `${firstName} ${lastName}`
console.log(`Hello my name is ${fullName}.`)
console.log(`Prompt 4 End`)
console.log(` `)
/* Arrays */

// Create an array of Movies, then log the 2nd movie in your array
// Use your array methods to add a movie in to the Front of the array, then the Back of the Array, then to the 2nd index point of the array

let movie = ['Scott Pilgrim',
  'Tangled',
  'Back to the Future',
  "Wayne's World",
  'Isle of Dogs',
]
console.log(movie[1])
console.log(` `)
movie.unshift('Everything Everywhere All At Once')
console.log(movie.toString())
console.log(` `)
movie.push('Clue')
console.log(movie.toString())
console.log(` `)
movie.splice(1, 0, 'Coraline')
console.log(` `)
console.log(movie.toString())
console.log(`Prompt 5 End`)
console.log(` `)
/*
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

let array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion'];
let array2 = [
  ['Marty Feldman', 'Marty Marion'],
  ['Marty Stuart', 'Marty McFly'],
  ['Marty Jannetty', 'Marty Robbins']
];
let array3 = [
  ['Marty Feldman', ['Marty Marion']],
  ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
];

console.log(array1[2])
console.log(array2[1][1])
console.log(array3[1][1][1])
console.log(`Prompt 6 End`)
console.log(` `)
/*
 *
 * Use the length of the array below to retrieve the second to last item.
 */

let array4 = ['a', 'b', 'c', 'd', 'e'];

console.log(array4[array4.length - 2])
console.log(`Prompt 7 End`)
console.log(` `)
/*
 *
 * Use the following arrays to answer the subprompts below.
 */

let thom = ['Thom', 1000, 'Christchurch'];
let karolin = ['Karolin', 16, 'New York'];
let kristyn = ['Kristyn', 5, 'Pittsburgh'];
let cathleen = ['Cathleen', 186, 'New York'];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Tom".

// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.

// Change Cathleen's hometown from New York to "Gotham City".

// Remove "Pittsburgh" from Kristyn's array and add "Oakland".

//you can just directly do it, no need for splice. "Thom[0] = `Tom`" will work.
thom.splice(0, 1, 'Tom')
console.log(thom)
karolin.splice(1, 1, 16)
console.log(karolin)
cathleen.splice(2, 1, 'Gotham City')
console.log(cathleen)
kristyn.splice(2, 1, 'Oakland')
console.log(kristyn)
console.log(`Prompt 8 End`)
console.log(` `)

//splice told by a person in my group, fully figured out by my own experimentation