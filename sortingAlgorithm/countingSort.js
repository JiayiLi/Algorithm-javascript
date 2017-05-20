var countingSort = function(target_array){
	var min = target_array[0] , max = target_array[0];
	var count = [];
	for(var i=0;i<target_array.length;i++){
		max = target_array[i]>max?target_array[i]:max;
		min = target_array[i]<min?target_array[i]:min;
	}

	for (var i = min; i <= max; i++) {
	    count[i] = 0;
	}
	for (i=0; i < target_array.length; i++) {
	    count[target_array[i]]++;
	}	

	var z = 0;
	for (var i = min; i <= max; i++) {
	    while (count[i]-- > 0) { //循环新数组，如果不为零，则把i返回array
	      target_array[z++] = i;
	    }
	}

	return target_array;
}


// test
console.log(countingSort([2,4,6,4,23,43,24]));