var arr = [47,64,68,73,32,19,72,59]
var query = [73,47,68,59,47,64,47,72]

var mid = Math.floor(arr.length/2)
//console.log(mid)

for(var i= 0; i < query.length; i++) {
      if(i < mid) {
          console.log(1)
      } else if(i > mid) {
          console.log(2)
      } else if(i === 0) {
          console.log(0)
      }
}