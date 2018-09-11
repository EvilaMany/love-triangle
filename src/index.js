/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  	
  	var result = 0;
  	for(var i = 0;i < preferences.length;i++)
  	{
  		var first = preferences[i];
  		var second = preferences[first-1]
  		var third =preferences[second-1]
  		if(first < i+1 || second < i+1 || third < i+1 || second == third)
  			continue
  		if(third == i+1)
  			result++; 
  	}
  	return result;
}