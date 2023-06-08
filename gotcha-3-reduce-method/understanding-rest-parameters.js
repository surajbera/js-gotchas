const customFunction = (ctString, ...ctValues) => {
  console.log('Custom String -> ', ctString)
  console.log('Custom Values -> ', ctValues)
}

customFunction('Hello', 'World', '!', 'How', 'are', 'you', '?')
