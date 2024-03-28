$(function () {
    $(".dropdown-item").on("click", event =>{
        console.log(event.target)
        loadContent($(event.target).attr("data-sls-file"))
    })
    function loadContent(content){
        $("#main-content").empty();
        $("#main-content").load(content + " *[data-sls-export]", ()=>{
            $.getScript("test1/test1.js")
        });
        console.log(content + " *[data-sls-export]")
    }
})