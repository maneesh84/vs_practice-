function asyncfunc1(){
  return new Promise((resolved,reject)=>{
    setTimeout(()=>{
      console.log("Async function 1 executed");
      resolved("Result from async function 1");
    }, 1000)
})
}
function async2(){
  return new Promise(
    (resolved,reject)=>{
    setTimeout(()=>{
      console.log("Async function 2 executed");
      resolved("Result from async function 2");
    },1000)
    }
  )
}

let promise1=asyncfunc1();
console.log(promise1);
let promise2=async2();
console.log(promise2);