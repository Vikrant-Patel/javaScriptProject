function calculate(){
    let txt1=document.getElementById('text1').value
    let txt2=document.getElementById('text2').value
let text1=txt1.split('')
let text2=txt2.split('')

let set1= new Set(text1)
let set2= new Set(text2)
const intersection = new Set([...set1].filter((x) => set2.has(x)))
const union = new Set([...set1, ...set2]);
const similarity1 = (intersection.size / union.size) * 100;
let similarity=similarity1.toFixed(2)
document.getElementById('result').innerHTML="Similarity:"+similarity+"%";
}
