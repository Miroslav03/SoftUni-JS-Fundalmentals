function provisionsForQuest(input) {
    const days = Number(input[0]);
    const countOfPeople = Number(input[1]);
    let energyLevel = Number(input[2]);
    const waterPerPerson = Number(input[3]);
    const foodPerPerson = Number(input[4]);
    const energyLossPerDay = input.slice(5).map(Number);
    let waterSupply = days * countOfPeople * waterPerPerson;
    let foodSupply = days * countOfPeople * foodPerPerson;
    for (let i = 1; i <= days; i++) {
      energyLevel -= energyLossPerDay[i - 1];
      if (energyLevel <= 0) {
        console.log(`You will run out of energy. You will be left with ${foodSupply.toFixed(2)} food and ${waterSupply.toFixed(2)} water.`);
        return;
      }
      if (i % 3 === 0) {
        const foodNeeded = foodSupply / countOfPeople;
        foodSupply -= foodNeeded * countOfPeople;
        energyLevel *= 1.1;
      }
      if (i % 2 === 0) {
        const waterNeeded = waterSupply * 0.3;
        waterSupply -= waterNeeded;
        energyLevel *= 1.05;
      }
    }
    console.log(`You are ready for the quest. You will be left with ${energyLevel.toFixed(2)} energy!`);
  }provisionsForQuest(["10", "7", "5035.5", "11.3", "7.2", "942.3", "500.57", "520.68", "540.87", "505.99", "630.3", "784.20", "321.21", "456.8", "330"]);