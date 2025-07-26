// function asyncfunc1(){
//   return new Promise((resolved,reject)=>{
//     setTimeout(()=>{
//       console.log("Async function 1 executed");
//       resolved("Result from async function 1");
//     }, 5000)
// })
// }
// function async2(){
//   return new Promise(
//     (resolved,reject)=>{
//     setTimeout(()=>{
//       // console.log("Async function 2 executed");
//       reject("Result from async function 2rejected");
//     },5000)
//     }
//   )
// }

// let promise1=asyncfunc1();
// console.log("searching for prmise1....")
// promise1.then((resut)=>{
//   console.log("Promise1 found");
//   let promise2=async2();
//   console.log("searching for promise 2....");
//   promise2.catch((reject)=>{
//     console.log("Promise2 found");
//   })

// })
function getdata(dataid){
  return new Promise((resolved,reject)=>{
    setTimeout(()=>{
      console.log("data",dataid);
      resolved("success");
    },3000)

  })
}

getdata(1).then((res)=>{
  return getdata(2);
}).then((res)=>{
  return getdata(3);
}).then((res)=>{
  console.log(res);

})



