$(document).ready(function(){

    var todoList = [];

    if(localStorage && localStorage.getItem("todoList")){
        todoList = localStorage.getItem("todoList").split(",");
        //Loop through the saved list of todos and and them to the page
        todoList.forEach(function(item){
            addTodo(item);
        });
    }

    //Click event for completed button
    $("ul").on("click", ".completed", function(){
        $(this).parent().toggleClass("done");
    })

    //Click event for remove button
    $("ul").on("click", ".remove", function(){
        $(this).parent().slideUp();
        removeTodo($(this).parent().index());
    })

    //create an event for the + button
    $(".add").on("click", function(){
        $(".new-task").slideToggle();
        $("#todo-text").focus();
    });

    //Add Task Button
    $(".add-new").on("click", function(){
        var todo = $("#todo-text").val();
        addTodo(todo);
        updateData(todo);
        //clear input text field and focus it again...
        $("#todo-text").val("").focus();   
    });


    //Event for enter button on text field
    $("#todo-text").on("keypress", function(event){
        if(event.keyCode === 13){
            var todo = $("#todo-text").val();
            addTodo(todo);
            updateData(todo);
            //clear input text field and focus it again...
            $("#todo-text").val("").focus();   
        }   
    });


    //This function adds a Todo to the screen
    function addTodo(todo){
        var template = `<li class='row'>
                            <a class='remove' href='#'>
                                <i class='fa fa-trash-o'></i>
                            </a>
                            <a class='completed' href='#'>
                                <i class='fa fa-check'></i>
                            </a>
                            ${todo}
                            </li>`;
        $(template).fadeIn().appendTo("ul");
    }

    //This function updates our todoList data
    function updateData(todo){
        //Add the todo to our array
        todoList.push(todo);
        console.log(todoList);
        //Add our todoList to localStorage
        localStorage.setItem("todoList", todoList);
    }

    //This function removes a todo from our list and resaves the localStorage
    function removeTodo(index){
        todoList.splice(index,1);
        localStorage.setItem("todoList", todoList);
    }

})








