function asyncfunc1(){
  return new Promise((resolved,reject)=>{
    setTimeout(()=>{
      console.log("Async function 1 executed");
      resolved("Result from async function 1");
    }, 1000)
})
}

let promise1=asyncfunc1();
console.log(promise1);