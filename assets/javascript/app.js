$(document).on("click", ".webButton", function(){
    let id = $(this).attr("id");
    let description = $(this).attr("data-info");
    let site = $(this).attr("data-site");
    console.log(id);
    console.log(description);
    $("#exampleModalCenterTitle").text(id);
    $(".modal-body").text(description);
    $("#siteButton").attr("data-site", site);
});

$(document).on("click", "#siteButton", function(){
    let web = $(this).attr("data-site");
    console.log(web);
    window.open(web, "_blank")
})