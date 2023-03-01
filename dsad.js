

let Miro = {
  firstName: `Miroslav`,
  secondName: `Ivanov`,
  age: 30
}

for (const key of Object.keys(Miro)) {
  console.log(`${key} - ${Miro[key]}`);
}



for (let i = 0; i < Object.keys(Miro).length; i++) {
  
  let keys = Object.keys(Miro)
  let values = Object.values(Miro)
  console.log(`${keys[i]} - ${values[i]}`);
  
}