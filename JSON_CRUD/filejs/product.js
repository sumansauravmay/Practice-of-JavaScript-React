window.addEventListener("load",()=>{
    getData()
})

let data;

let getData=async(page=1)=>{
let res=await fetch(`https://lively-cap-duck.cyclic.app/product?_limit=10&_page=${page}`)
 data=await res.json()
appendDatafunc(data)

}

function appendDatafunc(data){
    document.querySelector("#product").innerHTML="";
    data.map((item)=>{
      
let div=document.createElement("div")
div.setAttribute("class","divpar")

        let url=document.createElement("img");
        url.src=item.image;
        url.style.width="200px"

        let title=document.createElement("p")
        title.innerText=item.title;
        title.style.width="200px";

        let price=document.createElement("p")
        price.innerText=item.price;

        let category=document.createElement("p")
        category.innerText=item.category;

        let edit=document.createElement("button");
        edit.innerText="Edit";
        edit.addEventListener("click", ()=>{
            submitborrowedBtn(item)
        });

        let delete2=document.createElement("button")
        delete2.innerText="Delete";
        delete2.addEventListener("click",()=>{
            deletefunc(item.id)
        })
        
        div.append(url,title,price,category,edit,delete2)
document.querySelector("#product").append(div)
    })
}



// modal
function submitborrowedBtn(item){
    let arr=[];
    arr.push(item)
    modal.style.display = "block";
    ModalData(arr)
}

const modal = document.getElementById("myModal");
const btn = document.querySelector(".bookdetails");
const span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  
  
  const ModalData=(arr)=>{
      let modal_container = document.getElementById("modal_container");
          modal_container.innerHTML=null
  
          arr.map((item)=>{
            let div=document.createElement("div")
        div.setAttribute("class","flexdiv")

        let div4=document.createElement("div")

        let img=document.createElement("input")
        img.setAttribute("id","img_update")
        img.placeholder="enter imag url"
        img.style.marginLeft="50px"
       
        
        let title=document.createElement("input");
        title.setAttribute("id","title_update")
        title.placeholder="enter title here"
        title.style.marginLeft="50px"
      

        let cost=document.createElement("input")
        cost.setAttribute("id","cost_update")
        cost.placeholder="enter price here"
        cost.style.fontSize="20px"
        cost.style.marginLeft="50px";

        let description=document.createElement("input")
        description.setAttribute("id","des_update")
        description.placeholder="enter description here"
        description.style.marginLeft="50px";

        let category=document.createElement("input");
        category.setAttribute("id","catg_update")
        category.placeholder="enter category here";
        category.style.marginLeft="50px"

        let close=document.createElement("button")
        close.innerText="Close";
        close.style.marginLeft="50px";
        close.onclick = function() {
    modal.style.display = "none"
     
  }

        let confirm=document.createElement("button")
        confirm.innerText="Confirm";
        confirm.setAttribute("id","confirmtn")
        confirm.onclick = function() { 
      suman(item.id)
      modal.style.display = "none";
  }

div4.append(close,confirm)
        div.append(img,title,cost,description,category,div4)
        modal_container.append(div)
        })
    }

    function suman(id){
        let data2={
            // id:id,
             image:document.getElementById("img_update").value,
           
             title:document.getElementById("title_update").value,
    
             price:document.getElementById("cost_update").value,

             description:document.getElementById("des_update").value,
    
             category:document.getElementById("catg_update").value
        }
        console.log(data2)

        fetch(`https://lively-cap-duck.cyclic.app/product/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data2)
                    })
                  
                getData();
    }






// Delete
let deletefunc=async(id)=>{
await fetch(`https://lively-cap-duck.cyclic.app/product/${id}`,{
    method:"DELETE",
    headers:{
        "Content-Type":"application/json"
    }
})
getData();
window.location.reload()
}


// previous
let prevbtn=document.querySelector("#prev").addEventListener("click",()=>{
    prevbtnfunc()
})
const prevbtnfunc=()=>{
    let pagenum=document.querySelector("#page");
    if(Number(pagenum.value)>1)
    {
        let page=Number(pagenum.innerText);
        pagenum.innerText=page-1;
        pagenum.value=page-1;
        
        getData(page-1);
    }
}


// Next
let nextbtn=document.querySelector("#next").addEventListener("click",()=>{
    nextbtnfunc()
})

const nextbtnfunc=()=>{
    let pagenum=document.querySelector("#page");
        let page=Number(pagenum.innerText);
        console.log(page)
        pagenum.innerText=page+1;
        pagenum.value=page+1;
        
        getData(page+1)
    
}

// Ascending
document.querySelector("#ascending").addEventListener("click",()=>{
    ascendingfunc()
})
function ascendingfunc(){
    data.sort((a,b)=>{
       return a.price-b.price;
    })
    
    appendDatafunc(data)
}

// Descending
document.querySelector("#descending").addEventListener("click",()=>{
    descendingfunc()
})
function descendingfunc(){
    data.sort((a,b)=>{
        return b.price-a.price;
    })
    
    appendDatafunc(data)
}

// selecttag by category

function handlecategorychangefunc(){
   let selectall=document.querySelector("#selecttag").value
   if(selectall=="All")
   {
    
    appendDatafunc(data)
   } 
   else{
    let filter_data=data.filter((item)=>{
        return item.category===selectall
    })
   
    appendDatafunc(filter_data)
   }
}





