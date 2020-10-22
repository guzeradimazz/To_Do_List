let addMessage = document.querySelector('.message'), 
addButton = document.querySelector('.add'),
todo = document.querySelector('.todo');

let toDoList = [];

if(localStorage.getItem('todo')){
    toDoList =  JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}
addButton.addEventListener('click',function(){
    let newToDo = {
        todo : addMessage.value,
        checked : false, 
        impotant : false
    }

    toDoList.push(newToDo);
    displayMessages();

    localStorage.setItem('todo', JSON.stringify(toDoList));
});

function displayMessages(){
    let displayMessage = ' ';
    toDoList.forEach(function(item,i){
        displayMessage += `
        <li>
        <input type = 'checkbox' id = 'item_${i}' ${item.checked ? 'checked' : ''}>
        <label for = 'item_${i}'>${item.todo}</label>
        </li>
        `;
        todo.innerHTML= displayMessage;
    });

};
todo.addEventListener('change',function(event){

    let idInput = event.target.getAttribute('id');
    let forLabel = todo.querySelector('[for = '+ idInput + ']')
    let valueLabel = forLabel.innerHTML;
    

    toDoList.forEach(function(item){
        if(item.todo === valueLabel){
            item.checked =!item.checked;
            localStorage.setItem('todo', JSON.stringify(toDoList));
        }
    });
});