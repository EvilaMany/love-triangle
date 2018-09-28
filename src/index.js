/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let result = 0;

  	preferences.forEach((currentNumber,i,preferences)=>
  	{
  		let first = currentNumber
        let  second = preferences[first-1]
  		  let  third = preferences[second-1]
  		
      if(first < i+1 || second < i+1 || third < i+1 || second == third)
  			return ;
  		if(third == i+1)
  			result++
  	})

  	return result
}