let btn_sub=document.querySelector("#submit");

btn_sub.onclick=()=>{
    submitsignupfunc(event)
}

let submitsignupfunc=async(e)=>{
    e.preventDefault()
    
let data={
    name:document.querySelector("#name").value,
    email:document.querySelector("#email").value,
    password:document.querySelector("#password").value
}
console.log(data)
let res=await fetch("https://lively-cap-duck.cyclic.app/register",{
    method:"POST",
    body:JSON.stringify(data),
    headers:{
        "Content-Type":"application/json"
    }
})
let userdata=await res.json();
console.log(userdata);
window.location.href="login.html";
}
