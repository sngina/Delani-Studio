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

    $(".pro1").hover(function(){
        $(".ptext1").toggle()
      });
      $(".pro2").hover(function(){
        $(".ptext2").toggle()
      });
      $(".pro3").hover(function(){
        $(".ptext3").toggle()
      });$(".pro4").hover(function(){
        $(".ptext4").toggle()
      });$(".pro5").hover(function(){
        $(".ptext5").toggle()
      });$(".pro6").hover(function(){
        $(".ptext6").toggle()
      });
      $(".pro7").hover(function(){
        $(".ptext7").toggle()
      });$(".pro8").hover(function(){
        $(".ptext8").toggle()
      });
    
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