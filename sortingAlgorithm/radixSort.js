var radixSort = function(target_array){
	var max = target_array[0];
	for(var i = 0;i<target_array.length;i++){
		if(target_array[i] > max){
			max = target_array[i];
		}
	}

	var maxDigit = (max + '').length; //  转换为 字符串 计算长度，获得最大位数

	//排序桶用于保存每次排序后的结果，这一位上排序结果相同的数字放在同一个桶里
  	var bucket = [];
	var mod = 10;
    var dev = 1;


	for(var i = 0;i < maxDigit; i++, dev *= 10, mod *= 10){
		for(var j = 0; j<target_array.length;j++){
			var count = parseInt((target_array[j] % mod) / dev);
			if(bucket[count] == null) {
                bucket[count] = [];
            }
            bucket[count].push(target_array[j]);
		}
		var pos = 0;
		for(var j = 0;j < bucket.length;j++){
			var value  =  null;
			if(bucket[j]!=null){
				while ((value = bucket[j].shift()) != null) {
                      target_array[pos++] = value;
                }
			}
		}
	}


	return target_array;

}

// test
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(radixSort(arr));
