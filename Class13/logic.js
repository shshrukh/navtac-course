// let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// let objects = [{fname:'saleem kahn',id:1},{fname:'shahrukh arbaz',id:2},{fname:'rashid Saleem',id:3}]


// const newCalled =  objects.filter((iteam, index)=>{
//     console.log(iteam, index);
//     if (iteam.id < 3) {
//         return iteam
//     }
// });

// console.log(newCalled);

// // const newCalledd =  letters.filter((iteam, index)=>{
// //     console.log(iteam, index);
// //     return iteam;
// // });

// // console.log(newCalledd);

// const abc = function restParameters(...a) {
//     return a
// }
// console.log(abc('a', 'b', 'c')); //return an array of arguments

let users = [
    {
        id:1,
        fName : 'salemm',
        age: 23
    },
    {
        id:2,
        fName:'arbaz',
        age:23
    },
    {
        id:3,
        fName : 'rashid',
        age:42
    }
]
 let abc = users.map((abc)=>{
    return abc;
    
})
users.map((abc)=>{
    console.log(abc);
    
})

// console.log(abc);



