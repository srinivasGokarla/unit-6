//syntex

// var Promise = new Promise(resolve, reject)
// // if promise is fullfilled that time the argument rsolbve excurted
// // reject means promise was not fullfilled and
// .then()
// .catch()


// // closures

// function main() {
//     let name = srinivas

//     function inner() {
//         alert(name)
//     }
//     inner()
// }
// main()

//foreach

// var arr = [1,2,3,4,5]

// var numb = arr.forEach(function(el)  {
//    console.log(el*2)
// })

//map

// var items = ["rice", "chicken","apple"]

// var len = items.map(function(el) {
//     return el.length
// })
// console.log(len)

//filter

// var arr = [1,2,3,4,5]// odd numbers, even number
// var num = arr.filter(function(el) {
//     return (el% 2 == 1)
    
// })
// console.log(num)

//reduce
 var arr = [1,2,3,4,5] // 1, 3 , 6, 10, 15

 var num = arr.reduce(function(ac, el) {
     console.log(ac)
     return ac+ el
 })
 console.log(num)
