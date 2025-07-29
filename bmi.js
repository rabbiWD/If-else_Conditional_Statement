let height = 1.81;
let weight = 63;
let BMI = weight/ (height*height);

if(BMI<18.5){
    console.log("YOU ARE UNDERWEIGHT");
}
else{
    if(BMI>=18.5 && BMI<=24.9){
        console.log("YOU ARE NORMAL");
    }

    else{
        if(BMI>=25 && BMI<=29.9){
            console.log("YOU ARE OVERWEIGHT");
        }
          else{
             console.log("YOU ARE OBESE");
         }
}
}