let datafromls=JSON.parse(localStorage.getItem("data")) ||[];

function mobiledatafunc(datafromls){
    document.querySelector("#mobile_list").innerHTML=null;

    datafromls.map((item)=>{

        

        let div=document.createElement("div")
        div.setAttribute("class","mobile")

        let image=document.createElement("img")
        image.src=item.image;

        let name=document.createElement("h1")
        name.innerText=item.name;

        let brand=document.createElement("p")
        brand.innerText=item.brand;

        let price=document.createElement("p")
         price.innerText=item.price;

         let btn=document.createElement("button")
            btn.innerText="Remove Product";
            btn.setAttribute("class","remove")
            btn.addEventListener("click",function(){
                removebtnfunc()
            }) 

         div.append(image,name,brand,price,btn)
        document.querySelector("#mobile_list").append(div)
              
    })
}

mobiledatafunc(datafromls)

function  removebtnfunc(i){
    datafromls.splice(i,1)
    localStorage.setItem("data",JSON.stringify(datafromls))
    window.location.reload();
}

function filterbymobile(){

let selectitem=document.querySelector("#select_filter").value;
if(selectitem=="All")
{
    mobiledatafunc(datafromls)   
}
else{
    let datamobile=datafromls.filter((elem)=>{
        return elem.brand==selectitem
    })
    mobiledatafunc(datamobile)
}

}
document.querySelector("#sort_lth").addEventListener("click",function(){
    sortbylthfunc()
})

function sortbylthfunc(){
    datafromls.sort((a,b)=>{
        return a.price-b.price;
    })
    mobiledatafunc(datafromls)
}

document.querySelector("#sort_htl").addEventListener("click",function(){
    sortbylthfunc2()
})
function sortbylthfunc2(){
    datafromls.sort((a,b)=>{
        return b.price-a.price;
    })
    mobiledatafunc(datafromls)
}
