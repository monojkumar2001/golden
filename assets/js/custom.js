$(".hide_cross").click(function () {
  $(".top_Bar").removeClass("show");
  $(".cstm-margin-detail").addClass("up");
  $("#shopify-section-1582980077316").css("margin-top", "0");
  $(".cstm-marginss").addClass("mt-0");
  $("#cstm-not-home .cstm-margin-heaader").css("margin-top", "-40px");

  $(".cstm-margin-heaader").css("bottom", "0");
  $(".cstm-margin-heaader").css("margin-bottom", "0");
  $("#shopify-section-1550753373050").css("margin-top", "0");
});

if (window.location.toString().includes("tea-recipe")) {
  document.querySelector("h1").innerHTML = "Tea Recipes";
  console.log("working");
}
