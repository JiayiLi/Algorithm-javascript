var sequentialSearch = function(target_array,target){
	var found = false;
	var targetIdx ;
	for(var i=0;i<target_array.length;i++){
		if(target_array[i] === target){
			found = true;
			targetIdx = i;
			break;
			
		}
	}

	if(found){
		return targetIdx;
	}else {
		return "not found";
	}
}


//test
console.log(sequentialSearch([1,2,3,4,5,6,7,8],9));
