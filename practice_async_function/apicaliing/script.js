const url = "https://uselessfacts.jsph.pl/api/v2/facts/random";



let btn = document.querySelector(".btn");
let para = document.querySelector(".para");



async function getdata(){
  console.log("Fetching data from API...");
  let response = await fetch(url);
  console.log(response);
  let data = await response.json();
  para.innerText = data.text;
  console.log(data.text);
}


btn.addEventListener("click", getdata);



