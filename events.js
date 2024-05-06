function btnclick(){
   alert("You have clicked a button (☞ﾟヮﾟ)☞(❤´艸｀❤)helloo😁") 
}
function printhello(){
    alert("🤑your page has loaded")
}
//function to change color on mousehover
function changecolor(){
    document.getElementById("xx").style.backgroundColor="orange";

}
//function on mouseout to change color
function hello(){
    document.getElementById("xx").style.backgroundcolor="red"
}
// eventlistiners are functions that wait for a specific event to occur and execute a block of code in response to that event
//Element.addeventlistiner(event,functionname)
//select the element
 let x=document.getElementById("one")
 //add eventlistiner
 x.addEventListener("click",myfunction)
    function myfunction(){
       alert("button clicked😎")
    }
    // another event listener
    x.addEventListener("mouseover",mysecondfunction)
    function mysecondfunction(){
       x.style.backgroundColor="red"
    }

x.addEventListener("mouseout",mythirdfunction)
    function mythirdfunction(){
       x.style.backgroundColor="green"
    }
    

    



 