let twoSum = function(nums, target){
  for(let i = 0; i < nums.length; i++){
    for (let j = 0; j < nums.length; j++){
      if(nums[i] + nums[j] == target){
        retun [i, j];
      }
    }
  }
};
Input: nums = [2,7,11,15], target = 9