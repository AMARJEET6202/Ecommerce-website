let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
    ul.classList.toggle("showData");
    console.log(ul);

    if(ul.className == "showData"){
        document.getElementById("bar").className= "fa-solid fa-xmark";
    }
    else{
        document.getElementById("bar").className= "fa-solid  fa-bars";

    }
    
})



// navbar

let shops = document.getElementById("shops");
let reviews = document.getElementById("reviews");
let blogs = document.getElementById("blogs");
let contacts = document.getElementById("contacts");

shops.addEventListener("click",()=>{
    shops.style.color="rgb(4, 219, 219)"
    reviews.style.color="white"
    blogs.style.color="white"
    contacts.style.color="white"
})
reviews.addEventListener("click",()=>{
    reviews.style.color="rgb(4, 219, 219)"
    shops.style.color="white"
    blogs.style.color="white"
    contacts.style.color="white"
})
blogs.addEventListener("click",()=>{
    blogs.style.color="rgb(4, 219, 219)"
    reviews.style.color="white"
    shops.style.color="white"
    contacts.style.color="white"
})
contacts.addEventListener("click",()=>{
    contacts.style.color="rgb(4, 219, 219)"
    shops.style.color="white"
    reviews.style.color="white"
    blogs.style.color="white"
})


// card Js
let crd = document.querySelectorAll(".crd");
let itempage = document.querySelector(".itempage")
let container = document.querySelector(".container");
let itemimg = document.getElementById("itemimg");
let buybtn = document.getElementById("buybtn");

console.log(crd);



crd.forEach(function(curValue){
    curValue.addEventListener("click", function(){
        itempage.style.display="flex";
        container.style.display="none";

        let imgsrc= curValue.firstElementChild.src ;
        itemimg.src=imgsrc;

        buybtn.addEventListener("click", function(){
           document.querySelector(".buypage").style.display="block";
        
           document.querySelector(".buyText").innerHTML=`
           <h3>Enter Details :</h3>
            <input type="text" placeholder="Enter Your Name" id="name"> <br>

        
            <input type="text" placeholder="Enter Your Address" id="address"> <br>
            <input type="text" placeholder="Enter Your Mobile Number" id="num"> <br>

            <h3>Payment option :</h3>
            <select>
                <option value="Google-Pay">Google-Pay</option>
                <option value="Phone-Pay">Phone-Pay</option>
                <option value="Bharat-Pay">Bharat-Pay</option>
                <option value="Cash-on-Delivery">Cash-on-Delivery</option>
            </select> <br>
            <button>Submit</button>
            
            `
            
            


        
            
           


            let cross = document.querySelector(".cross");
            cross.addEventListener("click", function(){
            document.querySelector(".buypage").style.display="none"

            });
        
           
           
            
            
        })

        

    })
    

})


//connect
function Connect(){
    let names = document.getElementById("names");
    let num = document.getElementById("number");
    if(names.value == "" && num.value == ""){
        alert("Please Enter Detail")

        }
        else{
            alert("Thanks For Connected")
        }

    }
