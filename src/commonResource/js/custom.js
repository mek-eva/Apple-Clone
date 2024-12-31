/*global $*/
// credit for the group
//selecting h3 using the parent element

$(document).ready(function () {
  console.log("jQuery is working!");

  let footerh3 = $(".footer-links-wrapper h3");
  // let footerLis=footerh3.next();
  let toggleFun = () => {
    //mobile size
    if ($(window).width() <= 768) {
      //when the h3 is clicked

      footerh3.on("click", function () {
        $(this).next("ul").slideToggle(400); //next() used to find the next element of h3 which is ul
        //slideToggle() is used to hide and show the elements sublink
        $(this).toggleClass("expanded"); //add and hide the expanded class that has the X sign
      });
    }
  };

  //invoking the above function
  toggleFun(); //used to execute the function on load

  //used to execute the function when the screen size is large and make the event off
  $(window).resize(function () {
    if ($(window).width() > 768) {
      $(".footer-links-wrapper h3").off("click");
      $(".footer-links-wrapper ul").show();
    }
  });
});


// first approach was....

// $(document).ready(function () {
//   if ($(window).width() <= 768) {
//     $(".footer-links-wrapper h3").on("click", function () {
//       $(this).next("ul").slideToggle(500);
//       $(this).toggleClass("expanded");
//     });
//   } else {
//     $(".footer-links-wrapper h3").Off("Click");
//     $(".footer-links-wrapper ul").Show();
//   }
// });