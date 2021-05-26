function newTodoListElement() {                
    //create list item when clicking on Add button
    let myTodoList = document.createElement("li"); //create list
    let todoCheck = document.createElement("input");//create checkbox
    todoCheck.type = "checkbox";
    myTodoList.appendChild(todoCheck);//append to list

    let myTodoInput = document.getElementById("myInput").value;//catch id of textbox
    let text_value = document.createTextNode(myTodoInput);//create text node to appear list text
    myTodoList.appendChild(text_value);//append to list
    document.getElementById("myInput").value = "";//after list text, text box is blank

    let todoSpan = document.createElement("span");//create span
    let txt_close = document.createTextNode("\u00D7");//create text x to put in list
    todoSpan.className = "close";//class name of span
    todoSpan.appendChild(txt_close);//append x close text to span
    myTodoList.appendChild(todoSpan);//append to span to list
    //if checking of textbox is blank
    if (myTodoInput === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(myTodoList);
    }
    console.log(myTodoList);

    //create close button to disappear list text
    todoSpan.addEventListener('click', function(e) {
        let div = this.parentElement;
        div.style.display = "none";
    });

    //checkbox function
    todoCheck.addEventListener('change', function() {
        let div = this.parentElement;
        div.style.textDecoration = todoCheck.checked ? 'line-through' : 'none';
    });
}