const a = 1

/* 
switch (a) {
  case 1:
    const result = a * 1
    console.log(result)
    break

  case 2:
    const result = a / 2
    console.log(result)
    break

  case 3:
    const result = a - 1
    console.log(result)
    break
}

*/

/* 
  - Above code won't work because switch statement create's it's own block.
  - VSCode throws an error saying 'Cannot redeclare block-scoped variable "result"'.
  - Same error is shown for both const and let keyword.
  - We don't get this error if we use var keyword, but it's always best to use let or const.
  - In order to prevent it, we can add a block scope for each case
*/

switch (a) {
  case 1: {
    const result = a * 1
    console.log(result)
    break
  }

  case 2: {
    const result = a / 2
    console.log(result)
    break
  }

  case 3: {
    const result = a - 1
    console.log(result)
    break
  }
}
