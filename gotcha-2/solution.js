/* We can use the in operator to check whether the person has the name property. */

const person = {
  name: 'Suraj',
  age: 28,
}

if ('name' in person) {
  console.log('Person has the name property')
}
