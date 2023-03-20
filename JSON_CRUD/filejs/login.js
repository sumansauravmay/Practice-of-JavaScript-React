let submit_btn=document.querySelector("#submit");
submit_btn.onclick=()=>{
    submitloginbtn(event)
}


let submitloginbtn=async(e)=>{
    e.preventDefault();

    email=document.querySelector("#email").value,
    password=document.querySelector("#password").value

let res=await fetch("https://lively-cap-duck.cyclic.app/register")

let data=await res.json();

let user_exist=data.find((el)=>el.email)

if(user_exist){
    if(user_exist.password==password)
    {
        alert("login successful!!")
        window.location.href="product.html";
    }
    else{
        alert("wrong password!!")
    }
}
else{
    alsert("user doesn't exist!!")
}
}