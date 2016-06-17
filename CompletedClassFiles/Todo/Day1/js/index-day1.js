$(document).ready(function(){
    //Click event for completed button
    $("ul").on("click", ".completed", function(){
        $(this).parent().toggleClass("done");
    })

    //Click event for remove button
    $("ul").on("click", ".remove", function(){
        $(this).parent().slideUp();
    })

    //create an event for the + button
    $(".add").on("click", function(){
        $(".new-task").slideToggle();
        $("#todo-text").focus();
    });

    //Add Task Button
    $(".add-new").on("click", function(){
        var todo = $("#todo-text").val();

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
        //clear input text field and focus it again...
        $("#todo-text").val("").focus();   
    });


    //Event for enter button on text field
    $("#todo-text").on("keypress", function(event){
        if(event.keyCode === 13){
            var todo = $("#todo-text").val();

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
            //clear input text field and focus it again...
            $("#todo-text").val("").focus();
        }   
    });


})








