const a = 1

function main() {
  const a = 2
  console.log(`In function ${a}`)
}
main()

{
  const a = 3;
  console.log(`In block ${a}`)
}

console.log(`In main ${a}`)

/* You might think that block scope declared in line no. 9 is not that usefull */