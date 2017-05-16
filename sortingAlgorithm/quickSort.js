var quickSort = function(target_array){
	if(target_array.length<=1){
		return target_array;
	}

	var pivotIndex = Math.floor(target_array.length/2);
	var pivot = target_array.splice(pivotIndex,1)[0];

	var left = [],
		right = [];
	
	for(var i=0;i<target_array.length;i++){
		if(target_array[i]<pivot){
			left.push(target_array[i]);
		}else {
			right.push(target_array[i]);

		}
	}

	return quickSort(left).concat([pivot], quickSort(right));
}

// test
console.log(quickSort([32,45,37,16,2,87]));
