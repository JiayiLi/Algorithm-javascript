var  insertionSort = function(target_array){
	for(var i=1;i<target_array.length;i++){
		for(var j=0;j<i;j++){
			if(target_array[j]>target_array[i]){
				// 将target_array[i]放入对应位置，再删除

				//在j的位置加target_array[i]； 
				//例子： var test = [1,2,4]; test.splice(2,0,3);输出 [1,2,3,4]
				target_array.splice(j,0,target_array[i]); 
				target_array.splice(i+1,1);
			}
		}
	}

	return target_array;
}


// test
console.log(insertionSort([32,45,37]));