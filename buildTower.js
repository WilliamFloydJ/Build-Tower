const buildTower = (numLevel) => {
  let towerArr = [];
  let levelSize = numLevel * 2 - 1;
  for (let i = 0; i < numLevel; i++) {
    let levelCharArr = [];
    for (let iC = 0; iC < levelSize; iC++) {
      if (i === 0) {
        levelCharArr.push("*");
      } else if (iC < i || iC >= levelSize - i) {
        levelCharArr.push(" ");
      } else {
        levelCharArr.push("*");
      }
    }

    let levelStr = levelCharArr.join("");
    towerArr.unshift(levelStr);
  }

  return towerArr;
};
console.log(buildTower(5));
