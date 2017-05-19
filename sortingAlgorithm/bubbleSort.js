var bubbleSort = function(target_array){

	for(var i=0;i<target_array.length-1;i++){
		for(var j=0;j<target_array.length-1-i;j++){
			if(target_array[j] > target_array[j + 1]){
				var temp = target_array[j];
				target_array[j] = target_array[j+1];
				target_array[j+1] = temp;
			}
		}
	}
	return target_array;
}

// test
console.log(bubbleSort([32,45,37,34,36,26]));