function BMI_calculator() {
    const weightRef=document.querySelector("#weight");
    const heightRef=document.querySelector("#height");
    const weight= Number(weightRef.value);
    const height= Number(heightRef.value);
    const resultRef=document.querySelector("#result");
      
    if(!Number.isFinite(weight) || !Number.isFinite(height) || weight<=0 || height<=0){
        resultRef.innerHTML="Please enter valid weight and height";
        resultRef.className="error";
        return;
    }

    const bmi=weight/(height**2);
    let category;
    let advice;
    let categoryClass;

    if(bmi<18.5){
        category="Underweight";
        advice="You should consider gaining some weight for better health.";
        categoryClass="underweight";
    }
    else if (bmi<25){
        category="Normal weight";
        advice="You are in a healthy weight range. Keep up the good work!";
        categoryClass="normal";
    }
    else if (bmi<30){
        category="Overweight";
        advice="You may want to consider losing some weight for better health.";
        categoryClass="overweight";
    }
    else{
        category="Obesity";
        advice="It's important to consult with a healthcare professional for guidance on weight management.";
        categoryClass="obesity";
    }
    resultRef.className=categoryClass;
    resultRef.innerHTML=`your BMI is ${bmi.toFixed(2)}. You are classified as ${category}. ${advice}`;
}