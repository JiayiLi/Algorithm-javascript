var bucketSort = function(target_array){
	var min = target_array[0];
	var max = target_array[0];

	for(var i=0;i<target_array.length;i++){
		if(target_array[i]>max){
			max = target_array[i];
		}

		if(target_array[i]<min){
			min = target_array[i];
		}
	}

	var DEFAULT_BUCKET_SIZE = 5;
	var bucketCount = Math.floor((max - min) / DEFAULT_BUCKET_SIZE) + 1;  
	var buckets = new Array(bucketCount);
	for (i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }
    //利用映射函数将数据分配到各个桶中
    for (i = 0; i < target_array.length; i++) {
        buckets[Math.floor((target_array[i] - min) / DEFAULT_BUCKET_SIZE)].push(target_array[i]);
    }

    target_array.length = 0;
    for (i = 0; i < buckets.length; i++) {
    	// 对每个桶进行排序，这里使用了插入排序
    	for(var z=1;i<buckets[i].length;i++){
			for(var j=0;j<z;j++){
				if(buckets[i][j]>buckets[i][z]){
					buckets[i].splice(j,0,buckets[i][z]); 
					buckets[i].splice(z+1,1);
				}
			}
		}


        for (var j = 0; j < buckets[i].length; j++) {
            target_array.push(buckets[i][j]);                      
        }
    }

    return target_array;

}


// test
console.log(bucketSort([32,45,37,56,36,26]));