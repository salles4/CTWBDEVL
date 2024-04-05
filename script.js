$(function () {
    $(".dropdown-item").on("click", event =>{
        console.log(event.target)
        loadContent($(event.target).attr("data-sls-file"), $(event.target).attr("data-sls-script"))
    })
    function loadContent(content, script){
        console.log(script)
        $("#main-content").empty();
        $("#main-content").load(content + " *[data-sls-export]", ()=>{
                if (script != null){
                    $.getScript(script)
                }
        });
    }
})