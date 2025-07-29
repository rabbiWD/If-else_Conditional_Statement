let age = 68;
let price = 800;
let isStudent = false;
 if(age<10){
    console.log("ticket free");
 }
 else if(isStudent){
    discount= (50/100)*price;
    console.log(price-discount);
 }
 else if(age>=60){
    discount=(15/100)*price;
    console.log(price-discount);
 }
 else{
    console.log(price);
 }