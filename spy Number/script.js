function Checker(){
    let number=document.getElementById('num').value


    const digits = 
    number.toString().split("").map(Number);
const sum = 
    digits.reduce((a, b) => a + b, 0);
const product = 
    digits.reduce((a, b) => a * b, 1);

    
if (sum==product){
    return  document.getElementById('result').innerHTML= (number)+"is the spy number."
}
else{
     return document.getElementById('result').innerHTML= (number)+"is not the spy number."
}
}
