const input1 = document.getElementById('first-name')
const input2 = document.getElementById('last-name')
const input3 = document.getElementById('email')
const input4 = document.getElementById('phone')
const input5 = document.getElementById('password')
const input6 = document.getElementById('Cpassword')
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const p3 = document.getElementById('p3')
const p4 = document.getElementById('p4')
const p5 = document.getElementById('p5')
const p6 = document.getElementById('p6')

input1.addEventListener('click',()=>{
    p1.innerHTML="Ex:- Roshan"
    p1.style.color="red"
})
input2.addEventListener('click',()=>{
    p2.innerHTML="Ex:- Prajapati"
    p2.style.color="red"
})
input3.addEventListener('click',()=>{
    p3.innerHTML="Ex:-xyz@gmail.com"
    p3.style.color="red"
})
input4.addEventListener('click',()=>{
    p4.innerHTML="Ex:-9773839838"
    p4.style.color="red"
})
input5.addEventListener('click',()=>{
    p5.innerHTML="only number"
    p5.style.color="red"
})
input6.addEventListener('click',()=>{
    p6.innerHTML="only number"
    p6.style.color="red"
})