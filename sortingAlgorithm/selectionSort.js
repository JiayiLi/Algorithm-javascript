var selectionSort = function(target_array){
	var min, temp;
	for(var i=0;i<target_array.length-1;i++){ //这里之所以是len-1，是因为到最后两个元素，交换位置，整个数组就已经排好序了。
		min = i;
		for(j=i+1;j<target_array.length;j++){
			if(target_array[j]<target_array[min]){
				min = j;
			}
		}
		temp = target_array[min];
		target_array[min] = target_array[i];
        target_array[i] = temp;
	}

	return target_array;
}


//test
console.log(selectionSort([32,45,37,34,36,26]));
