var number = 30;
str=""
var n = [10, 11, 12, 13, 14, 17, 18, 19]
arr=[]
for ( var i   of  n){
  for ( var j of  n){
    if (i+j==number){
      arr.push([i,j])
      str+=arr
    }
  }
}
console.log(arr)
    
