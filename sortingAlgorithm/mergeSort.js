var merge = function(left,right){
	var result = [];
	while(left.length && right.length){
		if(left[0]<=right[0]){
			result.push(left.shift());
		}else {
			result.push(right.shift());
		}

	}

	while(left.length){
		result.push(left.shift());
	}
	while(right.length){
		result.push(right.shift());

	}
	return result;
}

var mergeSort = function(target_array){
	if(target_array.length == 1){
		return target_array;
	}
	var mid = parseInt(target_array.length / 2);

	var left = target_array.slice(0, mid);
	var right = target_array.slice(mid);

	return merge(mergeSort(left), mergeSort(right));

}


//test
console.log(mergeSort([32,45,37,34,36,26]));
