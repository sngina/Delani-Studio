$(document).ready(function () {

    $(".design_img").click(function () {
        $(".designTitle").show();
        $(this).hide();
    })

    $(".designTitle").click(function () {
        $(".design_img").show();
        $(this).hide();
    })
    $(".development_img").click(function () {
        $(".developmentTitle").show();
        $(this).hide();

    })
    $(".developmentTitle").click(function () {
        $(".development_img").show();
        $(this).hide();
    })
    $(".management_img").click(function () {
        $(".managementTitle").show();
        $(this).hide();
    })
    $(".managementTitle").click(function () {
        $(".management_img").show()
        $(this).hide();

    })


    $("#button").click(function(event){
        event.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var comment = $("#comment").val();

        if(name===""||email===""|| comment===""){
            alert("Fill all the fields")
        }
        else{
            alert("Thank you "+name+". for reaching out to us via email: "+email)
        }
    })

});