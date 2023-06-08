/* How do we check whether the person has the name property? */

const person = {
  name: 'Suraj',
  age: 28,
}

if (person.name) {
  console.log('Person has the name property')
}

/* 
  null, undefined, "", 0, false, NaN are all falsy values.

  If we check just for: 
    - person.name !== null or 
    - person.name !== undefined or
    - person.name !== ''
  then we won't find what we are searching for
*/
