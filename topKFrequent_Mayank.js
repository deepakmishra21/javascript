console.log(topKFrequent([3, 0, 1, 0], 1));

function topKFrequent(nums, k) {
  debugger;
  var result = [];
  let _map = new Map();
  for (let i = 0; i < nums.length; i++) {

    _map.has(nums[i]) ? _map.set(nums[i], _map.get(nums[i]) + 1) : _map.set(nums[i], 1);

  }

  result = [..._map].sort((a, b) => b[1] - a[1]);


  return result.map(a => a[0]).slice(0, k);




}

