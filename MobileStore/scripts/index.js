/*
Use local storage as your database. And store data with key as "mobile_data". The mobile object will be :-
{
brand: String,
name: String,
price: Number,
image: String
}

Example:- 
{
brand: "apple", (oneplus/nokia)
name: "Iphone 13",
price: 74000,
image: "https://www.iphone.com/image.jpg"
}

*/

{/* <input id="mobile_brand" type="text" placeholder="Put Mobile brand"/>
  <input id="mobile_name" type="text" placeholder="Put Mobile name"/>
  <input id="mobile_price" type="text" placeholder="Put Mobile price"/>
  <input id="mobile_image" type="text" placeholder="Put Mobile image"/>
  <input id="submit" type="submit" value="Add Product"/> */}



document.querySelector("form").addEventListener("submit",function(){
    mymobiledatafunc()
})
let mobiledata=JSON.parse(localStorage.getItem("data")) ||[];

const mymobiledatafunc=()=>{
let obj={
    brand:document.querySelector("#mobile_brand").value,
    name:document.querySelector("#mobile_name").value,
    price:document.querySelector("#mobile_price").value,
    image:document.querySelector("#mobile_image").value,

}
mobiledata.push(obj);
localStorage.setItem("data",JSON.stringify(mobiledata));
}









