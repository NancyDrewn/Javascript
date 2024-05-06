//creating an element in javascript
 let newh1=document.createElement("h1")
 //set the text of the h1
 newh1.textContent="This is a heading😃"
 //modifying the style of the paragragh
 newh1.style.color="aqua"
 //append/add to the body(in html) of the document
 document.body.appendChild(newh1)
 //creating a paragraph
  var newp=document.createElement("p")
  newp.textContent="Welcome back to your page😊"
  newp.style.color="blue"
  document.body.appendChild(newp)
  //creting a list in js
let newli=document.createElement("li")
newli.textContent="About us"
   //get the unodered list by its id
let vv=document.getElementById("menu")
vv.appendChild(newli)
let secondli=document.createElement("li")
secondli.textContent="Contact us"
vv.appendChild(secondli)
//get the parent container
 let container=document.getElementById('container')
 //get the paragragh element to be removed
 let mnb=document.getElementById("mnb")
 //remove the paragraph from the parentcontainer
 container.removeChild(mnb)
 //create a div element
 let div=document.createElement("div")

 //create a h2 element
 let h2=document.createElement("h2")
 //adding the h2 to the div
 div.innerHTML=" <h2>`this is a division inside mypage</h2>"
 document.body.appendChild(div)


