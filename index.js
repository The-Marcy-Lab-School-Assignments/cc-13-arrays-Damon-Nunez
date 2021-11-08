//write your code here
function ArrayAverage(arr){
    var totalSum= 0;
    for(let i=0; i<arr.length; i++){
        totalSum += arr[i]
    }
    var arrlength= arr.length
    var results = totalSum / arrlength
    console.log(results);
}
ArrayAverage([5,3,4,5,7])