let display = document.getElementById("display")
document.querySelectorAll('.btns').forEach(btn => {
  btn.onclick = () => append(btn.textContent);
});


document.getElementById('btn=').onclick = () => calculate();
document.getElementById('btnclear').onclick = () => clear();
document.getElementById('convertRoman').onclick = () => convertToRomanDisplay()
document.getElementById('delBtn').onclick = () => delnums();

function append(val){
  display.value += val;
}

document.addEventListener("keydown", (event)=> {
  const key = event.key;
  if (!isNaN(key) || ["+","-","*","/","."].includes(key)) {
    append(key);
  } 
  if (key === '.') {
    display.value += key;
  }
  if (key === 'Backspace') {
    display.value = display.value.slice(0, -1)
  }
  if (key === 'Enter') {
      try {
    display.value = eval(display.value);
      }catch(e){
    display.value = 'Error';
    }
  }
})

function calculate(){
  try {
    display.value = eval(display.value);
  }catch(e){
    display.value = 'Error';
  }
}
function convertToRomanDisplay(){
    let num = parseInt(display.value);
    if(isNaN(num) || num < 0){
      display.value = "Invalid";
      return;
    }
    display.value = convertRoman(num)
  }
function clear(){
  display.value= '';
}
function delnums() {
  let currentNum = display.value
  display.value = currentNum.slice(0, -1);
}
display.style.fontSize = '24px';



console.log(typeof(display.value))

// -------- roman numeral --------

let valuesNos = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
let symbols = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
let romanpair = valuesNos.map((value, index) =>({value, symbol: symbols[index]}));
console.log(romanpair)

 function convertRoman(num){
   let result = "";
   for(let i=0; i< romanpair.length; i++){
     let currentval = romanpair[i];
     
     while(num >= currentval.value) {
       result += currentval.symbol;
       num -= currentval.value;
     }
     
   }
   return result;
 }
 
 
// ------------- counter-------
 
// const counterscreen = document.getElementById("counterscreen");
//  let count = 0;
// document.getElementById("increaseBtn").onclick = () => {
//   count++;
//   document.getElementById("counterscreen").textContent = count;
// }
//  document.getElementById("deleteBtn").onclick = () => {
//    count = 0;
//    document.getElementById("counterscreen").textContent = count;
//  }
//  document.getElementById("decreaseBtn").onclick = () => {
//    count--;
//    document.getElementById("counterscreen").textContent = count;
//  }
 
 
 
// function showRoman(){
//   let num = parseInt(display.value);
//   display.value = convertRoman(num);
// }






// var add_list = document.querySelector('.nav_elements')
//   // add_list.style.display = "flex";
//   add_list.style.gap = "20px";
  
// let head_page = document.getElementById("godman");
//     head_page.style.color = "red";
//   function togglelist(){  
//     add_list.classList.toggle('hidden')
//     // if(add_list.style.display === "block"){
//     //   add_list.style.display = 'flex';
//     // }else{
//     //   add_list.style.display = 'none';
//     // }
//   }
//   function stop(){
//     prompt('yeell')
//   }
  
  // let input1 = parseFloat(prompt("Enter fisrt number"));
  // let input2 = parseFloat(prompt("Enter your second number"));
  
  // let sum = input1 + input2;
  // console.log(sum)
  





// let mile = 209.2142;
// let conmilestokm = mile * 1.61;
// console.log(`The distance of ${conmilestokm}kms is equal to ${mile}`)
// //----- pq3.1----//
// let arr = ["Bread", "Milk","Apple"];
// console.log(arr.length);
// arr[1] = Bananas;
// console.log(arr)

// //------ pq3.2-----//
// let shoppinglist = [];
// shoppinglist.push("Milk", "bread","Apple");
// shoppinglist[1] = "Banana";
// shoppinglist.pop();
// console.log(shoppinglist)
// shoppinglist.sort();
// shoppinglist.splice(1,0 "carrot", "Lattuce");