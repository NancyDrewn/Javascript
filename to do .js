 var inputbox=document.getElementById('inputtask')
 var ullist=document.getElementById('my list')
 function addtask(){
    if (inputbox.value=== ""){
        alert("please enter a task😁")
        
    }
    else{
         let li=document.createElement('li')
         li.innerHTML=inputbox.Value;
         ullist.appendChild(li)
 
 li.addEventListener("click",function(){
    alert('you clicked a list item🙂') 
    this.classList.toggle("completed")
 });
 var deletebutton=document.createElement('button')
 deletebutton.textContent="delete"
 li.appendChild(deletebutton)
 deletebutton.parentElement.remove()
}
}

 


