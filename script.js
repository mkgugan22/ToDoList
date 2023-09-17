var add = document.getElementById("addToDo");
var input=document.getElementById("inputField");
var toDoContainer=document.getElementById("toDoContainer");


add.addEventListener('click',addItem);

add.addEventListener('keypress',function(e){
   if(e.key=="Enter"){
    addItem();
   }
});

function addItem(e){
    const itemvalue=input.value;
    
    const item=document.createElement('div');
   
    item.classList.add('item');

    const itemContent = document.createElement('div');
    itemContent.classList.add('content');
    item.appendChild(itemContent);
    
    const inputItem=document.createElement('input');
    inputItem.classList.add('text');
    inputItem.type = "text";
    inputItem.value=itemvalue;
    
    inputItem.setAttribute('readonly','readonly');
    
    inputItem.addEventListener('dblclick',function(){
        inputItem.style.textDecoration= 'line-through';
    })
    
    itemContent.appendChild(inputItem);
    
    // const itemAction = document.createElement('div');
    
    // itemAction.classList.add('actions');
    
    const buttonEdit =document.createElement('button');
    buttonEdit.classList.add('edit','btn','btn-success');
    buttonEdit.type="button";
    buttonEdit.innerText='Edit';
    buttonEdit.style.float="right";
    
    const deleteItem =document.createElement('button');
    deleteItem.classList.add('delete','btn','btn-danger');
    deleteItem.innerText ='Delete';
    deleteItem.style.float="right";
    

itemContent.appendChild(buttonEdit);
itemContent.appendChild(deleteItem);

//  toDoContainer.appendChild(itemAction); 
    toDoContainer.appendChild(item);


    input.value='';

    buttonEdit.addEventListener('click',(e)=>{
        if(buttonEdit.innerText.toLowerCase()=="edit"){
            buttonEdit.innerText="save";
            inputItem.removeAttribute("readonly");
            inputItem.focus();
        }
        //else{
        //     inputItem.innerText ="edit";
        //     inputItem.setAttribute("readonly","readonly");
        // }
    });

    deleteItem.addEventListener('click',(e)=>{
        toDoContainer.removeChild(item);
    })
}