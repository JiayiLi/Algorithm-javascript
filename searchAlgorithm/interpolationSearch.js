var interpolationSearch = function(target_array,target){
	var low = 0, high = target_array.length-1;
	var mid,count = 0;

	//mid=(low+high)/2 = low+(high-low)/2；
	//将1/2替换成(target-a[low])/(a[high]-a[low])
	while (low<=high){
		count ++;
		mid = low + parseInt((high-low)*(target-target_array[low])/(target_array[high]-target_array[low]));
		if(target<target_array[mid]){
			high = mid - 1 ;
		}else if(target>target_array[mid]){
			low = mid+1;
		}else if(target==target_array[mid]){
			return mid;
		}else {
			return "cant find"
		}
	}

}


//test
console.log(interpolationSearch([1,2,3,4,5,6,7,8],9));