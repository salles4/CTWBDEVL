$(function () {

    $("#generate").on("click", replace);
    function replace() {
        $("#quote").text("...");
        $("#author").text("...");
        $("#tags").text("");
        fetch("https://api.quotable.io/quotes/random")
            .then(response => response.json())
            .then(data => data.forEach(quote => {
                $("#quote").text(quote.content);
                $("#author").text(quote.author);
                $("#tags").text("Tags: " + quote.tags.join(", "))
                console.log(data)
            }))
            .catch(error => console.error(error));
    }
    replace();
});