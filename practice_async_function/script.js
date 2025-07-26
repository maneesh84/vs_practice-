function asyncfunc1(){
  return new Promise((resolved,reject)=>{
    setTimeout(()=>{
      console.log("Async function 1 executed");
      resolved("Result from async function 1");
    }, 5000)
})
}
function async2(){
  return new Promise(
    (resolved,reject)=>{
    setTimeout(()=>{
      console.log("Async function 2 executed");
      resolved("Result from async function 2");
    },5000)
    }
  )
}

let promise1=asyncfunc1();
console.log("searching for prmise1....")
promise1.then((resut)=>{
  console.log("Promise1 found");
  let promise2=async2();
  console.log("searching for promise 2....");
  promise2.then((result)=>{
    console.log("Promise2 found");
  })

})