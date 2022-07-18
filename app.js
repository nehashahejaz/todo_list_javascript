var list = document.getElementById("list");


function todoadd(){
    var to_do_item = document.getElementById("todoitem");
    

    if (to_do_item.value.length !== 0){
     
    var li = document.createElement('li');
    var litext= document.createTextNode(to_do_item.value);

    //deletebtn
    var delbtn = document.createElement("button");
    var delval= document.createTextNode("Delete");

    delbtn.setAttribute("class","btnn")
    delbtn.setAttribute("onclick", "delitem(this)")
   delbtn.appendChild(delval)
     //editebtn
     var editbtn = document.createElement("button");
     var editval= document.createTextNode("Edit");
 
     editbtn.setAttribute("class","edit")
     editbtn.setAttribute("onclick", "edititem(this)")
    editbtn.appendChild(editval)

 
    li.appendChild(litext)
  
    list.appendChild(li)
    li.appendChild(delbtn)
    li.appendChild(editbtn)
to_do_item.value="";
    console.log(delbtn)

    }
else{
    alert("PLEASE ENTER A ITEM IN LIST")
}

}

function delitem(d){
    d.parentNode.remove()
}
function alldel(){
    list.innerHTML ="";
   
}
 function edititem(e){
    var val = e.parentNode.firstChild.nodeValue
    editVal = prompt("enter edit value" , val)
    e.parentNode.firstChild.nodeValue = editVal
}
