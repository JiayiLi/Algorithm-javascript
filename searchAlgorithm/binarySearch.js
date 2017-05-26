var binarySearch = function(target_array,target){
	var start = 0,
		end = target_array.length-1;


	if(!target_array.length){
		return "empty Array"
	}

	while(start+1 < end){
		var mid = parseInt(start+(end-start)/2) ;//防止溢出 end+start又可能溢出
		if(target < target_array[mid]){
			end = mid;
		}else if(target > target_array[mid]){
			start = mid;
		}else if(target === target_array[mid]) {
			return mid;
		}
	}

	if(target_array[start]===target){
		return start;
	}else if(target_array[end] === target) {
		return end;
	}
	
	return "not found";

}

//test
console.log(binary_search([1,2,3,4,5,6,7,8],6));
