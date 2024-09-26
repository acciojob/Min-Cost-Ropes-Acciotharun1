function mincost(arr)
{ 
arr.sort((a, b) => {
    return a - b;
  });
  let totalCost = 0;
  while (arr.length > 1) {
    let cost = arr.shift() + arr.shift();
    // console.log(cost);
    totalCost += cost;
    arr.push(cost);
    arr.sort((a, b) => {
      return a - b;
    });
  }
  return totalCost;
  
}

module.exports=mincost;
