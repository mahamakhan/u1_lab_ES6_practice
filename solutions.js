const even = [2, 4, 6, 8]
const odd = [1, 3, 5, 7, 9]

const allNumbers = [...even, ...odd]

// console.log(allNumbers)

const faveFoods = {
  nihari: Pakistan,
  pizza: italy,
  pasta: america
}

const janetFaveFoods = {
  burger: UK,
  burrito: Mexico,
  thai: Thailand
}

const allFoods = { ...faveFoods, ...janetFaveFoods }
console.log(allFoods)

const myself = {
  name: Maham,
  age: 26,
  hometown: Lahore
}

console.log(name)
console.log(age)
console.log(hometown)

const pet = { name: Zelda, age: 4, breed: Lab }

const me = [pet, myself]
console.log(me)
