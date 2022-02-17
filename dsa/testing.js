//   function main() {
//       var a = 20;
//       function inside() {
//         var b = 30;
//         console.log(a+b)
//     }
     
//      return inside
//     }
//   var c =  main()
//   c()
   
var person = {
    name: "srinivas",
    age : 26,
    a : function() {
        var c = "newperson"
        console.log(this)
    }
}

person.a()