const curr_url=
"https://api.frankfurter.app/latest?from=USD&to=INR";

const dropdown=document.querySelectorAll(".dropmenue");
const amount=document.querySelector("#amount");
const btn=document.querySelector(".btn");
const info=document.querySelector(".info");


for(let select of dropdown){
  for(cntCode in countryList){
    let newOption=document.createElement("option");
    newOption.innerText=cntCode;
    newOption.value=cntCode;
    if(select.name==="From" && cntCode==="USA"){
      newOption.selected='selected';
    }else if(select.name==="To" && cntCode==="INR"){
      newOption.selected='selected';
    }
    select.append(newOption);
  }

  select.addEventListener("change",(evt)=>{
    update_flag(evt.target);
  })
}

let update_flag =function(select){
  let countryCode=countryList[select.value];
  let newsrc=`https://flagsapi.com/${countryCode}/shiny/64.png`;
  let img= select.parentElement.querySelector("img");
  img.src=newsrc;
}

const from=document.querySelector("#fm");
const TO=document.querySelector("#To");
btn.addEventListener("click",(evt)=>{
  evt.preventDefault();
  updateURL();
  
})

let updateURL= async function (){
  let newURL=`https://api.frankfurter.app/latest?from=${from.value.toUpperCase()}&to=${TO.value.toUpperCase()}`;
  let response=await fetch(newURL);
  response=await response.json();
  let price=response["rates"][`${TO.value}`];
  if(amount.value<1 || amount.value===""){
    amount.value=1;
    amount.textContent="1";
  }

  let totalPrice=price*amount.value;
  info.innerText=(`${amount.value} ${from.value} = ${totalPrice} ${TO.value}`);
}
updateURL();